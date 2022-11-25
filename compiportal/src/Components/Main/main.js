import React, { useState } from 'react'
import Navbar from '../Navbar/navbar'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

export default function Main() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(inputs)
  }

  return (
    <div>
        <div>
        <Navbar / >
      </div>
      <div className="balance">
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Balance
              </Typography>
              <Typography variant="body2" color="text.secondary">
                10 Lacs
              </Typography>
            </CardContent>
            {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
          </Card>
        </div>
        <div className="input">
          <Card sx={{ margin: 2 }}>
            <CardContent>
              <h1>Round 1</h1>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Item>
                    <h2>Macrohard</h2>
                    <TextField
                      id="outlined-basic"
                      type="number"
                      label="Investment"
                      variant="outlined"
                      name='Macrohard'
                      onChange={handleChange}
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <h2>Abidas</h2>
                    <TextField
                      id="outlined-basic"
                      type="number"
                      label="Investment"
                      variant="outlined"
                      name='Abidas'
                      onChange={handleChange}
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <h2>Hall Mart</h2>
                    <TextField
                      id="outlined-basic"
                      type="number"
                      label="Investment"
                      variant="outlined"
                      name='Hall Mark'
                      onChange={handleChange}
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <h2>Gharpe</h2>
                    <TextField
                      id="outlined-basic"
                      type="number"
                      label="Investment"
                      variant="outlined"
                      name='Gharpe'
                      onChange={handleChange}
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <h2>Martian Tourister</h2>
                    <TextField
                      id="outlined-basic"
                      type="number"
                      label="Investment"
                      variant="outlined"
                      name='Martian Tourister'
                      onChange={handleChange}
                    />
                  </Item>
                </Grid>
                <Grid item xs={6}>
                  <Item>
                    <h2>First Care</h2>
                    <TextField
                      id="outlined-basic"
                      type="number"
                      label="Investment"
                      variant="outlined"
                      name='First Care'
                      onChange={handleChange}
                    />
                  </Item>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button onClick={handleSubmit}>Submit</Button>
            </CardActions>
          </Card>
        </div>
    </div>
  )
}
