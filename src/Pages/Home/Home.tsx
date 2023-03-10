import React, { useState } from "react";
import {
  IEmployee,
  dummyployeeList,
  PageEnum,
} from "../../componants/Employee.type";
// import Navbar from "../../componants/Nav";
import { Box, Select } from "@mui/material";
import EmployeeList from "../../componants/EmployeeList";
import Updatdelete from "../Updat-delete/Updatdelete";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
  const [employeeList, setEmployeeList] = useState(
    dummyployeeList as IEmployee[]
  );

  const [shownPage, setShownPage] = useState(PageEnum.list);

  const onAddEmployeeClickHnd = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const addEmployeeHnd = (data: IEmployee) => {
    setEmployeeList([...employeeList, data]);
  };

  // const deleteEployee = (data: IEmployee) => {
  //   const indexToDelete = employeeList.indexOf(data);
  //   const tempList = [...employeeList];

  //   tempList.splice(indexToDelete, 1);
  //   setEmployeeList(tempList);
  // };

  return (
    <Box
      sx={{
        width: "100%",
        height: "70%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: " 512px",
          marginTop: "30px",
          borderRadius: "0px",
        }}
      >
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>

        <InputBase
          sx={{ ml: 1, flex: 1, background: "#F5F7F9" }}
          placeholder="Search Google Maps"
          inputProps={{ "aria-label": "search google maps" }}
        />

        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

        <IconButton color="primary" aria-label="directions">
          <Button variant="contained">Searche</Button>
        </IconButton>
      </Paper>

      <>
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Employee"
              onClick={onAddEmployeeClickHnd}
              className="add-employee-btn"
            />
            <EmployeeList list={employeeList} />
          </>
        )}

        {shownPage === PageEnum.add && (
          <Updatdelete
            onSubmitClickHnd={addEmployeeHnd}
            onBackBtnClickHnd={showListPage}
          />
        )}
      </>
    </Box>
  );
}

// import React, { useState } from "react";
// import Paper from "@mui/material/Paper";
// import InputBase from "@mui/material/InputBase";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Button from "@mui/material/Button";
// import SearchIcon from "@mui/icons-material/Search";
// import { IEmployee, dummyployeeList } from "../../componants/Employee.type";

// import { Box } from "@mui/material";
// import EmployeeList from "../../componants/EmployeeList";

// export default function Home() {
//   const [employeeList, setEmployeeList] = useState(
//     dummyployeeList as IEmployee[]
//   );
//   console.log(employeeList);

//   return (
//     <Box sx={{width: "100%",height: "70%",display: "flex",flexDirection: "column",alignItems: "center",textAlign: "center",}}>
// <Paper component="form" sx={{p: "2px 4px",display: "flex",alignItems: "center",width: " 512px",marginTop: "30px",borderRadius: "0px",}} >

//   <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
//     <SearchIcon />
//   </IconButton>

//   <InputBase sx={{ ml: 1, flex: 1, background: "#F5F7F9" }} placeholder="Search Google Maps" inputProps={{ "aria-label": "search google maps" }} />

//   <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

//   <IconButton color="primary" aria-label="directions">
//     <Button variant="contained">Searche</Button>
//   </IconButton>
// </Paper>

//       <EmployeeList list={employeeList} />
//     </Box>
//   );
// }
