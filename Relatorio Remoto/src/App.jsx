import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OSSim from "./OSSim";
import OSDetalhes from "./OSDetalhes";
import PreencherOS from "./PreencherOS";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OSSim />} />
        <Route path="/os/:numero" element={<OSDetalhes />} />
        <Route path="/preencher/:numero" element={<PreencherOS />} />
      </Routes>
    </Router>
  );
}

export default App;
