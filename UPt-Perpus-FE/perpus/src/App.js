import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout"
import Books from "./Pages/Books"
import Authors from "./Pages/Authors"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="books" element={<Books />} />
        <Route path="authors" element={<Authors />} />
      </Routes>
    </BrowserRouter>
  );
}