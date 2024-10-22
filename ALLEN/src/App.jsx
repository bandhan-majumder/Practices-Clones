import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./components/Landing";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="bg-[#0F1825] m-0 p-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Landing />}></Route>
          <Route path="/test" element={<Testimonial />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
