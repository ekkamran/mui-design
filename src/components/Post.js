import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(11)
  },
  card: {
    marginBottom: theme.spacing(1)
  },
  media: {
    height: 250,
    [theme.breakpoints.down('sm')]: {
      height: 140
    }
  }
}))

function Post() {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://static.roocket.ir/images/cover/2022/10/12/HcPuezuZiZPmVcviRjxIVJrOB0vYfSHC4rxiKYWT.png'
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            این پست اول است
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            لورم ایپسونلورم ایپسونلورم ایپسونلورم ایپسونلورم ایپسونلورم
            ایپسونلورم ایپسونلورم ایپسونلورم ایپسونلورم ایپسونلورم ایپسونلورم
            ایپسونلورم ایپسونلورم ایپسونلورم ایپسونلورم ایپسونلورم ایپسونلورم
            ایپسونلورم ایپسونلورم ایپسون
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          بیشتر بخوانید
        </Button>
        <Button size='small' color='primary'>
          اشتراک گذاری
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
