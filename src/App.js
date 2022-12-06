import React from "react";
//import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.js";
import Home from "./pages/Home";
import Blogs from "./pages/PictureLists";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import PictureFiles from "./projects.json";
import PictureLists from "./pages/PictureLists";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          { PictureFiles.projects.map((p) => 
            <Route path={p.projectName.replace(" ", "-")} element={<PictureLists/>} key={p.projectName.replace(" ", "-")}></Route>
          )}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);
