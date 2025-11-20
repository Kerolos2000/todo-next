"use client";

import { Trash2 } from "lucide-react";
import React from "react";
import { useStore } from "src/store";
import { TodoFilter } from "src/types";

export const Filters: React.FC = () => {
  const { filter, setFilter, todos, clearCompleted } = useStore();

  const activeCount = todos.filter((t) => !t.completed).length;
  const hasCompleted = todos.some((t) => t.completed);

  const filters: { label: string; value: TodoFilter }[] = [
    { label: "All", value: "ALL" },
    { label: "Active", value: "ACTIVE" },
    { label: "Completed", value: "COMPLETED" },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-1 text-sm text-slate-500">
      <span className="font-medium">
        {activeCount} {activeCount === 1 ? "task" : "tasks"} remaining
      </span>

      <div className="flex p-1 bg-slate-100 rounded-xl gap-1">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={`px-4 py-1.5 rounded-lg font-medium transition-all duration-200
              ${
                filter === f.value
                  ? "bg-white text-indigo-600 shadow-sm"
                  : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
              }
            `}
          >
            {f.label}
          </button>
        ))}
      </div>

      <button
        onClick={clearCompleted}
        disabled={!hasCompleted}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition-colors
          ${
            hasCompleted
              ? "text-slate-500 hover:text-red-600 hover:bg-red-50 cursor-pointer"
              : "text-slate-300 cursor-not-allowed"
          }
        `}
      >
        <Trash2 className="w-4 h-4" />
        Clear Done
      </button>
    </div>
  );
};
