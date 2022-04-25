import Home from "./pages/Home";
import Glass from "./pages/Glass";
import Solar from "./pages/Solar";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/glass" element={<Glass/>} />
          <Route path="/solar" element={<Solar />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
