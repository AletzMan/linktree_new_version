
import { SocialNetworks } from '@/app/constants/constants';
import { AlertDialogStatus } from '@/app/types/types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FC, useState } from 'react';

const AlertDialog: FC<AlertDialogStatus> = ({ openDialog, setOpenDialog, setResponseDialog }) => {


    const handleClose = (response: string) => {
        setOpenDialog({ open: false, linkSelected: openDialog.linkSelected, application: openDialog.application });
        console.log(openDialog.linkSelected)
        setResponseDialog(response)
    };

    return (
        <div>

            <Dialog
                open={openDialog.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                sx={{ "& .MuiDialog-paper": { backgroundColor: 'var(--primaryColor)' } }}

            >
                <DialogTitle id="alert-dialog-title"
                    sx={{
                        color: 'red',
                        padding: '0.2em 1em',
                        backgroundColor: 'var(--secondaryColor)',
                        fontSize: '1em'
                    }}>
                    {"Eliminar"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{ color: 'var(--fontColor)', margin: '1em 0 0 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p>Se eliminara el siguiente enlace:</p>
                        <span style={{
                            color: `${SocialNetworks[openDialog.application].color1}`,
                            fontWeight: 'bolder',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin: '1em 0 0 0'
                        }}>
                            {SocialNetworks[openDialog.application].logo}{SocialNetworks[openDialog.application].name}
                        </span>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleClose('CANCEL')}
                        sx={{
                            backgroundColor: 'var(--backgroundColor)',
                            color: 'var(--fontColor)',
                            border: '1px solid var(--terciaryColor)',
                            ":hover": {
                                backgroundColor: 'var(--buttonColor)'
                            }
                        }}
                    >Cancelar</Button>
                    <Button onClick={() => handleClose('OK')}
                        autoFocus
                        sx={{
                            backgroundColor: 'var(--terciaryColor)',
                            color: 'var(--fontColor)',
                            ":hover": {
                                backgroundColor: 'var(--buttonColor)'
                            }
                        }}
                    >
                        Eliminar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AlertDialog