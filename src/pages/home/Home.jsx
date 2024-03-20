import { Grid } from '@mui/material'
import React from 'react'
import UserLIst from '../../components/home/UserLIst'
import FriendRequest from '../../components/home/FriendRequest'
import './home.css'

const Home = () => {
  return (
    <>
    <Grid container spacing={3} sx={{ mx: 12,my:1 }}>
        <Grid item lg={4}>
            <UserLIst/>
        </Grid>
         <Grid item lg={4} >
         <FriendRequest/>
        </Grid>
        <Grid item lg={4}>
            <FriendRequest/>
        </Grid> 
    </Grid>
    </>
  )
}

export default Home