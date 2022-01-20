import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FanSignUp from "../components/FanSignUp";
import TalentSignUp from "../components/TalentSignUp";
import "./SignUpPage.css";
const SignUpPage = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div className="box">
      <Tabs
        value={value}
        centered
        indicatorColor="inherit"
        textColor="primary"
        onChange={handleChange}
        
        aria-label=""
      >
        <Tab className="MuiButton mb-2" label="Fan Sign Up" selected />

        <Tab className="MuiButton mb-2" label="Talent Sign Up" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <FanSignUp handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TalentSignUp />
      </TabPanel>
    </div>
  );
};

export default SignUpPage;
