export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold text-blue-500">
        AIXcelerate
      </h1>

      <nav className="mt-10 space-y-4">
        <a href="/dashboard" className="block hover:text-blue-400">
          Dashboard
        </a>

        <a href="/dashboard/startup-validator" className="block hover:text-blue-400">
          Startup Validator
        </a>

        <a href="/dashboard/business-plan" className="block hover:text-blue-400">
          Business Plan
        </a>

        <a href="/dashboard/market-research" className="block hover:text-blue-400">
          Market Research
        </a>

        <a href="/dashboard/pitch-deck" className="block hover:text-blue-400">
          Pitch Deck
        </a>

        <a href="/dashboard/ai-chat" className="block hover:text-blue-400">
          AI Chat
        </a>
      </nav>
    </aside>
  );
}