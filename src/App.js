import { makeStyles, Grid } from '@material-ui/core'

// Import Components
import Navbar from './components/Navbar'
import RightBar from './components/Rightbar'
import Feed from './components/Feed'
import LeftBar from './components/Leftbar'
import Add from './components/Add'

const useStyles = makeStyles((theme) => ({
  left: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={3} xs={2}>
          <RightBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={2} className={classes.left}>
          <LeftBar />
        </Grid>
      </Grid>
      <Add />
    </div>
  )
}

export default App
