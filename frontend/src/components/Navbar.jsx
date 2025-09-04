const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="/"><h1 className="text-xl font-bold text-orange-600">Bhagavad Gita</h1></a>

        {/* Links */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="/" className="hover:text-orange-600">Home</a>
          </li>
          <li>
            <a href="/chapters" className="hover:text-orange-600">Chapters</a>
          </li>
          <li>
            <a href="/abour" className="hover:text-orange-600">About</a>
          </li>
          <li>
            <a href="/references" className="hover:text-orange-600">References</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
