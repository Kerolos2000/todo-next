import { Filters, Header, TodoInput, TodoList } from "src/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 py-12 px-4 sm:px-6 lg:px-8 selection:bg-indigo-100 selection:text-indigo-900">
      <main className="max-w-2xl mx-auto">
        <Header />

        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
          <div className="p-6 sm:p-8 bg-linear-to-b from-white to-slate-50/50">
            <TodoInput />
            <div className="mt-6">
              <Filters />
            </div>
          </div>

          <div className="bg-slate-50/50 p-6 sm:p-8 border-t border-slate-100 min-h-[300px]">
            <TodoList />
          </div>
        </div>
      </main>
    </div>
  );
}
