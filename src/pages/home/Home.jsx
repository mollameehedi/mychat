import { Grid } from '@mui/material'
import React from 'react'
import UserLIst from '../../components/home/UserLIst'
import FriendRequest from '../../components/home/FriendRequest'
import './home.css'
import Friends from '../../components/home/Friends'
import BlockList from '../../components/home/BlockList'

const Home = () => {
  return (
    <>
    <Grid container spacing={3} sx={{ mx: 12,my:1 }}>
        <Grid item lg={4}>
            <UserLIst/>
        </Grid>
         <Grid item lg={4} >
         <Friends/>
        </Grid>
        <Grid item lg={4}>
            <FriendRequest/>
        </Grid> 
        <Grid item lg={4}>
            <BlockList/>
        </Grid> 
    </Grid>
    </>
  )
}

export default Home