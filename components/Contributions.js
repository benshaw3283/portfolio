import React, { useState, useEffect } from "react";
import { useStore } from "../components/Theme";

const Contributions = () => {
  const [contributions, setContributions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { theme } = useStore();

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch("/api/github/contributions");
        if (!response.ok) {
          throw new Error("Failed to fetch contributions");
        }
        const data = await response.json();
        setContributions(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching contributions:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  if (loading)
    return <div className="text-center py-8">Loading contributions...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!contributions?.length) return <div>No contributions found</div>;

  return (
    <div className="w-full max-w-fit mx-auto py-4">
      <h2
        className={`text-2xl p-4 w-[90%] mx-auto mb-4 text-white text-center font-Chillax font-bold bg-black tracking-wider border-0 border-b ${
          theme === "red-500"
            ? "animate-[border-pulse-red_4s_ease-in-out_infinite]"
            : theme === "blue-500"
            ? "animate-[border-pulse-blue_4s_ease-in-out_infinite]"
            : theme === "green-500"
            ? "animate-[border-pulse-green_4s_ease-in-out_infinite]"
            : theme === "yellow-500"
            ? "animate-[border-pulse-yellow_4s_ease-in-out_infinite]"
            : "animate-[border-pulse-purple_4s_ease-in-out_infinite]"
        }`}
      >
        Open Source Contributions
      </h2>

      <div className="flex flex-col lg:flex-row  w-[94%] mx-auto gap-6 justify-center items-center">
        {contributions.map((pr) => (
          <a
            key={pr.url}
            href={pr.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 bg-gray-800/50 rounded-lg border border-${theme} hover:border-${theme} 
                     shadow-lg hover:shadow-${theme} transition-all duration-300 hover:-translate-y-1`}
          >
            <div className="flex flex-col space-y-2">
              <h3
                className={`lg:text-lg text-base font-semibold text-${theme}`}
              >
                {pr.title}
              </h3>

              <p className="text-gray-400 lg:text-base text-sm">
                Repository:{" "}
                <span className={`text-${theme}`}>{pr.repository.name}</span>
              </p>
              <p className="text-sm text-gray-500">
                {pr.repository.description}
              </p>
              <div className="flex space-x-4 text-sm text-gray-400">
                <span>
                  ✅ Merged:{" "}
                  {pr.mergedAt
                    ? new Date(pr.mergedAt).toLocaleDateString()
                    : "Unknown"}
                </span>
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
