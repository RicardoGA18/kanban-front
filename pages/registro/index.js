import Head from 'next/head'
import Image from 'next/image'
import RegisterForm from '../../src/components/auth/RegisterForm'

import {
  Container,
  Box,
  Grid,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  full: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  wave:{
    position: 'absolute',
    width: '90%',
    height: '100%',
    bottom: 0,
    left: 0,
  },
  bg: {
    width: '90%',
    position: 'relative',
    paddingBottom: 'calc( 100% * ( 839 / 1009 ) )'
  },
  box: {
    width: '90%',
    maxWidth: 600,
  }
}));

const RegisterView = () => {
	const classes = useStyles()

	return (
		<>
			<Head>
				<title>Kanban - Registro</title>
				<link rel="icon" href="/logo.png" />
			</Head>
			<Container component="main" maxWidth={false} disableGutters>
				<Grid container spacing={0} className={classes.full}>
					<Grid item xs={6} className={classes.full}>
						<div className={classes.wave}>
							<Image 
								src="/wave.png"
								layout="fill"
								alt="Background wave"
							/>
						</div>
						<Grid container className={classes.full} justify="center" alignItems="center">
							<Grid item xs={9}>
								<div className={classes.bg}>
									<Image 
										src="/bg.svg"
										alt="Background man"
										layout="fill"
									/>
								</div>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs={6} className={classes.full}>
						<Grid container className={classes.full} justify="center" alignItems="center">
							<Box className={classes.box}>
								<RegisterForm />
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	)
}
export default RegisterView