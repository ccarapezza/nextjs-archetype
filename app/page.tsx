import React from 'react'
import Grid from "./components/material/Grid";
import Stack from "./components/material/Stack";
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoginButton from "./components/LoginButton";
import AppDescription from "./components/AppDescription";

export default function Home() {
  return (
    <Grid container height="100vh" alignItems="center" justifyContent="center" direction="column">
      <h1><FontAwesomeIcon icon={faHouse} />Using Material UI with Next.js 13</h1>
      <Stack direction="column" columnGap={1}>
        <LoginButton />
        <AppDescription/>
      </Stack>
    </Grid>
  );
}