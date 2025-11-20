"use client";
import { Check, Clock, Trash2 } from "lucide-react";
import React from "react";
import { useStore } from "src/store";
import { Todo } from "src/types";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, removeTodo } = useStore();

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(new Date(todo.createdAt));

  return (
    <div className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-200">
      <button
        onClick={() => toggleTodo(todo.id)}
        className={`relative shrink-0 w-6 h-6 rounded-lg border-2 transition-all duration-200 flex items-center justify-center
          ${
            todo.completed
              ? "bg-indigo-500 border-indigo-500"
              : "border-slate-300 hover:border-indigo-400"
          }
        `}
        aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
      >
        <Check
          className={`w-4 h-4 text-white transition-transform duration-200 
            ${todo.completed ? "scale-100" : "scale-0"}
          `}
          strokeWidth={3}
        />
      </button>

      <div className="grow min-w-0 flex flex-col">
        <span
          className={`text-base truncate transition-all duration-200 
            ${todo.completed ? "text-slate-400 line-through" : "text-slate-700"}
          `}
        >
          {todo.text}
        </span>
        <div className="flex items-center gap-1 mt-1">
          <Clock className="w-3 h-3 text-slate-300" />
          <span className="text-[10px] font-medium text-slate-300 uppercase tracking-wide">
            {formattedDate}
          </span>
        </div>
      </div>

      <button
        onClick={() => removeTodo(todo.id)}
        className="opacity-0 group-hover:opacity-100 p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200"
        aria-label="Delete task"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};
