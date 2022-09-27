import React from "react";
import logo from "../logo.svg";

import Start from "./Start";
import "./css/App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Start />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
