import { CheckSquare } from "lucide-react";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="mb-12 text-center">
      <div className="flex items-center justify-center mb-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative p-4 bg-white dark:bg-slate-900 ring-1 ring-slate-900/5 rounded-xl leading-none flex items-center justify-center shadow-xl">
            <CheckSquare className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl mb-3 bg-clip-text bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300">
        Todo App
      </h1>
      <p className="text-lg text-slate-600 dark:text-slate-400 font-medium max-w-md mx-auto">
        Focus on what matters most.
      </p>
    </header>
  );
};
