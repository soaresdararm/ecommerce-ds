import "./App.css";
import Hero from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Category } from "./components/Category/Category";
import { Category2 } from "./components/Category/Category2.jsx";

function App() {
  return (
    <div className="flex flex-col  gap-2">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
    </div>
  );
}

export default App;
