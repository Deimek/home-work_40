import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./component/loyout/loyout.js";
import Home from "./pages/home/home.js";
import Todo from "./pages/todo/todo.js";
import Swapi from "./pages/swapi/swapi.js";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<Todo />} />
                <Route path="contact" element={<Swapi />} />
            </Route>
        </Routes>
    );
};

export default App;
