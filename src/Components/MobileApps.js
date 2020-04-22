import React from 'react'
import Lottie from 'react-lottie';
import {makeStyles,useTheme} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import backArrow from '../assets/backArrow.svg'
import forwardArrow from '../assets/forwardArrow.svg'
import {Link } from 'react-router-dom';

import animationData from '../animations/integrationAnimation/data.json';
import CallToAction from './Ui/CallToAction.js'
import swiss from '../assets/swissKnife.svg'
import access from '../assets/extendAccess.svg'
import engagement from '../assets/increaseEngagement.svg'



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

}))




export default function MobileApps(props){
	const classes=useStyle();
	const theme =useTheme();
	const matchesMd=useMediaQuery(theme.breakpoints.down('md'))
	const matchesSm=useMediaQuery(theme.breakpoints.down('sm'))
	const matchesXs=useMediaQuery(theme.breakpoints.down('xs'))


	const defaultOptions = {
      loop:true,
      autoplay: false, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }}



	return (

		<Grid container direction='column'>
			<Grid item container direction='row' justify={matchesMd?'center':undefined} className={classes.rowContainer} style={{marginTop:matchesXs?'1em':'2em'}}>
					<Hidden mdDown>
					<Grid item className={classes.arrowContainer} component={Link} to='/customsoftwares'>
						<IconButton style={{backgroundColor:'transparent'}} style={{marginRight:'1em',marginLeft:'-3.5em'}} onClick={()=>props.setSelectedIndex(1)}>
							<img src={backArrow} alt='backArrow' />
						</IconButton>
					</Grid>
					</Hidden>
					
					<Grid item container direction='column' className={classes.heading}>
							<Grid item>
								<Typography align={matchesMd?'center':undefined} variant='h2'>IOS/Android App Development</Typography>
							</Grid>
							<Grid item>
								<Typography align={matchesMd?'center':undefined} variant='body1' paragraph>Whether we’re replacing old software 
									Mobile apps allow you to take your tools on the go.</Typography>
								<Typography align={matchesMd?'center':undefined} variant='body1' paragraph>
								Whether you want an app for your customers, employees, or yourself, we can build cross-platform
								 native solutions for any part of your business process. This opens you up to a whole new world of 
								 possibilities by taking advantage of phone features like the camera, GPS, push notifications, and more.

								</Typography>
								<Typography  align={matchesMd?'center':undefined} variant='body1' paragraph>
									Convenience. Connection.</Typography>
							</Grid>
					</Grid>
					<Hidden mdDown>
					<Grid item className={classes.arrowContainer} component={Link} to='/websites' onClick={()=>props.setSelectedIndex(3)}>
						<IconButton style={{backgroundColor:'transparent'}}>
							<img src={forwardArrow} alt='forwardArrow' />
						</IconButton>
					</Grid>
					</Hidden>
					
				</Grid>
				<Grid item container direction='row' direction={matchesSm?"column":'row'} style={{marginTop:'15em',marginBottom:'15em'}} className={classes.rowContainer}>
					<Grid item container direction='column' md>
						<Grid item>
							<Typography variant='h4' align={matchesSm?'center':undefined} gutterBottom>Integration</Typography>
						</Grid>
						<Grid item>
							<Typography variant='body1' align={matchesSm?'center':undefined} paragraph>
							Our technology enables an innate interconnection between web 
							and mobile applications, putting everything you need right in
							one convenient place.
							</Typography>
							<Typography variant='body1' align={matchesSm?'center':undefined} paragraph>
							This allows you to extend your reach, reinvent interactions, and 
							develop a stronger relationship with your users than ever before.
							</Typography>
						</Grid>
					</Grid>
					<Grid item md>
						<Lottie options={defaultOptions} style={{maxWidth:'20em'}}/>
					</Grid>
					<Grid item container direction='column' md>
						<Grid item>
							<Typography variant='h4' align={matchesSm?'center':'rigt'}  gutterBottom>Simultaneous Platform Support</Typography>
						</Grid>
						<Grid item>
							<Typography  variant='body1' align={matchesSm?'center':'rigt'} paragraph>
							Our cutting-edge development process allows us to create apps for iPhone, Android,
							 and tablets — all at the same time
							</Typography>
							<Typography variant='body1' align={matchesSm?'center':'rigt'} paragraph>
							This significantly reduces costs and creates a more unified brand experience across all devices.
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item container  direction={matchesMd?"column":'row'} style={{marginBottom:'15em'}}  className={classes.rowContainer}>
					<Grid item container direction='column' alignItems='center' md>
						<Grid item>
							<Typography variant='h4' align='center' gutterBottom>Extend Functionality</Typography>
						</Grid>
						<Grid item>
							<img src={swiss} alt='swiss'/>
						</Grid>
					</Grid>
					<Grid item container direction='column' alignItems='center' md style={{marginTop:matchesMd?'10em':0,marginBottom:matchesMd?'10em':0}}>
						<Grid item>
							<Typography variant='h4' align='center'  gutterBottom>Extend Access</Typography>
						</Grid>
						<Grid item>
							<img src={access} alt='access' style={{maxWidth:matchesXs?'20em': '28em'}}/>
						</Grid>
					</Grid>
					<Grid item container direction='column' alignItems='center' md>
						<Grid item>
							<Typography variant='h4' align='center'  gutterBottom>Increase Enagement</Typography>
						</Grid>
						<Grid item>
							<img src={engagement} alt='engagement'/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<CallToAction setValue={props.setValue} />
				</Grid>	
			</Grid>

		)
}