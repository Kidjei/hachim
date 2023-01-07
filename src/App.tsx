// import React from "react";
// import Home from "./componants/Home";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Home />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Route, Routes } from "react-router";
import Add from "./Pages/Add/Add";
import Home from "./Pages/Home/Home";
import Updatdelete from "./Pages/Updat-delete/Updatdelete";
import Navbar from "./componants/Nav";

import "./App.css";
import { IEmployee } from "./componants/Employee.type";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="Liste"
          element={
            <Updatdelete
              onBackBtnClickHnd={function (): void {
                throw new Error("Function not implemented.");
              }}
              onSubmitClickHnd={function (data: IEmployee): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        ></Route>
        <Route
          path="Ajoute"
          element={
            <Add
              onBackBtnClickHnd={function (): void {
                throw new Error("Function not implemented.");
              }}
              onSubmitClickHnd={function (data: IEmployee): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
