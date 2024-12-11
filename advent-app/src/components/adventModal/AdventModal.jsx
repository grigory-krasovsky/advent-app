import {
    Button,
    Card,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, Grid, IconButton, Snackbar,
    Typography
} from "@mui/material";
import './AdventModal.css';
import {useState} from "react";
const AdventModal = ({modalOpen, onClose, data}) => {

    const [copied, setCopied] = useState(false);

    const handleCopy = (link) => {
        setCopied(!copied)
        navigator.clipboard.writeText(link)
    }

    return <Dialog open={modalOpen} onClose={onClose} className={'advent-modal'} fullWidth>
        <DialogTitle justifyItems={'center'} color={'white'}>
            <Typography variant={'h4'} >{data.title}</Typography>
        </DialogTitle>
        <DialogContent>
            <DialogContentText justifyContent={'center'}>
                <Card className={'advent-modal-description'}>
                    {data.description}
                </Card>

                <Card className={'advent-modal-way-to-get'}>
                    {data.instructions}
                </Card>


            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button className={'advent-modal-button'}
                    variant={'contained'}
                    onClick={() => {
                        onClose();
                        setCopied(false)
                    }}>Супер!</Button>
        </DialogActions>
    </Dialog>
};

export default AdventModal;