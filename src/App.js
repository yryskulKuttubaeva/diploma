import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";

import Home from "./pages/Home";
import Glass from "./pages/Glass";
import Solar from "./pages/Solar";
import Minus from "./pages/Minus";
import Plus from "./pages/Plus";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minus" element={<Minus />} />
        <Route path="/plus" element={<Plus />} />
        <Route path="/glass" element={<Glass />} />
        <Route path="/solar" element={<Solar />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;