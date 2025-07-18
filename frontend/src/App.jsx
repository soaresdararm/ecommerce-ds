import "./App.css";
import Hero from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Category } from "./components/Category/Category";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
    </div>
  );
}

export default App;
