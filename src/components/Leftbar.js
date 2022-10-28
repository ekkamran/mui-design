import {
  makeStyles,
  Avatar,
  Container,
  Typography,
  ImageList,
  ImageListItem,
  Link,
  Divider
} from '@material-ui/core'
import AvatarGroup from '@material-ui/lab/AvatarGroup'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(9),
    position: 'sticky',
    top: 0
  },
  avatar: {
    marginLeft: '5px'
  },
  title: {
    marginBottom: '10px',
    fontWeight: 500,
    color: '#555'
  },
  imagelist: {
    position: 'relative',
    left: 'auto',
    right: '0%',
    transform: 'translateX(0%)'
  },
  link: {
    marginLeft: '20px',
    marginBottom: '10px'
  }
}))
function Leftbar() {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>دوستان</Typography>
      <AvatarGroup max={4} style={{ overflow: 'hidden' }}>
        <Avatar
          alt=''
          src='https://v4.mui.com/static/images/avatar/3.jpg'
          className={classes.avatar}
        />
        <Avatar
          alt=''
          src='https://v4.mui.com/static/images/avatar/2.jpg'
          className={classes.avatar}
        />
        <Avatar
          alt=''
          src='https://v4.mui.com/static/images/avatar/1.jpg'
          className={classes.avatar}
        />
        <Avatar
          alt=''
          src='https://v4.mui.com/static/images/avatar/2.jpg'
          className={classes.avatar}
        />
        <Avatar
          alt=''
          src='https://v4.mui.com/static/images/avatar/3.jpg'
          className={classes.avatar}
        />
      </AvatarGroup>
      <Typography className={classes.title} style={{ marginTop: '15px' }}>
        گالری
      </Typography>
      <ImageList rowHeight={100} className={classes.imageList} cols={3}>
        <ImageListItem>
          <img
            src='https://v4.mui.com/static/images/image-list/burgers.jpg'
            alt=''
            className={classes.imagelist}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://v4.mui.com/static/images/image-list/morning.jpg'
            alt=''
            className={classes.imagelist}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://v4.mui.com/static/images/image-list/hats.jpg'
            alt=''
            className={classes.imagelist}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://v4.mui.com/static/images/image-list/burgers.jpg'
            alt=''
            className={classes.imagelist}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://v4.mui.com/static/images/image-list/morning.jpg'
            alt=''
            className={classes.imagelist}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://v4.mui.com/static/images/image-list/burgers.jpg'
            alt=''
            className={classes.imagelist}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://v4.mui.com/static/images/image-list/burgers.jpg'
            alt=''
            className={classes.imagelist}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://v4.mui.com/static/images/image-list/morning.jpg'
            alt=''
            className={classes.imagelist}
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src='https://v4.mui.com/static/images/image-list/hats.jpg'
            alt=''
            className={classes.imagelist}
          />
        </ImageListItem>
      </ImageList>
      <Typography
        className={classes.title}
        style={{ marginTop: '15px', marginBottom: '10px' }}
      >
        دسته بندی ها
      </Typography>
      <Link
        component='button'
        variant='body2'
        className={classes.link}
        href='/#'
      >
        ورزشی
      </Link>
      <Link
        component='button'
        variant='body2'
        className={classes.link}
        href='/#'
      >
        سیاسی
      </Link>
      <Divider flexItem style={{ marginBottom: '0px' }} />
      <Link
        component='button'
        variant='body2'
        className={classes.link}
        href='/#'
      >
        علمی
      </Link>
      <Link
        component='button'
        variant='body2'
        className={classes.link}
        href='/#'
      >
        هنری
      </Link>
    </Container>
  )
}

export default Leftbar
