import React from "react";
import {Route, Routes} from "react-router";
import Add from "./Pages/Add/Add";
import Home from "./Pages/Home/Home";
import Navbar from "./componants/Nav";

import "./App.css";
import {IEmployee} from "./componants/Employee.type";
import UpdateAndDelete from "./Pages/UpdateAndDelete/UpdateAndDelete";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route
                    path="update"
                    element={<UpdateAndDelete/>}
                />
                <Route
                    path="add"
                    element={<Add/>}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
