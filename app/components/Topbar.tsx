export default function Topbar() {
  return (
    <header className="bg-white h-20 rounded-2xl shadow flex items-center justify-between px-8">
      <div>
        <h2 className="text-2xl font-bold">
          Welcome Back 👋
        </h2>

        <p className="text-gray-500">
          Manage your AI Startup from one place
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          P
        </div>

        <button className="bg-red-500 text-white px-5 py-2 rounded-xl">
          Logout
        </button>
      </div>
    </header>
  );
}