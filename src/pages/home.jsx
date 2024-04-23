import {Grid, TextField} from "@mui/material"


const Home = () => {
    return ( 
        <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={3} xl={2}>
            <TextField
            fullWidth
            
            id="outlined-required"
            label="Buscar"
            />
            </Grid>

        </Grid>
     );
}
 
export default Home;