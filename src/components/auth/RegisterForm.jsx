import React from 'react'
import {
  Avatar,
  Grid,
  TextField,
  Typography,
  Box,
  Button,
  Link,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Form , useFormik , FormikProvider } from 'formik'
import * as yup from 'yup'
import { useSnackbar } from 'notistack';
import PersonIcon from '@material-ui/icons/Person'
import LockIcon from '@material-ui/icons/Lock'

const RegisterForm = () => {
	const { enqueueSnackbar } = useSnackbar()

	const registerSchema = yup.object().shape({
		email: yup.string().required('Email requerido'),
		password:  yup.string().required('Contraseña requerida')
	})

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: registerSchema,
		onSubmit: async (values, {setErrors, setSubmitting}) => {

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
			<Typography component="h1" variant="h4" align="center" gutterBottom>
				Registro
			</Typography>
			<FormikProvider value={formik}>
				<Form autoComplete="off" noValidate onSubmit={handleSubmit}>
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<TextField 
								fullWidth
								label="Nombre"
								type="text"
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField 
								fullWidth
								label="Apellido"
								type="text"
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField 
								fullWidth
								label="Correo Electrónico"
								type="email"
							/>
						</Grid>
						<Grid item xs={6}>
							<TextField 
								fullWidth
								label="Celular"
								type="text"
							/>
						</Grid>
					</Grid>
				</Form>
			</FormikProvider>
		</>
	)
}

export default RegisterForm