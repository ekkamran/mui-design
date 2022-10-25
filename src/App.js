import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  button: {
    ...theme.mybutton
  }
}))

function App() {
  const classes = useStyles()
  return (
    <div>
      <Button variant='contained' className={classes.button} size='large'>
        سلام دنیا
      </Button>
    </div>
  )
}

export default App
