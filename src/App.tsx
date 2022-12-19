import React from "react";
import Home from "./componants/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

// import React from "react";
// import ResponsiveAppBar from "./componants/Nav";
// import { Route, Routes } from "react-router";
// import Add from "./componants/Add";
// import Home from "./componants/Home";
// import Updatdelete from "./componants/Updatdelete";

// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <ResponsiveAppBar />
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="Liste" element={<Add />}></Route>
//         <Route path="Ajoute" element={<Updatdelete />}></Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;
