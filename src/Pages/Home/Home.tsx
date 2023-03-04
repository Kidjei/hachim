import React, {useEffect, useState} from "react";
import {Box} from "@mui/material"
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import {IEmployee} from "../../service/employee/employee.type";
import {getAllEmployee} from "../../service/employee/employee.service";
import EmployeeTable from "./ui/EmployeeTable";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import {deflateRaw} from "zlib";

export default function Home() {
    const [employeeList, setEmployeeList] = useState(
        [] as IEmployee[]
    );
    const [rowPerPage, setRowPerPage] = useState(10)
    const [lastEK, setLastEK] = useState("")
    const [prevLastEK, setPrevLastEK] = useState<string[]>([""])

    useEffect(() => {
        (async () => {
            const response = await getAllEmployee(rowPerPage, undefined)
            setEmployeeList(response.data)
            setLastEK(response.lastEvaluatedKey)
        })()
    }, [rowPerPage])

    const _handleRowPerPageChange = (n: number) => setRowPerPage(n)

    const goNext =  async () => {
        const response = await getAllEmployee(rowPerPage, lastEK)
        setPrevLastEK([...prevLastEK, lastEK])
        setLastEK(response.lastEvaluatedKey)
        setEmployeeList(response.data)
    }

    const goBack = async () => {
        prevLastEK.pop()
        const response = await getAllEmployee(rowPerPage, prevLastEK[prevLastEK.length-1].length === 0 ? undefined : prevLastEK[prevLastEK.length-1])
        setPrevLastEK(prevLastEK)
        setLastEK(response.lastEvaluatedKey)
        setEmployeeList(response.data)
    }

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
                    display: 'flex',
                    alignItems: 'center',
                    width: 600,
                    marginTop: 10,
                    height: 45,
                    boxShadow: "none",
                    backgroundColor: "#F5F7F9",
                    borderRadius: 0
                }}
            >
                <IconButton sx={{p: '0px 10px'}} aria-label="menu">
                    <SearchIcon/>
                </IconButton>
                <InputBase
                    sx={{ml: 1, flex: 1}}
                    placeholder="Search for anything"
                    inputProps={{'aria-label': 'search google maps'}}
                />

                <Button
                    sx={{
                        borderRadius: 0,
                        boxShadow: 0,
                        backgroundColor: "#438FFE",
                        height: 45
                    }}
                    color={"primary"}
                    variant="contained">
                    Search
                </Button>
            </Paper>

            <Box marginTop={10}>
                <EmployeeTable
                    rowPerPage={rowPerPage}
                    data={employeeList}
                    handleRowPerPageChange={_handleRowPerPageChange}
                    goNext={goNext}
                    disableGoNext={lastEK.length === 0}
                    goBack={goBack}
                />
            </Box>
        </Box>
    );
}
