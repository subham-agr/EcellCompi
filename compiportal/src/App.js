import React from "react";
import Navbar from "./Components/Navbar/navbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import "./App.css";
import { Button } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Waiting from "./Components/WaitPage/waiting";
import Main from "./Components/Main/main";
import Result from "./Components/Results/result";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/waiting" element={ <Waiting/> } />
        <Route path="/waiting" element={ <Waiting/> } />
        <Route path="/results" element={ <Result/> } />
      </Routes>
    </BrowserRouter>
  );
}
