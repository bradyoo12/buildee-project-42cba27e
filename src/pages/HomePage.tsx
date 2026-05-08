import { Link } from "react-router-dom";

const projects = [
  { id: 1, title: "E-Commerce Platform", tag: "React / Node.js", color: "bg-indigo-500" },
  { id: 2, title: "Analytics Dashboard", tag: "TypeScript / D3", color: "bg-emerald-500" },
  { id: 3, title: "Mobile Banking App", tag: "React Native", color: "bg-amber-500" },
  { id: 4, title: "AI Chat Interface", tag: "Next.js / Python", color: "bg-rose-500" },
];

const skills = ["React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "AWS", "Docker", "GraphQL"];

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="flex flex-col items-center gap-6 pt-10 text-center">
        <div className="h-28 w-28 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600" />
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, I'm <span className="text-indigo-600">Alex Kim</span>
        </h1>
        <p className="max-w-xl text-lg text-gray-500">
          Full-stack developer crafting modern web experiences. I love turning complex problems into simple, beautiful solutions.
        </p>
        <div className="flex gap-4">
          <Link
            to="/dashboard"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500"
          >
            View Projects
          </Link>
          <Link
            to="/settings"
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Edit Profile
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-center text-2xl font-bold">Featured Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className={`${p.color} h-40 transition-transform group-hover:scale-105`} />
              <div className="p-5">
                <h3 className="font-semibold">{p.title}</h3>
                <span className="text-sm text-gray-400">{p.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-center text-2xl font-bold">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-indigo-600 p-10 text-center text-white">
        <h2 className="mb-3 text-2xl font-bold">Let's Work Together</h2>
        <p className="mb-6 text-indigo-100">Have a project in mind? I'd love to hear about it.</p>
        <a
          href="mailto:alex@example.com"
          className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-50"
        >
          Get In Touch
        </a>
      </section>
    </div>
  );
}
