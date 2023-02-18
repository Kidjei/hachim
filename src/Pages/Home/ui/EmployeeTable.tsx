import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {IEmployee} from "../../../service/employee/employee.type";
import {IconButton} from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate} from "react-router-dom";

interface Props {
    data: IEmployee[]
}

export default function EmployeeTable({data}: Props) {
    const redirect = useNavigate()

    return (
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
                    {data.map((row) => (
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
    );
}
