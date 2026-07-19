export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-5 bg-black text-white border-b border-gray-800">
      <h1 className="text-2xl font-bold text-blue-500">
        AIXcelerate
      </h1>

      <div className="flex gap-8">
        <a href="#" className="hover:text-blue-500">Home</a>
        <a href="#" className="hover:text-blue-500">Services</a>
        <a href="#" className="hover:text-blue-500">Pricing</a>
        <a href="#" className="hover:text-blue-500">Contact</a>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg">
        Login
      </button>
    </nav>
  );
}