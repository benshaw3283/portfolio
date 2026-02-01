import { graphql } from "@octokit/graphql";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    if (!process.env.GITHUB_ACCESS_TOKEN) {
      console.error("GITHUB_ACCESS_TOKEN is not set");
      return NextResponse.json(
        { error: "GitHub token not configured" },
        { status: 500 }
      );
    }

    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
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

 /*   // Get Base64-Pro PR via REST API
    const base64Response = await fetch(
      "https://api.github.com/repos/codinasion/Base64-Pro/pulls/2",
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!base64Response.ok) {
      console.error("Base64-Pro fetch failed:", base64Response.status, base64Response.statusText);
      throw new Error(`GitHub API returned ${base64Response.status}`);
    }

    const base64PR = await base64Response.json();

    // Format Base64-Pro PR to match GraphQL structure
    const formattedBase64PR = {
      title: base64PR.title,
      url: base64PR.html_url,
      repository: {
        name: base64PR.base.repo.name,
        nameWithOwner: base64PR.base.repo.full_name,
        url: base64PR.base.repo.html_url,
        description: base64PR.base.repo.description,
      },
      mergedAt: base64PR.merged_at || base64PR.closed_at,
      additions: base64PR.additions,
      deletions: base64PR.deletions,
    };
*/
    // Combine both PRs
    const relevantPRs = [...skillcertSearch.nodes];

    return NextResponse.json(relevantPRs);
  } catch (error) {
    console.error("Error fetching contributions:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
