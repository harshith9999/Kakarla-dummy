import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import Snackbar from '@mui/material/Snackbar';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MuiAlert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Rows from '../../components/viewLectureRows';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const ViewAppointment = () => {
    const [rows, setRows] = useState();
    const [open, setOpen] = useState(false);
    const [alert, setMessage] = useState({ message: "", severity: "" });
    const [openLoader, setOpenLoader] = useState(false);
    const [count, setCount] = useState()
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const fetchData = async () => {
        try {
                setOpenLoader(true)
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/video`)
                setRows(response.data.data)
                setCount(response.data.count)
                setOpenLoader(false)
        }
        catch (e) {
            setOpenLoader(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [page, rowsPerPage]);// eslint-disable-line react-hooks/exhaustive-deps


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };


    const deleteData = async (id) => {
        setOpenLoader(true)
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/video/${id}`)
            setRows(rows.filter((item) => item._id !== id))
            setOpenLoader(false);
            const message = alert;
            message.message = "Lecture Deleted Successfully";
            message.severity = 'success';
            setMessage(message);
            setOpen(true);
        }
        catch (error) {
            setOpenLoader(false);
            const message = alert;
            message.message = "Lecture Deletion Unsuccessful";
            message.severity = "error"
            setMessage(message);
            setOpen(true);
        }
    }

    return (
        openLoader ? <div className='loader'><CircularProgress color="inherit" /></div>
            :
            <div className='table'>
                {rows?.length ? <div>
                    <TableContainer component={Paper} sx={{ ml: 5, height: '450px' }}>
                        <Table aria-label="collapsible table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Description</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>URL</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Edit</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows !== undefined && rows.map((row) => (
                                    <Rows key={row._id} row={row} deleteData={deleteData} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={count}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div> : (
                    <Card>
                        <CardContent>
                            <Typography variant="h5" noWrap component="div" className='apptcard'> No Lectures </Typography>
                        </CardContent>
                    </Card>)}
                <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity={alert.severity}>
                        {alert.message}
                    </Alert>
                </Snackbar>
            </div>
    )
}

export default ViewAppointment