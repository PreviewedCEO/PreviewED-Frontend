import { LandingPage } from "./pages/LandingPage";
import "./App.css";

function App() {
  return (
    <>
      <LandingPage />
      <h1 className="bg-black font-mono text-cyan-300">Hello World</h1>
      <div className="bg-teal-500 w-[5rem] h-[5rem] rounded-md"></div>
    </>
  );
}

export default App;
