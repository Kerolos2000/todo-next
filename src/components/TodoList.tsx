"use client";
import { Layers } from "lucide-react";
import React from "react";
import { TodoItem } from "src/components";
import { useStore } from "src/store";

export const TodoList: React.FC = () => {
  const { todos, filter } = useStore();

  const filteredTodos = todos.filter((todo) => {
    if (filter === "ACTIVE") return !todo.completed;
    if (filter === "COMPLETED") return todo.completed;
    return true;
  });

  if (todos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center px-4">
        <div className="bg-slate-50 p-6 rounded-full mb-4">
          <Layers className="w-12 h-12 text-slate-300" />
        </div>
        <h3 className="text-lg font-semibold text-slate-900 mb-1">
          You&apos;re all caught up
        </h3>
        <p className="text-slate-500 max-w-xs">
          Enjoy your day! Add a task above if something new comes up.
        </p>
      </div>
    );
  }

  if (filteredTodos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-slate-400">No {filter.toLowerCase()} tasks found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
