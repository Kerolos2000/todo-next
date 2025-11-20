"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Plus } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { TodoFormValues, todoSchema } from "src/schemas";
import { useStore } from "src/store";

export const TodoInput: React.FC = () => {
  const addTodo = useStore((state) => state.addTodo);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      text: "",
    },
  });

  const onSubmit = (data: TodoFormValues) => {
    addTodo(data.text);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full mb-6 relative group"
    >
      <div className="relative flex items-center">
        <input
          type="text"
          {...register("text")}
          placeholder="What needs to be done?"
          className={`w-full pl-5 pr-14 py-4 text-lg bg-white rounded-2xl shadow-sm border-2 outline-none transition-all duration-200 ease-in-out
            ${
              errors.text
                ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-50 placeholder-red-300"
                : "border-slate-100 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 placeholder-slate-400 group-hover:border-slate-200"
            }
          `}
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="absolute right-2 p-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all duration-200 shadow-md shadow-indigo-200"
          aria-label="Add task"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>

      {errors.text && (
        <div className="absolute -bottom-6 left-4 flex items-center gap-1.5 text-xs font-medium text-red-500 animate-pulse">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>{errors.text.message}</span>
        </div>
      )}
    </form>
  );
};
