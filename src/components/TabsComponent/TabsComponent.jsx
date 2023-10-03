import React from "react";
import { Box, Tab } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import {Rating} from "@mui/material";



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const theme = createTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: red[500],
      },
    },
  });


function TabsComponent({summary, series, rating}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
        <ThemeProvider theme={theme}>
        <TabContext value={value} >
         <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%"}}>
            <TabList 
            onChange={handleChange} 
            aria-label="tabs description"  
            textColor="secondary"
            indicatorColor="secondary" 
            centered
             >
            <Tab label="Description" value="1" sx={{ color: "#fff" }} />
            <Tab label="Series" value="2" sx={{ color: "#fff" }} />
            
            </TabList>
            </Box>
            <TabPanel value="1" >
            <div dangerouslySetInnerHTML={{__html: summary}} />
            </TabPanel>

            <TabPanel value="2" sx={{ width: "100%", margin: " 0 50px" }}>
                <TableContainer component={Paper} >
                  <Table  aria-label="simple table">
                    <TableHead sx={{backgroundColor: "#343a40", }}>
                        <TableRow>  
                          <TableCell sx={{color: "#fff", fontSize: "20px", fontWeight: "600",width: "50%"}}>Episode</TableCell>
                          <TableCell align="center" sx={{color: "#fff", fontSize: "20px", fontWeight: "600",}}>AirDate</TableCell>
                          <TableCell align="center" sx={{color: "#fff",fontSize: "20px", fontWeight: "600",}}>Rating</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{backgroundColor: "#212529",}}>
                      {series.map((series) => (
                        <TableRow
                          key={series.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row" sx={{color: "#fff", fontSize: "18px"}}>
                          {series.name} (Season {series.season}, Episode
                          {series.number})
                          </TableCell>
                          <TableCell align="center" sx={{color: "#fff", fontSize: "18px"}}>{series.airdate}</TableCell>
                          <TableCell align="center" sx={{color: "#fff", fontSize: "18px"}}>
                          <Rating
                            name="half-rating-read"
                            value={series.rating.average / 2}
                            max={5}
                            size="small"
                            style={{ color: "#D12E27", marginRight: "5px" }}
                            readOnly
                          />
                          <span
                           style={{
                           color: "#fff",
                           fontSize: "20px",
                           }}
                          >
                          {series.rating.average.toFixed(1)}
                          </span>
                        </TableCell>
                          
                        </TableRow>
                      ))}
                    </TableBody>
                </Table>
                </TableContainer>
            </TabPanel>
        
        </TabContext>
        </ThemeProvider>
        </>
    );
}

export default TabsComponent;









