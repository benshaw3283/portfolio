import React, { useState, useEffect } from 'react';
import { graphql } from '@octokit/graphql';
import { useStore } from '../components/Theme'

const Contributions = () => {
  const [contributions, setContributions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme } = useStore()

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const graphqlWithAuth = graphql.defaults({
          headers: {
            authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
          },
        });

        // Get skillcert PR via GraphQL
        const { skillcertSearch } = await graphqlWithAuth(`
          {
            skillcertSearch: search(query: "repo:skillcert/skillcert-frontend author:benshaw3283 is:pr is:merged", type: ISSUE, first: 100) {
              nodes {
                ... on PullRequest {
                  title
                  url
                  repository {
                    name
                    nameWithOwner
                    url
                    description
                  }
                  mergedAt
                  additions
                  deletions
                  changedFiles
                }
              }
            }
          }
        `);

        // Get Base64-Pro PR via REST API
        const base64Response = await fetch('https://api.github.com/repos/codinasion/Base64-Pro/pulls/2', {
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
            'Accept': 'application/vnd.github.v3+json'
          }
        });

        const base64PR = await base64Response.json();
        console.log('Raw Base64 PR data:', base64PR);

        // Format Base64-Pro PR to match GraphQL structure
        const formattedBase64PR = {
          title: base64PR.title,
          url: base64PR.html_url,
          repository: {
            name: base64PR.base.repo.name,
            nameWithOwner: base64PR.base.repo.full_name,
            url: base64PR.base.repo.html_url,
            description: base64PR.base.repo.description
          },
          mergedAt: base64PR.merged_at || base64PR.closed_at, // Use closed_at as fallback
          additions: base64PR.additions,
          deletions: base64PR.deletions
        };

        // Combine both PRs
        const relevantPRs = [
          ...skillcertSearch.nodes,
          formattedBase64PR
        ];

        // Log for debugging
        console.log('Search results:', {
          skillcert: skillcertSearch.nodes,
          base64: formattedBase64PR
        });

        // Log everything for debugging
        console.log('Combined PRs:', relevantPRs);

        setContributions(relevantPRs);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching contributions:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  if (loading) return <div className="text-center py-8">Loading contributions...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!contributions?.length) return <div>No contributions found</div>;

  return (
    <div className="w-full max-w-fit mx-auto py-4">
      <h2  className={`text-2xl p-4 w-fit mx-auto mb-4 text-white font-Chillax font-bold bg-black tracking-wider border-0 border-b ${theme === 'red-500' ? 'animate-[border-pulse-red_4s_ease-in-out_infinite]' : theme === 'blue-500' ? 'animate-[border-pulse-blue_4s_ease-in-out_infinite]' : theme === 'green-500' ? 'animate-[border-pulse-green_4s_ease-in-out_infinite]' : theme === 'yellow-500' ? 'animate-[border-pulse-yellow_4s_ease-in-out_infinite]' : 'animate-[border-pulse-purple_4s_ease-in-out_infinite]'}`}>Open Source Contributions</h2>
      
      <div className="flex flex-col lg:flex-row  w-[94%] mx-auto gap-6 justify-center items-center">
        {contributions.map((pr) => (
          <a
            key={pr.url}
            href={pr.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gray-800/50 rounded-lg border border-purple-500/30 hover:border-purple-500 
                     shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col space-y-2">
              <h3 className="lg:text-lg text-base font-semibold text-purple-300">{pr.title}</h3>
              <p className="text-gray-400 lg:text-base text-sm">
                Repository: <span className="text-purple-400">{pr.repository.name}</span>
              </p>
              <p className="text-sm text-gray-500">{pr.repository.description}</p>
              <div className="flex space-x-4 text-sm text-gray-400">
                <span>✅ Merged: {pr.mergedAt ? new Date(pr.mergedAt).toLocaleDateString() : 'Unknown'}</span>
               {pr.additions && pr.deletions > 0 ? ( 
                <div className="flex space-x-2">
                <span className="text-green-400">+{pr.additions}</span>
                <span className="text-red-400">-{pr.deletions}</span>
                </div>
               ) : (
                <span className="text-red-400">-{pr.changedFiles}</span>
        )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contributions;