import React from 'react'

import {makeStyles,useTheme} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import {Link } from 'react-router-dom';

import CallToAction from './Ui/CallToAction.js'


import analytics from '../assets/analytics.svg'
import seo from '../assets/seo.svg'
import outreach from '../assets/outreach.svg'
import ecommerce from '../assets/ecommerce.svg'





const useStyle=makeStyles(theme=>({
heading:{
	maxWidth:'40em',
},
arrowContainer:{
	marginTop:'0.5em'
},
rowContainer:{
	paddingLeft:'5em',
	paddingRight:'5em',
	
	[theme.breakpoints.down('sm')]:{
		paddingLeft:'1.5em',
	paddingRight:'1.5em',
	
	}
},
paragraphContainer:{
	maxWidth:'30em'
}

}))




export default function MobileApps(props){
	const classes=useStyle();
	const theme =useTheme();
	const matchesMd=useMediaQuery(theme.breakpoints.down('md'))
	const matchesSm=useMediaQuery(theme.breakpoints.down('sm'))
	const matchesXs=useMediaQuery(theme.breakpoints.down('xs'))




	return (

		<Grid container direction='column'>
			<Grid item container direction='row' justify={matchesMd?'center':undefined} className={classes.rowContainer} style={{marginTop:matchesXs?'1em':'2em'}}>
					<Hidden mdDown>
					<Grid item className={classes.arrowContainer} component={Link} to='/mobileapps'>
						<IconButton style={{backgroundColor:'transparent'}} style={{marginRight:'1em',marginLeft:'-3.5em'}} onClick={()=>props.setSelectedIndex(2)}>
							<img src={backArrow} alt='backArrow' />
						</IconButton>
					</Grid>
					</Hidden>
					
					<Grid item container direction='column' className={classes.heading}>
							<Grid item>
								<Typography align={matchesMd?'center':undefined} variant='h2'>Website Development</Typography>
							</Grid>
							<Grid item>
								<Typography align={matchesMd?'center':undefined} variant='body1' paragraph>
								Having a website is a necessity in today’s business world. They give you one central, public location to let people know who 
								you are, what you do, and why you’re the best at it.
								</Typography>
								<Typography align={matchesMd?'center':undefined} variant='body1' paragraph>
								WFrom simply having your hours posted to having a full fledged online store, 
								making yourself as accessible as possible to users online drives growth and enables you to reach new customers. 
								</Typography>
								
							</Grid>
					</Grid>
					<Hidden mdDown>
					<Grid item className={classes.arrowContainer} component={Link} to='/services' onClick={()=>props.setSelectedIndex(0)}>
						<IconButton style={{backgroundColor:'transparent'}}>
							<img src={forwardArrow} alt='forwardArrow' />
						</IconButton>
					</Grid>
					</Hidden>
					
				</Grid>
				<Grid item container direction={matchesSm?'column': 'row'} alignItems='center' className={classes.rowContainer} style={{marginTop:'15em'}}>
					<Grid item>
						<Grid container direction='column'>
						<Grid item>
							<Typography variant='h4' align={matchesSm?'center':undefined} gutterBottom>Analytics</Typography>
						</Grid>
						<Grid item>
							<img src={analytics} alt='analytics' style={{marginLeft:'-2.75em'}}/>
						</Grid>

						</Grid>
					</Grid>
					<Grid item className={classes.paragraphContainer}>
					<Typography align={matchesSm?'center':undefined} variant='body1'  >
					Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns 
					and trends in your business, empowering you to make smarter decisions with measurable effects.
					</Typography>
					</Grid>
				</Grid>

				<Grid item container direction={matchesSm?'column': 'row'} alignItems='center' justify='flex-end' className={classes.rowContainer} style={{marginTop:'15em',marginBottom:'15em'}}>
					<Grid item>
						<Grid container direction='column'>
						<Grid item>
							<Typography variant='h4' align='center' align={matchesSm?'center':undefined} gutterBottom>E-Commerce</Typography>
						</Grid>
						<Grid item>
							<img src={ecommerce} alt='ecommerce' style={{marginLeft:'-2.75em'}}/>
						</Grid>

						</Grid>
					</Grid>
					<Grid item style={{marginLeft:'1em'}} className={classes.paragraphContainer}>
					<Typography variant='body1' align={matchesSm?'center':undefined} paragraph >
					It’s no secret that people like to shop online.

					</Typography>
					<Typography variant='body1' align={matchesSm?'center':undefined}  paragraph>
					

					In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.
					</Typography>
					</Grid>
				</Grid>

				<Grid item container direction={matchesSm?'column': 'row'} alignItems='center' className={classes.rowContainer} style={{marginBottom:'15em'}}>
					<Grid item>
						<Grid container direction='column'>
						<Grid item>
							<Typography variant='h4' align='center' gutterBottom>Outreach</Typography>
						</Grid>
						<Grid item>
							<img src={outreach} alt='outreach' style={{marginLeft:'-2.75em'}}/>
						</Grid>

						</Grid>
					</Grid>
					<Grid item style={{marginLeft:'1em'}} className={classes.paragraphContainer} >
					<Typography variant='body1' align={matchesSm?'center':undefined} >
					Draw people in with a dazzling website. Showing off your products online is a great way to 
					help customers decide what’s right for them before visiting in person.
					</Typography>
					</Grid>
				</Grid>

				<Grid item container direction={matchesSm?'column': 'row'} alignItems='center' justify='flex-end' className={classes.rowContainer} style={{marginBottom:'15em'}}>
					<Grid item>
						<Grid container direction='column'>
						<Grid item>
							<Typography variant='h4'align={matchesSm?'center':'left'} gutterBottom>Search Engine <br/>Optimization</Typography>
						</Grid>
						<Grid item>
							<img src={seo} alt='seo' style={{marginLeft:'-2.75em'}}/>
						</Grid>

						</Grid>
					</Grid>
					<Grid item style={{marginLeft:'1em'}}  className={classes.paragraphContainer}>
					<Typography variant='body1' align={matchesSm?'center':undefined} paragraph >
					How often have you ever been to the second page of Google results?

					</Typography>
					<Typography variant='body1' align={matchesSm?'center':undefined} paragraph>
					If you’re like us, probably never.
					</Typography>
					<Typography variant='body1' align={matchesSm?'center':undefined} paragraph>
					Customers don’t go there either, so we make sure your website is designed to end up on top.
					</Typography>
					</Grid>
				</Grid>
				<Grid item>
					<CallToAction setValue={props.setValue} />
				</Grid>



			</Grid>

		)
}