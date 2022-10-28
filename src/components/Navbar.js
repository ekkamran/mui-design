import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  InputBase,
  alpha,
  Badge,
  Avatar
} from '@material-ui/core'
import { Mail, Notifications, Search, Cancel } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    borderRadius: '4px',
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      display: (props) => (props.open ? 'flex' : 'none'),
      width: '60%'
    }
  },

  input: {
    color: 'white',
    marginRight: theme.spacing('1'),
    width: '100%'
  },

  icon: {
    alignItems: 'center',
    display: (props) => (props.open ? 'none' : 'flex')
  },
  badge: {
    marginLeft: theme.spacing('2')
  },
  inputSearch: {
    display: 'none',
    marginLeft: theme.spacing('2'),
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  },
  cancel: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}))

function Navbar() {
  const [open, setOpen] = useState(false)
  const classes = useStyles({ open })
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' component='h2' className={classes.logoLg}>
          وبلاگ تاپ لرن
        </Typography>
        <Typography variant='h6' component='h2' className={classes.logoSm}>
          تاپ لرن
        </Typography>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder='جستجو کنید…' className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icon}>
          <Search
            className={classes.inputSearch}
            onClick={() => {
              setOpen(true)
            }}
          />
          <Badge badgeContent={4} color='secondary' className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color='primary' className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt='Remy Sharp'
            src='https://images.pexels.com/photos/13840230/pexels-photo-13840230.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
