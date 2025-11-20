import { TodoState } from "src/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create<TodoState>()(
  persist(
    (set, get) => ({
      todos: [],
      filter: "ALL",
      addTodo: (text: string) =>
        set({
          todos: [
            {
              id: btoa(String(Date.now())),
              text,
              completed: false,
              createdAt: Date.now(),
            },
            ...get().todos,
          ],
        }),
      toggleTodo: (id: string) =>
        set({
          todos: get().todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        }),
      removeTodo: (id: string) =>
        set({
          todos: get().todos.filter((todo) => todo.id !== id),
        }),
      setFilter: (filter) => set({ filter }),
      clearCompleted: () =>
        set({
          todos: get().todos.filter((todo) => !todo.completed),
        }),
    }),
    {
      name: "todo-storage",
    }
  )
);
