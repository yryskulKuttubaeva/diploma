import Home from "./pages/Home";
import Solar from "./pages/Solar";
import Glass from "./pages/Glass";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solar" element={<Solar />} />
          <Route path="/glass" element={<Glass/>} />

        </Routes>
      </Layout>
    </div>
  );
  
}
export default App;
