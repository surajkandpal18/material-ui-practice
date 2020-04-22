import React from 'react'

import {makeStyles,useTheme} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonArrow from './Ui/ButtonArrow.js';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import customSoftwareIcon from '../assets/Custom Software Icon.svg'
import mobileAppsIcon from '../assets/mobileIcon.svg';
import websitesIcon from '../assets/websiteIcon.svg';

import useMediaQuery from '@material-ui/core/useMediaQuery';


import {Link } from 'react-router-dom';


const useStyle=makeStyles(theme=>({

learnButton:{
    ...theme.typography.learnButton,
    fontSize:'0.7rem',
    height:35,
    padding:5,
    [theme.breakpoints.down('sm')]:{
        marginBottom:'2em'
    }},

    specialText:{
    fontFamily:"Pacifico",
    color:theme.palette.common.orange,

},

subtitle:{
    marginBottom:'1em',
},

    serviceContainer:{
marginTop:"10em",
[theme.breakpoints.down('sm')]:{
    padding:25,
}
},

}))

export default function Service(props){
		const classes=useStyle();
		const theme=useTheme();
		const matchesSM=useMediaQuery(theme.breakpoints.down('sm'));

		return (

				<Grid container direction='column'>
				<Grid item  style={{marginLeft:matchesSM?0:"5em",marginTop:matchesSM?'1em':'2em'}}>
				 		<Typography align={matchesSM?'center':undefined} variant='h2' gutterBottom> Services</Typography>
				</Grid>
				 <Grid item >{/*------------------------IOS/Android App---------------*/}
                <Grid container className={classes.serviceContainer} direction='row' justify={matchesSM?"center":"flex-end"} style={{marginTop:matchesSM?"1em":'5em'}}>
                    <Grid item style={{marginLeft:matchesSM?0:'5em',textAlign:matchesSM?"center":undefined,width:matchesSM?undefined:'35em'}}>
                        <Typography variant='h4'>
                        IOS/Android App Development
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitle}>
                         Extend Functionality .Extend Access.Increase Enagement
                        </Typography>
                        <Typography variant='subtitle1' >
                        Integrate your web experience or create a standalone
                        app{matchesSM?null:<br/>} with either mobile platform
                        </Typography>
                        <Button variant='outlined' component={Link} to='/mobileapps' onClick={()=>{props.setValue(1);props.setSelectedIndex(2)}}className={classes.learnButton}>
                                <span style={{marginRight: 10}}>Learn More</span>
                        <ButtonArrow height={10} width={10}  fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item  style={{marginRight:matchesSM?0:'5em'}}>
                        <img  className={classes.icon} src={mobileAppsIcon} alt="mobileAppsIconlogo"   width="250em"/>
                    </Grid>
                </Grid>
            </Grid>
					<Grid item >{/*------------------------Custom Software Block---------------*/}
                <Grid container className={classes.serviceContainer} direction='row' justify={matchesSM?"center":undefined}>
                    <Grid item style={{marginLeft:matchesSM?0:'5em',textAlign:matchesSM?"center":undefined,width:matchesSM?undefined:'35em'}}>
                        <Typography variant='h4'>
                        Custom Software Development
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitle}>
                        Save Energy.Save Time.Save Money.
                        </Typography>
                        <Typography variant='subtitle1' >
                        Complete Digital Solution,from investigation to{" "}
                        <span className={classes.specialText}>celebration</span>
                        </Typography>
                        <Button variant='outlined' className={classes.learnButton} component={Link} to='/customsoftwares' onClick={()=>{props.setValue(1);props.setSelectedIndex(1)}} >
                                <span style={{marginRight: 10}} >Learn More</span>
                        <ButtonArrow height={10} width={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src={customSoftwareIcon} alt="customSoftwareIconlogo" />
                    </Grid>
                </Grid>
            </Grid>
            
        <Grid item >{/*------------------------Websites--------------*/}
                <Grid container className={classes.serviceContainer} style={{marginBottom:'10em'}} direction='row' justify={matchesSM?"center":"flex-end"}>
                    <Grid item style={{marginRight:matchesSM?0:'5em',textAlign:matchesSM?"center":undefined,width:matchesSM?undefined:'35em'}}>
                        <Typography variant='h4'>
                        Website Development
                        </Typography>
                        <Typography variant='subtitle1' className={classes.subtitle}>
                        Reach More.Discover More. Sell More.
                        </Typography>
                        <Typography variant='subtitle1' >
                        Optimize for Search Engines, built for speed
                        </Typography>
                        <Button variant='outlined' component={Link} to='/websites' onClick={()=>{props.setValue(1);props.setSelectedIndex(3)}} className={classes.learnButton}>
                                <span style={{marginRight: 10}}>Learn More</span>
                        <ButtonArrow height={10} width={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item  style={{marginRight:matchesSM?0:'5em'}}>
                        <img  className={classes.icon} src={websitesIcon} alt="websiteIconlogo" width="200em"/>
                    </Grid>
                </Grid>
            </Grid>
				</Grid>
			)


}