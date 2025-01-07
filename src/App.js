import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Easy from "./pages/Easy";
import Medium from "./pages/Medium";
import Hard from "./pages/Hard";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Easy" element={<Easy />} />
        <Route path="/Medium" element={<Medium />} />
        <Route path="/Hard" element={<Hard />} />
      </Routes>
    </>
  );
}

export default App;
