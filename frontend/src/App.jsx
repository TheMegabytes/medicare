// Components

import Navbar from "./components/Navbar";

// Pages
import Hero from "./pages/landing/Hero.jsx";


const App = () => {
  return (
    <div className="bg-bg-app text-text-body">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
