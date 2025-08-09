export default function ProfilePage() {
  const user = {
    name: "Sophie W.",
    location: "London, UK",
    level: "Level 4: Wellness Explorer",
    streak: 12,
    achievements: [
      { label: "Cycle Sync Champion", date: "May 2024" },
      { label: "Consistency Queen", date: "Apr 2024" },
    ],
  };
  return (
    <main className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-pink-500 mb-8">Profile</h1>
      <section className="grid grid-cols-3 gap-8">
        {/* User Info & Progress */}
        <div className="col-span-1 bg-white rounded-2xl shadow p-6 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-sage-100 flex items-center justify-center text-4xl font-bold text-sage-400 mb-4">S</div>
          <div className="text-xl font-semibold text-neutral-900 mb-1">{user.name}</div>
          <div className="text-sm text-neutral-500 mb-2">{user.location}</div>
          <div className="text-base text-pink-500 font-bold mb-2">{user.level}</div>
          <div className="flex items-center gap-2 text-sage-500 font-semibold mb-2">
            <span>🔥</span>
            <span>{user.streak} day streak</span>
          </div>
        </div>
        {/* Achievements */}
        <div className="col-span-2 bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold text-sage-500 mb-4">Achievements</h2>
          <ul className="flex gap-6">
            {user.achievements.map((ach) => (
              <li key={ach.label} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-2xl mb-2">🏅</div>
                <span className="text-base font-bold text-pink-500">{ach.label}</span>
                <span className="text-xs text-neutral-400">{ach.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Settings */}
      <section className="mt-12 bg-white rounded-2xl shadow p-6 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold text-sage-500 mb-4">Settings</h2>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <span className="text-base text-neutral-700">Notifications</span>
            <input type="checkbox" className="w-6 h-6 accent-pink-400" defaultChecked />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-base text-neutral-700">Cycle Sync Tips</span>
            <input type="checkbox" className="w-6 h-6 accent-sage-400" defaultChecked />
          </div>
        </div>
      </section>
    </main>
  );
} 