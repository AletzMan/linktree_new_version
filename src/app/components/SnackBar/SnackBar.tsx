
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { FC, forwardRef, SyntheticEvent, useState } from 'react';
import { SnackBarStatus, TypeAlert } from '@/app/types/types';

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBar: FC<SnackBarStatus> = ({ message, type, open, setOpen }) => {
    //const [open, setOpen] = useState(openBar);

    /*const handleClick = () => {
        setOpen(true);
    };*/

    const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Stack spacing={2} sx={{ width: '20em' }}>
            {/*<Button variant="outlined" onClick={handleClick}>
                Open success snackbar
            </Button>*/}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} >
                <Alert onClose={handleClose} severity={type} sx={{ width: '25em' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Stack>
    );
}

export default SnackBar