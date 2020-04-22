import React from 'react';
import Grid from '@material-ui/core/Grid'
import Typography from  '@material-ui/core/Typography';
import {makeStyles,useTheme} from  '@material-ui/core/styles';
import Button from  '@material-ui/core/Button';
import ButtonArrow from './ButtonArrow.js';
import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {Link} from 'react-router-dom'


const useStyles=makeStyles(theme=>({


	learnButton:{
    ...theme.typography.learnButton,
    fontSize:'0.7rem',
    height:35,
    padding:5,
    [theme.breakpoints.down('sm')]:{
        marginBottom:'2em'
    },
},
    myBackground:{
    	 backgroundImage:`url(${background})`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:'cover',
    height:'100%',
    width:'100%',
    backgroundAttachment:"fixed",
    [theme.breakpoints.down('md')]:{
    	 backgroundImage:`url(${mobileBackground})`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:'cover',
    height:'100%',
    width:'100%',
     backgroundAttachment:"inherit",

    }
    },

    Estimate:{
    	...theme.typography.estimate,
    	borderRadius:50,
    	height:80,
    	width:205,
    	backgroundColor:theme.palette.common.orange,
    	fontSize:"1.5rem",
    	marginRight:'5em',
    	[theme.breakpoints.down('sm')]:{
    		marginLeft:0,
    		marginRight:0,
    	}
    }
    


}))

export default function CallToAction(props){
const classes=useStyles();
const theme=useTheme();
const matchesSM=useMediaQuery(theme.breakpoints.down("sm"))

return (
		<Grid container style={{height:'60em'}} direction={matchesSM?"column":"row"} alignItems='center' justify={matchesSM?"center":'space-between'} className={classes.myBackground}>
			
			<Grid item style={{marginLeft:matchesSM?0:'5em',textAlign:matchesSM?"center":"inherit"}}>
				<Grid container direction='column'>
					<Grid item>
						<Typography variant='h2'>Simple Software. <br/>Revolution Results</Typography>
						<Typography variant='subtitle2' style={{fontSize:'1.5rem'}}>Take Advantage of 21st Century</Typography>
						<Grid container justify={matchesSM?"center":undefined} item>
                        <Button variant='outlined' className={classes.learnButton}>
                                <span style={{marginRight: 5}}>Learn More</span>
                        <ButtonArrow height={10} width={10} fill={theme.palette.common.blue}/>
                        </Button>
                        </Grid>
					</Grid>
				</Grid>
				
			</Grid>
			<Grid item>
			<Button variant='filled' component={Link} to='/estimate' onClick={()=>{props.setValue(5)}} className={classes.Estimate}>Free Estimate</Button>
			</Grid>
			
		</Grid>

	)


}