export default function Navbar() {
    return (
      <nav className="top-0 left-0 right-0 bg-black shadow z-50 p-4">
        <ul className="flex gap-6">
          <li><a href="#hero" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    );
  }