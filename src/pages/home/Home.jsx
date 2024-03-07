import { Grid } from '@mui/material'
import React from 'react'
import Friend from '../../components/home/Friend'

const Home = () => {
  return (
    <>
    <Grid container spacing={3} gap={2} sx={{ mx: 2,my:1 }}>
        <Grid item >
            <Friend/>
        </Grid>
        <Grid item >
         <Friend/>
        </Grid>
        <Grid item>
            <Friend/>
        </Grid>
    </Grid>
    </>
  )
}

export default Home