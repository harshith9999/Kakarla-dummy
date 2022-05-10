import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
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
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell>{row.phone_number}</TableCell>
                <TableCell>{(new Date(row.demo_date)).toDateString()}</TableCell>
                <TableCell>{row.message}</TableCell>
                <TableCell>
                    <IconButton
                        aria-label="edit-demo"
                        size='small'
                        onClick={() => row?._id && navigate(`/demo-class/${row._id}`)}
                    >
                        <EditIcon />
                    </IconButton>
                </TableCell>
                <TableCell>
                    <IconButton
                        aria-label="delete-demo"
                        size='small'
                        onClick={handleDialog}
                    >
                        <DeleteIcon />
                    </IconButton>
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