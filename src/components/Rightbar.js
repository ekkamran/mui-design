import { Container, makeStyles, Typography } from '@material-ui/core'
import {
  Bookmark,
  ExitToApp,
  Home,
  Person,
  List,
  PhotoCamera,
  PlayCircleOutline,
  TabletMac,
  Storefront,
  Settings
} from '@material-ui/icons'
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(9),
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'white',
      color: '#555',
      border: '2px solid #f8f8f8'
    },
    position: 'sticky',
    top: 0
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
      cursor: 'pointer'
    }
  },
  icon: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px'
    }
  },
  text: {
    fontWight: '500',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}))
function Rightbar() {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography variant='h6' className={classes.text}>
          خانه
        </Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography variant='h6' className={classes.text}>
          دوستان
        </Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography variant='h6' className={classes.text}>
          لیست ها
        </Typography>
      </div>
      <div className={classes.item}>
        <PhotoCamera className={classes.icon} />
        <Typography variant='h6' className={classes.text}>
          دوربین
        </Typography>
      </div>
      <div className={classes.item}>
        <PlayCircleOutline className={classes.icon} />
        <Typography variant='h6' className={classes.text}>
          ویدیو
        </Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography variant='h6' className={classes.text}>
          آپ
        </Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography variant='h6' className={classes.text}>
          مجموعه ها
        </Typography>
      </div>
      <div className={classes.item}>
        <Storefront className={classes.icon} />
        <Typography variant='h6' className={classes.text}>
          بازار
        </Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography variant='h6' className={classes.text}>
          تنظیمات
        </Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography variant='h6' className={classes.text}>
          خروج
        </Typography>
      </div>
    </Container>
  )
}

export default Rightbar
