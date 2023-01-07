import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IEmployee } from "../../componants/Employee.type";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

export default function Add(props: Props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setpassword] = useState("");
  console.log(firstname);
  console.log(lastname);
  console.log(email);
  console.log(number);
  console.log(password);

  const onfirtnameChangeBnt = (e: any) => {
    setFirstname(e.target.value);
  };

  const onLastnameChangeBnt = (e: any) => {
    setLastname(e.target.value);
  };

  const onEmailnameChangeBnt = (e: any) => {
    setEmail(e.target.value);
  };
  const onNumbeChangeBnt = (e: any) => {
    setNumber(e.target.value);
  };
  const onpasswordChangeBnt = (e: any) => {
    setpassword(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();

    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstname,
      lastName: lastname,
      email: email,
      Numéro: number,
      password: password,
    };

    onSubmitClickHnd(data);
    console.log(data);
  };

  const { onSubmitClickHnd, onBackBtnClickHnd } = props;

  return (
    <form onSubmit={onSubmitBtnClickHnd}>
      <Box
        sx={{
          width: "1192px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          margin: "0 auto",
          marginTop: "50px",
          backgroundColor: "#e0e0e0",
          height: "442px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "left",
            alignItems: "center",
            paddingLeft: "115px",
          }}
        >
          <h2 style={{ color: "#616161", fontSize: "18px" }}>
            Infomation du compte
          </h2>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ width: "43%", backgroundColor: "#FFF", fontSize: "16px" }}
            id="name"
            value={firstname}
            label="Name"
            variant="outlined"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <TextField
            sx={{ width: "43%", backgroundColor: "#FFF", fontSize: "16px" }}
            value={lastname}
            style={{ marginLeft: "50px" }}
            id="outlined-basic"
            label="Prenom"
            variant="outlined"
            onChange={(e) => setLastname(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ width: "43%", backgroundColor: "#FFF", fontSize: "16px" }}
            value={email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ width: "43%", backgroundColor: "#FFF", fontSize: "16px" }}
            value={password}
            style={{ marginLeft: "50px" }}
            id="outlined-basic"
            label="password"
            variant="outlined"
            onChange={(e) => setpassword(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ width: "90%", backgroundColor: "#FFF", fontSize: "16px" }}
            value={number}
            id="outlined-basic"
            label="Numero de telephone ( format +33... )"
            variant="outlined"
            onChange={(e) => setNumber(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "154%",
            justifyContent: "flex-end",
            paddingRight: "772px",
          }}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: "0px",
              padding: "17px 41px",
              backgroundColor: "#83BCBD",
              color: "#FFF",
              fontSize: "16px",
            }}
            onClick={onSubmitBtnClickHnd}
          >
            Envoter
          </Button>
        </Box>
      </Box>
    </form>
  );
}

{
  /* <Box
sx={{ width: "1192px", display: "flex", flexDirection: "column", justifyContent: "space-evenly", 
alignItems: "center", margin: "0 auto", marginTop: "20px", backgroundColor: "#8d6e63", height: "442px",
}}>
<Box sx={{display: "flex",flexDirection: "row",width: "100%",justifyContent: "center",alignItems: "center",}}>
  <TextField sx={{ width: "43%" }} id="name" value={firstname} label="Name" variant="outlined" onChange={(e) => setFirstname(e.target.value)}/>
  <TextField sx={{ width: "43%" }} value={lastname} style={{ marginLeft: "50px" }} id="outlined-basic" label="Prenom" variant="outlined" onChange={(e) => setLastname(e.target.value)}/>
</Box>

<Box sx={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center",}}>
  <TextField sx={{ width: "43%" }} value={email} id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
  <TextField sx={{ width: "43%" }} value={password} style={{ marginLeft: "50px" }} id="outlined-basic" label="password" variant="outlined" onChange={(e) => setpassword(e.target.value)}/>
</Box>

<Box sx={{display: "flex",flexDirection: "row",width: "100%",justifyContent: "center",alignItems: "center",}}>
  <TextField sx={{ width: "90%", paddingRight: "48px" }} value={number} style={{ marginLeft: "50px" }} id="outlined-basic" label="Numero de telephone ( format +33... )" variant="outlined" onChange={(e) => setNumber(e.target.value)}/>
</Box>

<Box sx={{ display: "flex", flexDirection: "row", width: "150%", justifyContent: "space-around",}}>
  <Button variant="contained" onClick={onBackBtnClickHnd} color="success">BackBtnClick</Button>
  <Button variant="contained" onClick={onSubmitBtnClickHnd}>
    SubmitBtnClick
  </Button>
</Box>
</Box> */
}
