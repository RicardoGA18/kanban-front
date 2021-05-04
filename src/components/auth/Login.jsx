import React from 'react'
import {
  Avatar,
  Card,
  CardContent,
  InputAdornment,
  Grid,
  TextField,
  Typography,
  Box,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Form , useFormik , FormikProvider } from 'formik'
import * as yup from 'yup'
import { useSnackbar } from 'notistack';
import PersonIcon from '@material-ui/icons/Person'
import LockIcon from '@material-ui/icons/Lock'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: 100,
    height: 100,
  },
  welcome: {
    textAlign: 'center',
    marginTop: 20,
  },
  inputContainer: {
    display: 'grid',
    gridTemplateColumns: '30px 1fr',
    gridGap: 10,
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  }
}))

const LoginForm = () => {
  const classes = useStyles()
  const { enqueueSnackbar } = useSnackbar();

  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const loginSchema = yup.object().shape({
    email: yup.string().matches(emailRegex,{message: 'Correo Inválido'}).required('Correo requerido.'),
    password: yup.string().required('Contraseña requerida')
  })

  const fakeRequest = async (success,timeout) => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if(success) {
          resolve();
        } else {
          reject({message: 'Error'});
        }
      }, timeout);
    })
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { setErrors , setSubmitting }) => {
      const response = await fakeRequest(true,1000)
      enqueueSnackbar('Fake submit')
      setSubmitting(false)
    }
  })

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    getFieldProps,
  } = formik

  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <Avatar src="/avatar.svg" alt="Avatar Icon" className={classes.avatar}/>
        </Grid>
      </Grid>
      <Typography component="h2" variant="h3" className={classes.welcome} gutterBottom>
        Bienvenido
      </Typography>
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box className={classes.inputContainer}>
                <Box className={classes.flexCenter}>
                  <PersonIcon style={{ fontSize: 30 }} />
                </Box>
                <TextField 
                  fullWidth
                  disabled={isSubmitting}
                  label="Correo Electrónico"
                  type="email"
                  value={values.email}
                  {...getFieldProps('email')}
                  error={errors.email && touched.email}
                  helperText={touched.email && errors.email}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box className={classes.inputContainer}>
                <Box className={classes.flexCenter}>
                  <LockIcon style={{ fontSize: 30 }} />
                </Box>
                <TextField 
                  fullWidth
                  disabled={isSubmitting}
                  label="Contraseña"
                  type="password"
                  value={values.password}
                  {...getFieldProps('password')}
                  error={errors.password && touched.password}
                  helperText={touched.password && errors.password}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                Iniciar Sesión
              </Button>
            </Grid>
          </Grid>
        </Form>
      </FormikProvider>
    </>
  )
}

export default LoginForm