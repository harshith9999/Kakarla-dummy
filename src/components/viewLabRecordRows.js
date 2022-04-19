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
                    {row.patient_name}
                </TableCell>
                <TableCell>{row.sex}</TableCell>
                <TableCell>{row.mr_id}</TableCell>
                <TableCell>{row.code_number}</TableCell>
                <TableCell>{row.lab_name}</TableCell>
                <TableCell>{row.material}</TableCell>
                <TableCell>{row.shades}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="edit-labRecord"
                        size='small'
                        onClick={() => row?._id && navigate(`/lab-records/${row._id}`)}
                    >
                        <EditIcon />
                    </IconButton>
                </TableCell>
                <TableCell>
                    <IconButton
                        aria-label="delete-lab-record"
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
                            <Typography variant="h6" gutterBottom component="div" sx={{ fontWeight: 'bold' }}>
                                Details
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        {row.age && <TableCell sx={{ fontWeight: 'bold' }}>Age</TableCell>}
                                        {row.made_by && <TableCell sx={{ fontWeight: 'bold' }}>Made By</TableCell>}
                                        {row.poured_by && <TableCell sx={{ fontWeight: 'bold' }}>Poured By</TableCell>}
                                        {row.checked_by && <TableCell sx={{ fontWeight: 'bold' }}>Checked By</TableCell>}
                                        {row.work_type && <TableCell sx={{ fontWeight: 'bold' }}>Work Type</TableCell>}
                                        {row.remarks && <TableCell sx={{ fontWeight: 'bold' }}>Remarks</TableCell>}
                                        {row.notes && <TableCell sx={{ fontWeight: 'bold' }}>Notes</TableCell>}
                                        {row.sent_date && <TableCell sx={{ fontWeight: 'bold' }}>Sent Date</TableCell>}
                                        {row.received_date && <TableCell sx={{ fontWeight: 'bold' }}>Received Date</TableCell>}
                                        {row.cementation_date && <TableCell sx={{ fontWeight: 'bold' }}>Cementation Date</TableCell>}
                                        {row.message && <TableCell sx={{ fontWeight: 'bold' }}>Message</TableCell>}
                                        {row.status && <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>}

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow key={row._id}>
                                        {row.age && <TableCell component="th" scope="row">
                                            {row.age}
                                        </TableCell>}
                                        {row.made_by && <TableCell scope="row"> {row.made_by}</TableCell>}
                                        {row.poured_by && <TableCell scope="row"> {row.poured_by}</TableCell>}
                                        {row.checked_by && <TableCell scope="row"> {row.checked_by}</TableCell>}
                                        {row.work_type && <TableCell scope="row"> {row.work_type}</TableCell>}
                                        {row.remarks && <TableCell scope="row"> {row.remarks}</TableCell>}
                                        {row.notes && <TableCell scope="row"> {row.notes}</TableCell>}
                                        {row.sent_date && <TableCell scope="row"> {(new Date(row.sent_date)).toDateString()}</TableCell>}
                                        {row.received_date && <TableCell scope="row"> {(new Date(row.received_date)).toDateString()}</TableCell>}
                                        {row.cementation_date && <TableCell scope="row"> {(new Date(row.cementation_date)).toDateString()}</TableCell>}
                                        {row.message && <TableCell scope="row"> {row.message}</TableCell>}
                                        {row.status && <TableCell scope="row"> {row.status}</TableCell>}

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