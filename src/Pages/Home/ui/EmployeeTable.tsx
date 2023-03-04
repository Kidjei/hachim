import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {IEmployee} from "../../../service/employee/employee.type";
import {Box, IconButton, Menu, MenuItem, TablePagination, Typography} from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import {useNavigate} from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {useState} from "react";

interface Props {
    data: IEmployee[];
    rowPerPage: number
    handleRowPerPageChange: (n: number) => void
    goNext: () => Promise<void>
    disableGoNext: boolean
    goBack: () => Promise<void>
}

export default function EmployeeTable(props: Props) {
    const redirect = useNavigate()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuItem = (selectedNumber: number) => {
        props.handleRowPerPageChange(selectedNumber)
        setAnchorEl(null);
    };
    const option = [10, 15, 20];
    return (
        <Paper>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>UUID</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Nom & Prénom</TableCell>
                            <TableCell>Numéro de téléphone</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.data.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell>{row.email}</TableCell>
                                <TableCell>{row.name} {row.surname}</TableCell>
                                <TableCell>{row.phoneNumber}</TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={() => redirect(`/update?id=${row.id}`)}>
                                        <RemoveRedEyeIcon/>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box display={"flex"} flexDirection={"row"} justifyContent={"end"} alignItems={"center"}>
                <Typography marginRight={1}>Row per page</Typography>
                <IconButton onClick={handleClick}>
                    <Typography>{props.rowPerPage}</Typography>
                    <ArrowDropDownIcon/>
                </IconButton>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuItem}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {option.map((val) => (
                        <MenuItem key={val} onClick={() => handleMenuItem(val)}>{val}</MenuItem>
                    ))}
                </Menu>
                <IconButton onClick={props.goBack}>
                    <KeyboardArrowLeftIcon/>
                </IconButton>
                <IconButton disabled={props.disableGoNext} onClick={props.goNext}>
                    <KeyboardArrowRightIcon/>
                </IconButton>
            </Box>
        </Paper>
    );
}
