export type TodoFilter = "ALL" | "ACTIVE" | "COMPLETED";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export interface TodoState {
  todos: Todo[];
  filter: TodoFilter;
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  setFilter: (filter: TodoFilter) => void;
  clearCompleted: () => void;
}
