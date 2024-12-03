import {Box, Grid2} from "@mui/material";
import './Landing.css'
import CardFeed from "./cardFeed/CardFeed";
import Title from "./title/Title";

const Landing = () => {
    return <Box className={'landing'}>
        <Title/>
        <CardFeed />
    </Box>
}

export default Landing;