"use client";
import { Button, Grid, Stack } from "@mui/material";
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoginBtn from "./login-btn";
import AppDescription from "./app-description";


export default function Home() {
  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
      <h1><FontAwesomeIcon icon={faHouse} />Using Material UI with Next.js 13</h1>
      <Stack direction="row" columnGap={1}>
      <LoginBtn>
        Ok!
      </LoginBtn>
      </Stack>
    </Grid>
  );
}