"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Plus } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { TodoFormValues, todoSchema } from "src/schemas";
import { useStore } from "src/store";

export const TodoInput: React.FC = () => {
  const addTodo = useStore((state) => state.addTodo);

  const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      text: "",
    },
  });

  const onSubmit = (data: TodoFormValues) => {
    addTodo(data.text);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mb-8 relative z-10"
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <div className="relative flex items-center gap-2">
                <FormControl>
                  <Input
                    placeholder="What needs to be done?"
                    className="h-14 pl-6 pr-14 text-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm focus-visible:ring-indigo-500 transition-all duration-300 hover:border-indigo-300 dark:hover:border-indigo-700"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <Button
                  type="submit"
                  size="icon"
                  disabled={form.formState.isSubmitting}
                  className="absolute right-2 h-10 w-10 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-200 dark:shadow-none transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <Plus className="w-5 h-5" />
                  <span className="sr-only">Add task</span>
                </Button>
              </div>
              <FormMessage className="ml-4 mt-2 text-red-500 font-medium flex items-center gap-1">
                {(msg) => (
                  <>
                    <AlertCircle className="w-3 h-3" />
                    {msg}
                  </>
                )}
              </FormMessage>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
