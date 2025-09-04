const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Gita</h3>
          <p>The eternal dialogue between Lord Krishna and Arjuna.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#chapters" className="hover:text-orange-500">All Chapters</a></li>
            <li><a href="#" className="hover:text-orange-500">Key Verses</a></li>
            <li><a href="#" className="hover:text-orange-500">Glossary</a></li>
          </ul>
        </div>

        {/* Study Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Study Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-500">Commentary</a></li>
            <li><a href="#" className="hover:text-orange-500">Audio</a></li>
            <li><a href="#" className="hover:text-orange-500">Downloads</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <p>Join our community of seekers exploring Gita wisdom.</p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © 2023 Bhagavad Gita Online. Dedicated to spreading divine wisdom.
      </div>
    </footer>
  );
};

export default Footer;
