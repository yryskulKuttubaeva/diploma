import Home from "./pages/Home";
import Solar from "./pages/Solar";
import Minus from "./pages/Minus";
import Plus from "./pages/Plus";
import Glass from "./pages/Glass";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/minus" element={<Minus />} />
          <Route path="/plus" element={<Plus />} />
          <Route path="/glass" element={<Glass/>} />
          <Route path="/solar" element={<Solar />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
