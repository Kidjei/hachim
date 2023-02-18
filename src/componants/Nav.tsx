import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Toolbar, Typography, IconButton, Stack } from "@mui/material";
import logo_transparent from "../assets/logo_transparent.png";

const pages = [
    {name: "Add", page: "/add"},
    {name: "List", page: "/"}
];

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", width: "100%" }}>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          boxShadow: "0px 1px 0px #E2E2E2",
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
            {" "}
            <img src={logo_transparent} alt="" />{" "}
          </IconButton>
          <Typography
            sx={{ color: "#438FFE", fontSize: "20px", margin: "10px" }}
          >
            {" "}
            For Big Techos{" "}
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2}>
          {pages.map(({name, page}) => (
            <Button key={page} sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#438FFE",
                  fontSize: "20px",
                  borderBottom: "solid",
                }}
                to={page}
              >
                {name}
              </Link>
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
