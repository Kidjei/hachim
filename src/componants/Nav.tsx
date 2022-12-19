import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Toolbar, Typography, IconButton, Stack } from "@mui/material";
import logo_transparent from "../assets/logo_transparent.png";

const pages = ["Liste", "Ajoute"];

function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <img src={logo_transparent} alt="" />
          </IconButton>

          <Typography
            sx={{ color: "#438FFE", fontSize: "20px", margin: "10px" }}
          >
            For Big Techos
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          {pages.map((page) => (
            <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/${page}`}
              >
                {page}
              </Link>
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";

// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
// import { Toolbar, Typography, IconButton, Stack } from "@mui/material";
// import logo_transparent from "../assets/logo_transparent.png";

// const pages = ["Liste", "Ajoute"];

// function ResponsiveAppBar() {
//   return (
//     <AppBar position="static" sx={{ backgroundColor: "#fff" }}>
//       <Toolbar
//         sx={{display: "flex",flexDirection: "row",justifyContent: "space-between"}}>
//         <Stack sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",}}>
//           <IconButton size="large" edge="start" color="inherit" aria-label="logo">
//             <img src={logo_transparent} alt="" />
//           </IconButton>

//           <Typography sx={{ color: "#438FFE", fontSize: "20px", margin: "10px" }}>
//             For Big Techos
//           </Typography>
//         </Stack>

//         <Stack direction="row" spacing={2}>
//           {pages.map((page) => (
//             <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
//               <Link style={{ textDecoration: "none", color: "black" }} to={`/${page}`}>{page}</Link>
//             </Button>
//           ))}
//         </Stack>
//       </Toolbar>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;
