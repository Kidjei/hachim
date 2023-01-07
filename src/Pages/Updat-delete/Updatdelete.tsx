import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { IEmployee } from "../../componants/Employee.type";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IEmployee) => void;
};

export default function Updatdelete(props: Props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setpassword] = useState("");

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
            width: "154%",
            justifyContent: "space-around",
          }}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: "0px",
              padding: "17px 41px",
              backgroundColor: "#FE764B",
              color: "#FFF",
              fontSize: "16px",
            }}
            onClick={onBackBtnClickHnd}
            color="success"
          >
            Suprimer
          </Button>
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

// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from '@mui/material/Button';

// export default function Updatdelete() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [place, setPlace] = useState("");

//   const submit = () =>{
//   console.log(name);
//   console.log(email);
//   console.log(phoneNumber);
//   console.log(place);

//   }

//   return (
//     <Box sx={{width: "100%" }}>

//     <Box
//       sx={{"& .MuiTextField-root": { m: 1, width: "55ch" },display: "flex",flexDirection: "column",justifyContent: "center",
//         alignItems: "center",margin: "25px",backgroundColor: "#F5F7F9",width: "1192px",height: "442px",}}>

//            <div>
//             <TextField id="name" value={name} label="Name" variant="outlined" onChange={(e) => setName(e.target.value)}/>
//             <TextField value={email} style={{ marginLeft: "50px" }} id="outlined-basic" label="Email" variant="outlined" onChange={(e) => setEmail(e.target.value)}/>
//           </div>

//           <div>
//             <TextField value={phoneNumber} id="outlined-basic" label="Phone" variant="outlined" onChange={(e) => setPhoneNumber(e.target.value)}/>
//             <TextField value={place} style={{ marginLeft: "50px" }} id="outlined-basic" label="place" variant="outlined" onChange={(e) => setPlace(e.target.value)}/>
//           </div>
//           <div>
//           <Box sx={{ width: '100%'}}>
//             <TextField fullWidth label="fullWidth" id="fullWidth" />
//           </Box>
//           </div>

//           <div><Button variant="contained" onClick={() => submit()}>contained</Button></div>

//     </Box>
//   </Box>
//   );
// }
