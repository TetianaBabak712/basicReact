import Navigation from "../components/Menu/Menu";
import Grid from "@mui/material/Grid";
import { Outlet} from "react-router-dom";
import Footer from "../components/Footer/Footer";



function Main() {
    return (
        <div className="App">
          <Navigation />
          <Grid container sx={{minHeight: "100hv", marginBottom: "300px", marginTop: "1.25rem"}}>
            <Outlet />
          </Grid>
          <Footer />
        </div>
      );
    }



    export default Main;