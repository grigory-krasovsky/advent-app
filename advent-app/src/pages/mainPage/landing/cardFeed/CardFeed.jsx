import './CardFeed.css';
import {Box, Grid} from "@mui/material";
import AdventCard from "./adventCard/AdventCard";
import data from '../../../../assets/data/data.json';
const CardFeed = () => {


    return <Box className={'card-feed'}>
        <Grid container>
            {data && data.map((book, i) => {
                return <Grid xs={4} className={'card-container'} key={i}>
                    <AdventCard book={book}/>
                </Grid>
            })}
        </Grid>
    </Box>
}

export default CardFeed;