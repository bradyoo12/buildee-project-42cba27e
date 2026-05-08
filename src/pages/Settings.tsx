import { useState } from "react";

export default function Settings() {
  const [name, setName] = useState("Alex Kim");
  const [email, setEmail] = useState("alex@example.com");
  const [bio, setBio] = useState("Full-stack developer crafting modern web experiences.");
  const [location, setLocation] = useState("Seoul, South Korea");
  const [website, setWebsite] = useState("https://alexkim.dev");
  const [saved, setSaved] = useState(false);

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="mt-1 text-gray-500">Update your profile information and preferences.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-semibold">Profile</h2>

          <div className="mb-6 flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 text-2xl font-bold text-white">
              {name.charAt(0)}
            </div>
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-sm text-gray-400">{email}</p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-700">Full Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-700">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-700">Location</span>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-700">Website</span>
              <input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1 block text-sm font-medium text-gray-700">Bio</span>
              <textarea
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </label>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-lg font-semibold">Notifications</h2>
          <div className="space-y-4">
            {["Email notifications for new messages", "Weekly project summary", "Marketing and promotional emails"].map(
              (label, i) => (
                <label key={i} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    defaultChecked={i < 2}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span className="text-sm text-gray-700">{label}</span>
                </label>
              )
            )}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="rounded-lg bg-indigo-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Save Changes
          </button>
          {saved && <span className="text-sm font-medium text-emerald-600">Changes saved successfully!</span>}
        </div>
      </form>
    </div>
  );
}
