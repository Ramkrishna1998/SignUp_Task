import React, { useState } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import "./index.css";
import Checkbox from "@material-ui/core/Checkbox";
const TalentSignUp = () => {
  const paperStyle = {
    padding: 20,
    width: 300,
    margin: "0 auto",
    color: "white",
    backgroundColor: "rgb(58, 56, 56)",
  };
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [username, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginUser = async (credentials) => {
    fetch("http://wren.in:3200/api/sign-up/talent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      fname,
      lname,
      username,
      email,
      password,
    });
    return response;
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <h2>Create Your Fan Account</h2>
          </Grid>
          <div className='labelMarginClass'>
            <label>First Name*</label>

            <input
              onChange={(e) => setfName(e.target.value)}
              className="button"
              type="text"
              name="name"
              placeholder="First Name"
            />
          </div>
          <div className='labelMarginClass'>
            <label>Last Name*</label>

            <input
              onChange={(e) => setlName(e.target.value)}
              className="button"
              type="text"
              name="name"
              placeholder=" Last Name"
            />
          </div>
          <div className='labelMarginClass'>
            <label>UserName*</label>

            <input
              onChange={(e) => setuserName(e.target.value)}
              className="button"
              type="text"
              name="name"
              placeholder="UserName"
            />
          </div>
          <div className='labelMarginClass'>
            <label>Email*</label>

            <input
              onChange={(e) => setemail(e.target.value)}
              className="button"
              type="email"
              name="name"
              placeholder="email"
            />
          </div>
          <div className='labelMarginClass'>
            <label>password*</label>

            <input
              onChange={(e) => setpassword(e.target.value)}
              className="button"
              type="password"
              placeholder="password"
            />
          </div>
          <div style={{ color: "white", whiteSpace: "pre" }}>
            <Checkbox name="checkedB" className="primary" />
            <label>
              I agree to the{" "}
              <strong className="primary">terms and conditions</strong>
            </label>
          </div>
          <div>
            <Button
              className="submit"
              type="submit"
              variant="contained"
              color="primary"
            >
              Sign up
            </Button>{" "}
          </div>
        </Paper>
      </Grid>{" "}
    </form>
  );
};

export default TalentSignUp;
