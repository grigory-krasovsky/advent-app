import {Box, Typography} from "@mui/material";
import './Title.css'

const Title = () => {
    return <Box className={'title-container'}>
        <Typography align={'center'} fontFamily={'Belgrano'} fontSize={140} className={'title-text upper-text'}>
            ADVENT
        </Typography>
        <Typography align={'center'} fontFamily={'BadScript'} fontSize={96} className={'title-text'}>
            calendar
        </Typography>
    </Box>
}

export default Title;