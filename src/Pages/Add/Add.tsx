import React, {FormEvent, FormEventHandler, useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {IEmployee} from "../../componants/Employee.type";
import {CreateEmployeeDTO} from "../../service/employee/employee.type";
import {createEmployee} from "../../service/employee/employee.service";
import {useInRouterContext, useNavigate} from "react-router-dom";
import {Alert, Backdrop, CircularProgress, Snackbar} from "@mui/material";

export default function Add() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [file, setFile] = useState<FileList>({} as unknown as FileList)
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false )

    const router = useNavigate()

    const onSubmitBtnClickHnd = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const data = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            file: file
        }

        await createEmployee(data)
        setLoading(false)
        setSuccess(true)
    };

    if (loading) {
        return (
            <Backdrop
                sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}}
                open={loading}
            >
                <CircularProgress color="inherit"/>
            </Backdrop>
        )
    }


    return (
        <>
            <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Employee successfully created
                </Alert>
            </Snackbar>
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
                        backgroundColor: "#F5F7F9",
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
                        <h2 style={{color: "#241C57", fontSize: "18px"}}>
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
                            sx={{width: "43%", backgroundColor: "#FFFFFF", fontSize: "16px"}}
                            id="name"
                            value={firstname}
                            label="Name"
                            variant="outlined"
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                        <TextField
                            sx={{width: "43%", backgroundColor: "#FFF", fontSize: "16px"}}
                            value={lastname}
                            style={{marginLeft: "50px"}}
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
                            sx={{width: "43%", backgroundColor: "#FFF", fontSize: "16px"}}
                            value={email}
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            sx={{width: "43%", backgroundColor: "#FFF", fontSize: "16px"}}
                            value={password}
                            style={{marginLeft: "50px"}}
                            id="outlined-basic"
                            label="password"
                            variant="outlined"
                            type={"password"}
                            onChange={(e) => setPassword(e.target.value)}
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
                            sx={{width: "90%", backgroundColor: "#FFF", fontSize: "16px"}}
                            value={phoneNumber}
                            id="outlined-basic"
                            label="Numero de telephone ( format +33... )"
                            variant="outlined"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </Box>

                    <input onChange={(e) => {
                        if (e.target.files && e.target.files.length > 0) {
                            // @ts-ignore
                            setFile(e.target.files[0] as FileList)
                        }
                    }} type={"file"}/>

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
                                backgroundColor: "#83BCBD",
                                color: "#FFF",
                                boxShadow: "none",
                                fontSize: "16px"
                            }}
                            type={"submit"}
                        >
                            Envoyer
                        </Button>
                    </Box>
                </Box>
            </form>
        </>

    );
}
