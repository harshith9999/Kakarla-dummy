import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AlertDialog from './DialogBox';
import { useNavigate } from 'react-router-dom';


const Rows = (props) => {
    let navigate = useNavigate();
    const { row, deleteData } = props
    const [open, setOpen] = useState(false);
    const [dialog, setDialog] = useState(false);

    const handleDialog = () => {
        setDialog(!dialog)
    }

    const onDeleteData = () => {
        deleteData(row._id)
        setDialog(!dialog)
    }

    return (
        <React.Fragment>
            <AlertDialog dialog={dialog} handleDialog={handleDialog} onDeleteData={onDeleteData} />
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} onClick={() => setOpen(!open)}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell>{row.phone_number}</TableCell>
                <TableCell>{(new Date(row.appointment_date)).toDateString()}</TableCell>
                <TableCell>{row.message}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="edit-appointment"
                        size='small'
                        onClick={() => row?._id && navigate(`/appointment/${row._id}`)}
                    >
                        <EditIcon />
                    </IconButton>
                </TableCell>
                <TableCell>
                    <IconButton
                        aria-label="delete-appointment"
                        size='small'
                        onClick={handleDialog}
                    >
                        <DeleteIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            {row.age && row.sex && row.done_by && row.next_appointment_date && row.further_treatment_planned && row.treating_doctor && row.postpone_details
                                && row.action && row.remarks && <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                                    Details
                                </Typography>}
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        {row.age && <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>}
                                        {row.sex && <TableCell sx={{ fontWeight: 'bold' }}>Sex</TableCell>}
                                        {row.mr_id && <TableCell sx={{ fontWeight: 'bold' }}>MR ID</TableCell>}
                                        {row.done_by && <TableCell sx={{ fontWeight: 'bold' }}>Done By</TableCell>}
                                        {row.next_appointment_date && <TableCell sx={{ fontWeight: 'bold' }}>Next Appointment Date</TableCell>}
                                        {row.further_treatment_planned && <TableCell sx={{ fontWeight: 'bold' }}>Further Treatment Planned</TableCell>}
                                        {row.treating_doctor && <TableCell sx={{ fontWeight: 'bold' }}>Treating Doctor</TableCell>}
                                        {row.postpone_details && <TableCell sx={{ fontWeight: 'bold' }}>Postpone Details</TableCell>}
                                        {row.action && <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>}
                                        {row.remarks && <TableCell sx={{ fontWeight: 'bold' }}>Remarks</TableCell>}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={row._id}>
                                        {row.age && <TableCell component="th" scope="row">
                                            {row.age}
                                        </TableCell>}
                                        {row.sex && <TableCell scope="row"> {row.sex}</TableCell>}
                                        {row.mr_id && <TableCell scope="row"> {row.mr_id}</TableCell>}
                                        {row.done_by && <TableCell scope="row"> {row.done_by}</TableCell>}
                                        {row.next_appointment_date && <TableCell scope="row"> {(new Date(row.next_appointment_date)).toLocaleString()}</TableCell>}
                                        {row.further_treatment_planned && <TableCell scope="row"> {row.further_treatment_planned}</TableCell>}
                                        {row.treating_doctor && <TableCell scope="row"> {row.treating_doctor}</TableCell>}
                                        {row.postpone_details && <TableCell scope="row"> {row.postpone_details}</TableCell>}
                                        {row.action && <TableCell scope="row"> {row.action}</TableCell>}
                                        {row.remarks && <TableCell scope="row"> {row.remarks}</TableCell>}
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Rows.propTypes = {
    row: PropTypes.shape({
        name: PropTypes.string.isRequired,
        appointment_date: PropTypes.string.isRequired,
        phone_number: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired,
    })
}

export default Rows