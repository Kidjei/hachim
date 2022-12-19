import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IEmployee } from "./Employee.type";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  list: IEmployee[];
};

export default function EmployeeList(props: Props) {
  const { list } = props;
  return (
    <Box sx={{width: "100%",height: "70%",display: "flex",flexDirection: "column",alignItems: "center",textAlign: "center",}}>
      <Paper component="form" sx={{p: "2px 4px",display: "flex",alignItems: "center",width: " 512px",marginTop: "30px",borderRadius: "0px",}}>

        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>

        <InputBase sx={{ ml: 1, flex: 1, background: "#F5F7F9" }} placeholder="Search Google Maps" inputProps={{ "aria-label": "search google maps" }} />

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <IconButton color="primary" aria-label="directions">
          <Button variant="contained">Search</Button>
        </IconButton>

      </Paper>
    <TableContainer
      component={Paper}
      sx={{
        width: "70%",
        textAlign: "center",
        boxShadow: "none",
        borderRadius: "0px",
        
        marginTop: "15px",
      }}
      >
      <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">UUID</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">NOM & Prenom</TableCell>
            <TableCell align="center">Numero de tel</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((row) => (
            <TableRow
            key={row.id}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              boxShadow: 0,
              background: "#F5F7F9",
              width: "1164px",
              height: "60px",
            }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{`${row.firstName} ${row.lastName}`}</TableCell>
              <TableCell align="center">{row.Numéro}</TableCell>
              <TableCell align="center">{row.password}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Box>
  );
}

// import * as React from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { IEmployee } from "./Employee.type";

// type Props = {
//   list: IEmployee[];
// };

// function EmployeeList(props: Props) {
//   const { list } = props;
//   return (
//     <TableContainer
//       sx={{ display: "flex", justifyContent: "center", width: "100%" }}
//     >
//       <TableHead sx={{ display: "flex", flexDirection: "column" }}>
//         <TableRow
//           sx={{
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: "space-between",
//             width: "1164px",
//           }}
//         >
//           <TableCell>UUID</TableCell>
//           <TableCell>Email</TableCell>
//           <TableCell>Nom & Prénom</TableCell>
//           <TableCell>Numéro de tel</TableCell>
//           <TableCell>Action</TableCell>
//         </TableRow>

//         <TableBody>
//           {list.map((employee) => {
//             return (
//               <TableRow
//                 key={employee.id}
//                 sx={{
//                   display: "flex",
//                   flexDirection: "row",
//                   justifyContent: "space-between",
//                   width: "1164px",
//                 }}
//               >
//                 <TableCell>{employee.id}</TableCell>
//                 <TableCell>{employee.email}</TableCell>
//                 <TableCell>{employee.firstName}</TableCell>
//                 <TableCell>{employee.lastName}</TableCell>
//                 <TableCell>{employee.Numéro}</TableCell>
//               </TableRow>
//             );
//           })}

//         </TableBody>
//       </TableHead>
//     </TableContainer>
//   );
// }

// export default EmployeeList;
