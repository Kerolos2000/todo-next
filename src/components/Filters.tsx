"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trash2 } from "lucide-react";
import React from "react";
import { useStore } from "src/store";
import { TodoFilter } from "src/types";

export const Filters: React.FC = () => {
  const { filter, setFilter, todos, clearCompleted } = useStore();

  const activeCount = todos.filter((t) => !t.completed).length;
  const hasCompleted = todos.some((t) => t.completed);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 mt-2">
      <span className="text-sm font-medium text-slate-500 dark:text-slate-400 order-2 sm:order-1">
        {activeCount} {activeCount === 1 ? "task" : "tasks"} remaining
      </span>

      <Tabs
        defaultValue={filter}
        onValueChange={(val) => setFilter(val as TodoFilter)}
        className="order-1 sm:order-2"
      >
        <TabsList className="grid w-full grid-cols-3 h-10 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
          <TabsTrigger value="ALL" className="rounded-lg text-xs font-medium">
            All
          </TabsTrigger>
          <TabsTrigger
            value="ACTIVE"
            className="rounded-lg text-xs font-medium"
          >
            Active
          </TabsTrigger>
          <TabsTrigger
            value="COMPLETED"
            className="rounded-lg text-xs font-medium"
          >
            Completed
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="order-3 sm:order-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={clearCompleted}
          disabled={!hasCompleted}
          className={`text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors ${
            !hasCompleted && "opacity-50 cursor-not-allowed"
          }`}
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Clear Done
        </Button>
      </div>
    </div>
  );
};
