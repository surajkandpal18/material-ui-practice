import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import footerAdornment from '../../assets/Footer Adornment.svg'
import {Link} from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';

const useStyle=makeStyles(theme=>({
	footer:{
		backgroundColor:theme.palette.common.blue,
		width:"100%",
		marginTop:"auto",
		padding:0,
		zIndex:1302,
		position:'relative'
	},
	adornment:{
		width:"25em",
		verticalAlign:'bottom',
		[theme.breakpoints.down('md')]:{
			width:"21em",
		},
		[theme.breakpoints.down('xs')]:{
			width:"18em",
		}
	},
	mainContainer:{
		position:'absolute',
		
		
	},
	socialContainer:{
		position:'absolute',
		marginTop:'-6em',
		right:"1.5em",
		[theme.breakpoints.down('xs')]:{
			right:"0.6em",
		}

		
	},
	link:{
		color:'white',
		fontFamily:'Arial',
		fontWeight:'bold',
		textDecoration:'none',
	},
	gridItem:{
		margin:'3em'
	},
	Icons:{
		height:'4em',
		width:'4em',
		[theme.breakpoints.down("xs")]:{
			height:'2.5em',
			width:'2.5em',
		}
	}
}))

export default function Footer(props) {
	const classes=useStyle();

	const {setValue,setSelectedIndex}=props;

	return (<footer className={classes.footer}>
		<Hidden mdDown>
		<Grid container justify='center'  className={classes.mainContainer}>
					<Grid item className={classes.gridItem}>
						<Grid container direction='column' spacing={2}>
						 	<Grid item className={classes.link} component={Link} to='/' onClick={()=>setValue(0)}>
						 		Home
						 	</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction='column' spacing={2}>
						 	<Grid item className={classes.link} component={Link} to='/services' onClick={()=>{setValue(1);setSelectedIndex(0)}}>
						 		Services
						 	</Grid>
						
						
						 	<Grid item className={classes.link} component={Link} to='/customsoftwares' onClick={()=>{setValue(1);setSelectedIndex(1)}}>
						 		Custom Software Development
						 	</Grid>
						
						
						 	<Grid item className={classes.link} component={Link} to='/mobileapps' onClick={()=>{setValue(1);setSelectedIndex(2)}}>
						 		IOS/Android App Development
						 	</Grid>
						
						 	<Grid item className={classes.link} component={Link} to='/websites' onClick={()=>{setValue(1);setSelectedIndex(3)}}>
						 		Website Development
						 	</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction='column' spacing={2}>
						 	<Grid item className={classes.link} component={Link} to='/revolution' onClick={()=>setValue(2)}>
						 		The Revolution
						 	</Grid>
						 	<Grid item className={classes.link} component={Link} to='/revolution' onClick={()=>setValue(2)}>
						 		Vision
						 	</Grid>
						 	<Grid item className={classes.link} component={Link} to='/revolution' onClick={()=>setValue(2)}>
						 		Technology
						 	</Grid>
						 	<Grid item className={classes.link} component={Link} to='/revolution' onClick={()=>setValue(2)}>
						 		Process
						 	</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction='column' spacing={2}>
						 	<Grid item className={classes.link} component={Link} to='/about' onClick={()=>setValue(3)}>
						 		About us
						 	</Grid>
						 	<Grid item className={classes.link} component={Link} to='/about' onClick={()=>setValue(3)}>
						 		History
						 	</Grid>
						 	<Grid item className={classes.link} component={Link} to='/about' onClick={()=>setValue(3)}>
						 		Team
						 	</Grid>
						 </Grid>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Grid container direction='column' spacing={2}>
						 	<Grid item className={classes.link} component={Link} to='/contact' onClick={()=>setValue(4)}>
						 		Contact Us
						 	</Grid>
						 	
					</Grid>

					</Grid>
			</Grid>
			</Hidden>
				
						 	
				<img className={classes.adornment} src={footerAdornment} alt="footerslash"/>

				<Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
						<Grid item component={'a'} href='http://www.facebook.com' rel='noopener norefferer' target='_blank'>
							<img src={facebook} alt='facebooklogo' className={classes.Icons}/>
						</Grid>
						<Grid item component={'a'} href='http://www.twitter.com' rel='noopener norefferer'  target='_blank'>
							<img src={twitter} alt='twitterlogo' className={classes.Icons}/>
						</Grid>
						<Grid item component={'a'} href='http://www.instagram.com' rel='noopener norefferer'  target='_blank'>
							<img src={instagram} alt='instagramlogo' className={classes.Icons}/>
						</Grid>
				</Grid>

		</footer>)

}