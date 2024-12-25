import Hero from './components/hero/Hero';
import Messages from './components/messages/Messages';
import Gallery from './components/gallery/Gallery';
import { Confetti } from './components/Confetti';
import { AddMessage } from './components/AddMessage';
import { Footer } from './components/Footer';
import profilePicture from './assets/profile.jpg';

function App() {
  const handleScroll = (
    event:
      | React.MouseEvent<HTMLAnchorElement>
      | React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-blue-600 flex items-center space-x-4">
            <img
              src={profilePicture}
              alt="Profile Picture"
              className="w-12 h-12 rounded-full"
            />
            <span>Abhishek Sir Birthday</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="hover:text-blue-600"
              onClick={(e) => handleScroll(e, 'hero')}
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-blue-600"
              onClick={(e) => handleScroll(e, 'messages')}
            >
              Messages
            </a>
            <a
              href="#"
              className="hover:text-blue-600"
              onClick={(e) => handleScroll(e, 'gallery')}
            >
              Gallery
            </a>
          </nav>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            onClick={(e) => handleScroll(e, 'add-message')}
          >
            Send Wish
          </button>
        </div>
      </header>
      <Confetti />
      <main className="pt-20">
        <Hero />
        <Messages />
        <Gallery />
        <AddMessage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
