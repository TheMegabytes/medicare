// Components

import Navbar from "./components/Navbar";

// Pages
// import Hero from "./pages/landing/Hero.jsx";
// import Login from "./pages/auth/Login.jsx";
// import Signup from "./pages/auth/Signup.jsx";
// import Features from "./pages/landing/Features.jsx";
import Pricing from "./pages/landing/Pricing.jsx";

const App = () => {
  return (
    <div className="bg-linear-to-bl from-primary-100 to-bg-app text-text-body">
      <Navbar />
      {/* <Hero /> */}
      {/* <Features /> */}
      <Pricing />
      {/* <Login />
      <Signup /> */}
    </div>
  );
};

export default App;
