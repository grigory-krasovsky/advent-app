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
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const AdventModal = ({modalOpen, onClose, data}) => {

    const [copied, setCopied] = useState(false);

    const handleCopy = (link) => {
        setCopied(!copied)
        navigator.clipboard.writeText(link)
    }

    return <Dialog open={modalOpen} onClose={onClose} className={'advent-modal'} fullWidth>
        <DialogTitle>
            Новая книга: <Typography variant={'h5'}>{data.title}</Typography>
        </DialogTitle>
        <DialogContent>
            <DialogContentText justifyContent={'center'}>
                <Card className={'advent-modal-description'}>
                    {data.description}
                </Card>

                {data.link ? <Grid container>
                        <Grid item xs={11}>
                            <Card className={'advent-modal-way-to-get'}>
                                {data.link}
                            </Card>
                        </Grid>
                        <Grid item xs={1} sx={{paddingTop: '15px'}}>
                            {!copied ? <IconButton size={'large'} onClick={() => handleCopy(data.link)}>
                                    <ContentCopyIcon/>
                                </IconButton> :
                                <IconButton size={'large'} disabled={true}>
                                    <CheckCircleIcon color={'success'}/>
                                </IconButton>}
                        </Grid>

                    </Grid> :
                    <Card className={'advent-modal-way-to-get'}>
                        {data.link}
                    </Card>
                }


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