import { useState } from "react";

interface Project {
  id: number;
  title: string;
  stack: string;
  status: "Live" | "In Progress" | "Archived";
}

const initial: Project[] = [
  { id: 1, title: "E-Commerce Platform", stack: "React, Node.js, Stripe", status: "Live" },
  { id: 2, title: "Analytics Dashboard", stack: "TypeScript, D3.js, Express", status: "Live" },
  { id: 3, title: "Mobile Banking App", stack: "React Native, Firebase", status: "In Progress" },
  { id: 4, title: "AI Chat Interface", stack: "Next.js, Python, OpenAI", status: "In Progress" },
  { id: 5, title: "Blog Platform", stack: "Gatsby, MDX, Netlify", status: "Archived" },
];

const statusColor: Record<Project["status"], string> = {
  Live: "bg-emerald-100 text-emerald-700",
  "In Progress": "bg-amber-100 text-amber-700",
  Archived: "bg-gray-100 text-gray-500",
};

const stats = [
  { label: "Total Projects", value: "12" },
  { label: "Technologies", value: "18" },
  { label: "Years Experience", value: "6" },
  { label: "Clients", value: "24" },
];

export default function Dashboard() {
  const [projects, setProjects] = useState(initial);
  const [showForm, setShowForm] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newStack, setNewStack] = useState("");

  function addProject() {
    if (!newTitle.trim()) return;
    setProjects((prev) => [
      ...prev,
      { id: Date.now(), title: newTitle.trim(), stack: newStack.trim(), status: "In Progress" },
    ]);
    setNewTitle("");
    setNewStack("");
    setShowForm(false);
  }

  function removeProject(id: number) {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-1 text-gray-500">Manage your portfolio projects and track progress.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500">{s.label}</p>
            <p className="mt-1 text-3xl font-bold text-indigo-600">{s.value}</p>
          </div>
        ))}
      </div>

      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Projects</h2>
          <button
            onClick={() => setShowForm((v) => !v)}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            {showForm ? "Cancel" : "+ Add Project"}
          </button>
        </div>

        {showForm && (
          <div className="mb-4 flex flex-wrap gap-3 rounded-xl border border-gray-200 bg-white p-4">
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="Project title"
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <input
              value={newStack}
              onChange={(e) => setNewStack(e.target.value)}
              placeholder="Tech stack"
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <button
              onClick={addProject}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              Save
            </button>
          </div>
        )}

        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-6 py-3 font-medium text-gray-500">Project</th>
                <th className="px-6 py-3 font-medium text-gray-500">Tech Stack</th>
                <th className="px-6 py-3 font-medium text-gray-500">Status</th>
                <th className="px-6 py-3 font-medium text-gray-500"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {projects.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{p.title}</td>
                  <td className="px-6 py-4 text-gray-500">{p.stack}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusColor[p.status]}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => removeProject(p.id)}
                      className="text-xs text-red-500 transition hover:text-red-700"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-10 text-center text-gray-400">
                    No projects yet. Add one above.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
