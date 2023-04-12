import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { LinkTree } from "./pages/LinkTree";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tree" element={<LinkTree />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  )
}