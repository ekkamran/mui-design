import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

function Navbar() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant='h6' component='h2'>
          تاپ لرن
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
