import React from "react";
import { useStore } from './Theme'

const Minutia = () => {
  const { theme } = useStore()
  return (
    <div className={` bg-black opacity-90 ${theme === 'red-500' ? 'shadow-red-500' : theme === 'blue-500' ? 'shadow-blue-500' : theme === 'green-500' ? 'shadow-green-500' : theme === 'yellow-500' ? 'shadow-yellow-500' : 'shadow-purple-500'} shadow-inner p-6 rounded-lg w-[94%] mx-auto my-8`}>
      <div className="flex items-center justify-center space-x-2 mb-6">
        <span className="text-4xl">🏗️</span>
        <h2 className="text-2xl font-bold text-white text-center">Under Construction</h2>
        <span className="text-4xl">👷</span>
      </div>

      <div className="space-y-4 text-white">
        <p className="text-lg font-medium">
          Building <strong className={`text-${theme}`}>Minutia</strong>: Your
          Personal AI-Powered Content Assistant
        </p>

        <div className="bg-black p-4 rounded-md space-y-2">
          <p>
            <span className="font-semibold"> How it works:</span> Minutia uses
            ChatGPT to generate personalized daily notifications based on your
            preferences.
          </p>
          <div>
            <span className="font-semibold">For example:</span>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>
                Daily sports updates and game predictions for your favorite
                teams
              </li>
              <li>Local events and trending spots in your area for today</li>
              <li>Stock market insights and price alerts for your watchlist</li>
            </ul>
          </div>
          <p>
            <span className="font-semibold">🎯 Features:</span>
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>AI-powered content generation</li>
            <li>Daily push notifications for your phone or computer</li>
            <li>Google & Email authentication</li>
          </ul>
        </div>

        <div className="mt-6 flex flex-row gap-2">
          <p className="font-medium">🔗 GitHub Repository:</p>
          <a
            href="https://github.com/benshaw3283/minutia"
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Minutia
          </a>
        </div>

        <div className={`${theme === 'red-500' ? 'bg-red-500/50' : theme === 'blue-500' ? 'bg-blue-500/50' : theme === 'green-500' ? 'bg-green-500/50' : theme === 'yellow-500' ? 'bg-yellow-500/50' : 'bg-purple-500/50'} p-4 rounded-md mt-4`}>
          <p className="text-sm italic">
            <span className="font-semibold">🛠️ Tech Stack:</span> Next.js,
            TypeScript, Supabase, PostgreSQL, OpenAI API, NextAuth, OneSignal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Minutia;
