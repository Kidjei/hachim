import React, {FormEvent, FormEventHandler, useEffect, useState} from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {IEmployee} from "../../componants/Employee.type";
import {CreateEmployeeDTO} from "../../service/employee/employee.type";
import {createEmployee, deleteEmployee, getEmployeeByID, updateEmployee} from "../../service/employee/employee.service";
import {redirect, useInRouterContext, useNavigate} from "react-router-dom";
import {Alert, Backdrop, CircularProgress, Snackbar, Typography} from "@mui/material";
import {useSearchParams} from 'react-router-dom'

export default function UpdateAndDelete() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const [searchParams, _] = useSearchParams()

    const redirect = useNavigate()

    const onSubmitBtnClickHnd = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        const data = {
            firstname: firstname,
            lastname: lastname,
            phoneNumber: phoneNumber,
        }

        await updateEmployee(data, searchParams.get("id") as string)
        setLoading(false)
        setSuccess(true)
    };

    useEffect(() => {
        (async () => {
            const id = searchParams.get("id")
            if (id == null) {
                return redirect(`/`)
            }
            const admin = await getEmployeeByID(id)
            setFirstname(admin.name)
            setLastname(admin.surname)
            setEmail(admin.email)
            setPhoneNumber(admin.phoneNumber)
        })()
    }, [])

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

    const _handleDelete = async () => {
        setLoading(true)
        await deleteEmployee(searchParams.get("id") as string)
        return redirect("/")
    }

    return (
        <>
            <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                <Alert onClose={() => setSuccess(false)} severity="success" sx={{width: '100%'}}>
                    Employee successfully created
                </Alert>
            </Snackbar>
            <form onSubmit={onSubmitBtnClickHnd} style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        marginTop: "50px",
                        backgroundColor: "#F5F7F9",
                        width: "80%",
                        padding: "0px 50px"
                    }}
                >
                    <Typography marginTop={5} marginBottom={5} variant={"h2"} sx={{color: "#241C57", fontSize: "18px"}}>
                        Information du compte
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: 5,
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
                            marginBottom: 5,
                        }}
                    >
                        <TextField
                            sx={{width: "43%", backgroundColor: "#FFFFFF", fontSize: "16px"}}
                            id="name"
                            value={email}
                            label="Email"
                            variant="outlined"
                            onChange={(e) => setEmail(e.target.value)}
                            disabled
                        />
                        <TextField
                            sx={{width: "43%", backgroundColor: "#FFF", fontSize: "16px"}}
                            value={phoneNumber}
                            style={{marginLeft: "50px"}}
                            id="outlined-basic"
                            label="Numero de telephone ( format +33... )"
                            variant="outlined"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            width: "89%",
                            justifyContent: "space-between",
                            marginBottom: 5,
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: "0px",
                                backgroundColor: "#FE764B",
                                color: "#FFF",
                                boxShadow: "none",
                                fontSize: "16px"
                            }}
                            onClick={_handleDelete}
                        >
                            Supprimer
                        </Button>

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
