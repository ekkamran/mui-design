import React, { useState } from 'react'
import {
  makeStyles,
  Tooltip,
  Fab,
  Modal,
  Container,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
  Snackbar
} from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons'
import MuiAlert from '@material-ui/lab/Alert'

function Alert(props) {
  console.log(props)
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    right: '10px',
    bottom: '10px'
  },
  container: {
    width: '500px',
    height: '540px',
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 'auto'
  },
  text: {
    width: '100%',
    marginBottom: '20px'
  },
  select: {
    width: '100%',
    marginBottom: '20px'
  },
  label: {
    position: 'absolute',
    right: 0,
    transformOrigin: 'top right',
    marginRight: '18px'
  },
  button: {
    marginLeft: '10px',
    marginTop: '45px'
  }
}))

function Add() {
  const [open, setOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  console.log(openAlert)
  const classes = useStyles()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenAlert(false)
  }
  return (
    <>
      <Tooltip title='Add' aria-label='add' onClick={() => setOpen(true)}>
        <Fab color='secondary' className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <Container className={classes.container}>
          <form className={classes.form} autoComplete='off'>
            <div className={classes.item}>
              <TextField
                id='standard-basic'
                placeholder='عنوان'
                className={classes.text}
              />
            </div>
            <div className={classes.item}>
              <TextField
                className={classes.text}
                id='outlined-multiline-static'
                label='شعر'
                multiline
                rows={4}
                defaultValue='چه سرنوشت غم انگیزی که کرم کوچک ابریشم تمام عمر قفس می بافت ولی خود به فکر پریدن بود'
                variant='outlined'
              />
            </div>
            <div className={classes.item}>
              <FormControl className={classes.select}>
                <InputLabel htmlFor='grouped-select' className={classes.label}>
                  انتخاب
                </InputLabel>
                <Select defaultValue=''>
                  <MenuItem value='public'>عمومی</MenuItem>
                  <MenuItem value='private'>خصوصی</MenuItem>
                  <MenuItem value='freind'>نمایش برای دوستان</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.item}>
              <FormLabel component='legend'>دسترسی کامنت گذاری</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value='every body'
                  control={<Radio />}
                  label='برای همه کس'
                />
                <FormControlLabel
                  value='friend'
                  control={<Radio />}
                  label='برای دوستان'
                />
                <FormControlLabel
                  value='nobody'
                  control={<Radio />}
                  label='هیچکس'
                />
                <FormControlLabel
                  value='special'
                  disabled
                  control={<Radio />}
                  label='(کارت طلایی)خرید ویژه'
                />
              </RadioGroup>
            </div>
            <div>
              <Button
                variant='outlined'
                color='primary'
                className={classes.button}
                onClick={() => {
                  setOpenAlert(true)
                }}
              >
                ارسال
              </Button>
              <Button
                className={classes.button}
                variant='outlined'
                color='secondary'
                onClick={() => {
                  setOpen(false)
                }}
              >
                انصراف
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <Alert onClose={handleClose} severity='success'>
          پست با موفقیت ارسال شد!
        </Alert>
      </Snackbar>
    </>
  )
}

export default Add
