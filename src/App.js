import { Button, makeStyles } from '@material-ui/core'

// Import Components
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import Right from './components/Rightbar'
import Left from './components/Leftbar'

const useStyles = makeStyles((theme) => ({}))

function App() {
  const classes = useStyles()
  return (
    <div>
      <Navbar />
      <Right />
      <Feed />
      <Left />
    </div>
  )
}

export default App
