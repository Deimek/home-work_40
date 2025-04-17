import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/home.js";
import Swapi from "../../pages/swapi/swapi.js";
import Todo from "../../pages/todo/todo.js";
import "./main-content.scss"

const Main = () => {

    return (
        <>
            <div className="main-content">
                <Routes>
                    <Route path="/main" element={<Home />} />
                    <Route path="/about" element={<Todo />} />
                    <Route path="/contact" element={<Swapi />} />
                </Routes>
            </div>

        </>
    )
}

export default Main;