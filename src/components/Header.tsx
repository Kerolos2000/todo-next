import { CheckSquare } from "lucide-react";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="mb-8 text-center">
      <div className="flex items-center justify-center gap-3 mb-2">
        <div className="p-3 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-200">
          <CheckSquare className="w-8 h-8 text-white" />
        </div>
      </div>
      <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
        Todo App
      </h1>
      <p className="text-slate-500 mt-2">Focus on what matters most.</p>
    </header>
  );
};
