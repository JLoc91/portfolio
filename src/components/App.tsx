import React from "react";

import Start from "./Start";
import "./css/App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Start />} />
                    {/* <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cv" element={<CV />} /> */}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
