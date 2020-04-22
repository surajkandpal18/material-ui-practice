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
import lightbulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopWatch from '../assets/stopwatch.svg';
import scaleAnimation from '../animations/scaleAnimation/data.json';
import documentsAnimation from '../animations/documentsAnimation/data.js';
import roots from '../assets/root.svg';
import automationAnimation from '../animations/automationAnimation/data.json';
import uxAnimation from '../animations/uxAnimation/data.js';
import CallToAction from './Ui/CallToAction.js'


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
itemContainer:{
	maxWidth:'40em'
}

}))


export default function CustomSoftware(props){
	const classes=useStyle();
	const theme=useTheme();
	const matchesMd=useMediaQuery(theme.breakpoints.down('md'))
	const matchesSm=useMediaQuery(theme.breakpoints.down('sm'))
	const matchesXs=useMediaQuery(theme.breakpoints.down('xs'))

	const documentsOptions = {
      loop:true,
      autoplay: false, 
      animationData: documentsAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }}

      const scaleOptions = {
      loop:true,
      autoplay: false, 
      animationData: scaleAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }}
    
    const automationOptions = {
      loop:true,
      autoplay: false, 
      animationData: automationAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }}

      const uXOptions = {
      loop:true,
      autoplay: false, 
      animationData: uxAnimation,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }}

	return (
			<Grid container direction='column' >
				<Grid item container direction='row' justify={matchesMd?'center':undefined} className={classes.rowContainer} style={{marginTop:matchesXs?'1em':'2em'}}>
					<Hidden mdDown>
					<Grid item className={classes.arrowContainer} component={Link} to='/services'>
						<IconButton style={{backgroundColor:'transparent'}} style={{marginRight:'1em',marginLeft:'-3.5em'}} onClick={()=>props.setSelectedIndex(0)}>
							<img src={backArrow} alt='backArrow' />
						</IconButton>
					</Grid>
					</Hidden>
					
					<Grid item container direction='column' className={classes.heading}>
							<Grid item>
								<Typography align={matchesMd?'center':undefined} variant='h2'>Custom Software Development</Typography>
							</Grid>
							<Grid item>
								<Typography align={matchesMd?'center':undefined} variant='body1' paragraph>Whether we’re replacing old software 
									or inventing new solutions, 
									Arc Development is here to help your business tackle technology.</Typography>
								<Typography align={matchesMd?'center':undefined} variant='body1' paragraph>Using regular commercial software leaves you with a lot of stuff you don’t need, without some of the stuff you do need, and ultimately controls the way you work.
									Without using any software at all you risk falling behind competitors and missing out on huge savings from increased efficiency.
								</Typography>
								<Typography  align={matchesMd?'center':undefined} variant='body1' paragraph>
									Our custom solutions are designed from the ground up with your needs, wants, and goals at the core. This collaborative process produces finely tuned software that is much more effective at improving your workflow and reducing costs than generalized options.
								</Typography>
								<Typography align={matchesMd?'center':undefined} variant='body1' paragraph>We create exactly what you what, exactly how you want it
								</Typography>
							</Grid>
					</Grid>
					<Hidden mdDown>
					<Grid item className={classes.arrowContainer} component={Link} to='/mobileapps' onClick={()=>props.setSelectedIndex(2)}>
						<IconButton style={{backgroundColor:'transparent'}}>
							<img src={forwardArrow} alt='forwardArrow' />
						</IconButton>
					</Grid>
					</Hidden>
					
				</Grid>

				<Grid item container direction='row' justify='center' style={{marginTop:'15em',marginBottom:'10em'}} className={classes.rowContainer}>
					<Grid item container direction='column' md alignItems='center' style={{maxWidth:'40em',marginTop:matchesSm?'5em':0,marginBottom:matchesSm?'5em':0}}>
						<Grid item>
							<Typography variant='h4'>Save Energy</Typography>
						</Grid>
						<Grid item> 
							<img src={lightbulb} alt='lightbulb'/>
						</Grid>
					</Grid>
					<Grid item container direction='column' md alignItems='center' style={{maxWidth:'40em',marginTop:matchesSm?'5em':0,marginBottom:matchesSm?'5em':0}}>
						<Grid item>
							<Typography variant='h4'>Save Money</Typography>
						</Grid>
						<Grid item>
							<img src={cash} alt='cash'/>
						</Grid>
					</Grid>
					<Grid item container direction='column' md alignItems='center' style={{maxWidth:'40em',marginTop:matchesSm?'5em':0,marginBottom:matchesSm?'5em':0}}>
						<Grid item>
							<Typography variant='h4'>Save Time</Typography>
						</Grid>
						<Grid item>
							<img src={stopWatch} alt='stopwatch'/>
						</Grid>
					</Grid>
				</Grid>
				<Grid item container direction={matchesMd?"column":'row'} justify='space-around' alignItems={matchesMd?"center":undefined} className={classes.rowContainer}>
					<Grid item container direction={matchesSm?"column":'row'} className={classes.itemContainer} style={{marginBottom:matchesMd?'15em':undefined}} md>
						<Grid item container direction='column' md>
							<Grid item>
								<Typography align={matchesSm?'center':undefined} variant='h4'>Digital Documents & Data</Typography>
							</Grid>
							<Grid item>
								<Typography align={matchesSm?'center':undefined} variant='body1' paragraph>
								Reduce Errors. Reduce Waste. Reduce Costs.

								</Typography>
								<Typography align={matchesSm?'center':undefined} variant='body1' paragraph>
								Billions are spent annually on the purchasing, printing,
								 and distribution of paper. On top of the massive environmental
								  impact this has, it causes harm to your bottom line as well.
								</Typography>
								<Typography align={matchesSm?'center':undefined} variant='body1' paragraph>
								By utilizing digital forms and documents you can remove
								 these obsolete expenses, accelerate your communication, 
								 and help the Earth
								</Typography>
							</Grid>
						</Grid>
						<Grid item md>
						<Lottie options={documentsOptions} style={{maxHeight:275,maxWidth:275,minHeight:250}} />
						</Grid>
					</Grid>
					<Grid item container direction={matchesSm?"column":'row'} className={classes.itemContainer} className={classes.rowContainer} md>
					<Grid item md>
						<Lottie options={scaleOptions} style={{maxHeight:260,maxWidth:280}} />
					</Grid>
						<Grid item container direction='column' md>
							<Grid item>
								<Typography variant='h4' align={matchesSm?'center':'right'} >Scale</Typography>
							</Grid>
							<Grid item>
								<Typography variant='body1'  align={matchesSm?'center':'right'} paragraph>
								Whether you’re a large brand, just getting started, 
								or taking off right now, our application architecture 
								ensures pain-free growth and reliability..

								</Typography>
								
							</Grid>
						</Grid>
						
					</Grid>
				</Grid>
				<Grid item container direction='row' style={{margin:"20em 0"}} className={classes.rowContainer}>
					<Grid item container direction='column' alignItems='center'>
						<Grid item >
							<img src={roots} alt='tree' height={matchesSm?"300em": '450em'} width={matchesSm?"300em": '450em'} />
						</Grid>
						<Grid item >
							<Typography variant='h4' align='center'  gutterBottom>Root-Cause Analysis</Typography>
						</Grid>
						<Grid item className={classes.itemContainer}>
							<Typography variant='body1' align='center' paragraph>
							Many problems are merely symptoms of larger, underlying issues.
							
							</Typography>
							<Typography variant='body1' align='center' paragraph>
							We can help you thoroughly examine all areas of your business to develop a holistic plan
							 for the most effective implementation of technology.
							</Typography>
							
						</Grid>
					</Grid>
				</Grid>

				<Grid item container  direction={matchesMd?"column":'row'} justify='space-around' style={{marginBottom:'10em'}} className={classes.rowContainer} alignItems={matchesMd?"center":undefined}>
					<Grid item container direction={matchesSm?"column":'row'} className={classes.itemContainer} style={{marginBottom:matchesMd?'15em':undefined}} md>
						<Grid item container direction='column' md>
							<Grid item>
								<Typography variant='h4' align={matchesSm?'center':undefined}>Automation</Typography>
							</Grid>
							<Grid item>
								<Typography variant='body1' align={matchesSm?'center':undefined} paragraph>
								Why waste time when you don’t have to?

								</Typography>
								<Typography variant='body1' align={matchesSm?'center':undefined} paragraph>
								We can help you identify processes with time or event 
								based actions which can now easily be automated.
								</Typography>
								<Typography variant='body1' align={matchesSm?'center':undefined} paragraph>
								 Increasing efficiency increases profits, leaving you more time to 
								 focus on your business, not busywork
								</Typography>
							</Grid>
						</Grid>
						<Grid item md>
						<Lottie options={automationOptions} style={{maxHeight:290,maxWidth:280}} />
						</Grid>
					</Grid>
					<Grid item container direction={matchesSm?"column":'row'} className={classes.itemContainer}  className={classes.rowContainer}md>
					<Grid item md>
						<Lottie options={uXOptions} style={{maxHeight:310,maxWidth:155}} />
					</Grid>
						<Grid item container direction='column' md>
							<Grid item>
								<Typography variant='h4' align={matchesSm?'center':'right'} >User Experience Design</Typography>
							</Grid>
							<Grid item>
								<Typography variant='body1' align={matchesSm?'center':'right'} paragraph>
								A good design that isn’t usable isn’t a good design.
								</Typography>
								<Typography variant='body1'  align={matchesSm?'center':'right'} paragraph>
								So why are so many pieces of software complicated, 
								confusing, and frustrating?
								</Typography>
								<Typography variant='body1'  align={matchesSm?'center':'right'} paragraph>
								By prioritizing users and the real ways they interact with technology we’re able to develop unique,
								 personable experiences that solve problems rather than create new ones.
								</Typography>
								
								
							</Grid>
						</Grid>
						
					</Grid>
				</Grid>
				<Grid item>
					<CallToAction setValue={props.setValue} />
				</Grid>
			</Grid>
		)
}