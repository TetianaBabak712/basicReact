import React from "react";
import { Box, Tab, Tabs } from "@mui/material";

function TabsComponent({summary}) {
    return (
        <>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="film-tabs-component ">
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Rate&Review" {...a11yProps(1)} />
            </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
        <div dangerouslySetInnerHTML={{__html: summary}} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        Item Two
        </CustomTabPanel>
       
    </>
    );
}

export default TabsComponent;