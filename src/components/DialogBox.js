import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({ dialog, handleDialog, onDeleteData}) {
    return (
        <div>
            <Dialog
                open={dialog}
                onClose={() => handleDialog()}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure want to delete?"}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={() => onDeleteData()} autoFocus>Yes</Button>
                    <Button onClick={() => handleDialog()} >No</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
