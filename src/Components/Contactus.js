import React,{useState} from 'react'
import axios from 'axios'
import {makeStyles,useTheme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ButtonArrow from './Ui/ButtonArrow.js';
import mobileBackground from '../assets/mobileBackground.jpg';
import Dialog from '@material-ui/core/Dialog';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogContent from '@material-ui/core/DialogContent';
import Snackbar from '@material-ui/core/Snackbar';
import {Link } from 'react-router-dom';
import backgroundImg from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';


const useStyle=makeStyles(theme=>({
background:{
    backgroundImage:`url(${backgroundImg})`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:'cover',
    height:'60em',
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
    },

    learnButton:{
    ...theme.typography.learnButton,
    fontSize:'0.7rem',
    height:35,
    padding:5,
    [theme.breakpoints.down('sm')]:{
        marginBottom:'2em'
    },
},
message:{
	border: `2px solid ${theme.palette.common.blue}`,
	marginTop:'5em',
	borderRadius:5,
},
sendButton:{
	...theme.typography.estimate,
	borderRadius:50,
	height:45,
	width:245,
	fontSize:'1rem',
	backgroundColor:theme.palette.common.orange,
	"&:hover":{
		backgroundColor:theme.palette.secondary.light
	},
	[theme.breakpoints.down('sm')]:{
		height:40,
		width:225
	}
}


}))


export default function ContactUs(props){
		const classes=useStyle();
	const theme =useTheme();
	const [name,setName]=useState('')
	const [nameHelper,setNameHelper]=useState('')
	const [email,setEmail]=useState('')
	const [emailHelper,setEmailHelper]=useState('')
	const [phone,setPhone]=useState('')
	const [phoneHelper,setPhoneHelper]=useState('')
	const [message,setMessage]=useState('')
	const [open,setOpen]=useState(false)
	const [loading,setLoading]=useState(false)
	const [alert,setAlert]=useState({open:false,message:'',backgroundColor:''})

	const matchesMd=useMediaQuery(theme.breakpoints.down('md'))
	const matchesSM=useMediaQuery(theme.breakpoints.down('sm'))
	const matchesXS=useMediaQuery(theme.breakpoints.down('xs'))

	const onConfirm=()=>{
		setLoading(true)
		axios.get('https://us-central1-material-ui-practice.cloudfunctions.net/sendMail',
					{params:{
						name:name,
						email:email,
						phone:phone,
						message:message
					}})
				.then(res=>{
								setLoading(false)
								setOpen(false)
								setName('')
								setEmail('')
								setPhone('')
								setMessage('')
								setAlert({open:true,message:'Message sent successfully',backgroundColor:"#4BB543"})
							})
				.catch(err=>{
								setLoading(false)
								setAlert({open:true,message:'Something went wrong please try again',backgroundColor:"#FF3232"})})

	}

	const buttonContents=(

		<React.Fragment>
		Send Message
		<img src={airplane} alt='airplane' style={{marginLeft:'1em'}} />
		</React.Fragment>
		)

	const onChange=(event,id)=>{
		let valid
			switch(event.target.id){
					case 'email':
								setEmail(event.target.value)
								valid=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
								if(!valid){
									setEmailHelper("Invalid email")
								}else{
									setEmailHelper("")
								}

								break;

					case 'phone':
								 setPhone(event.target.value)
								 valid=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
								if(!valid){
									setPhoneHelper("Invalid phone")
								}else{
									setPhoneHelper("")
								}

								break;



					default:
							break;

			}
	}



	return (

		<Grid container direction='row'>
			<Grid item container direction='column'  justify='center' alignItems='center' lg={4} xl={3}
				  style={{marginTop:matchesSM?'1em': matchesMd?'5em':'inherit',
				  		marginBottom:matchesMd?'5em':'inherit'}} >

				
				<Grid item>
					<Grid item container direction='column'>
					<Grid item>
					<Typography variant='h2' style={{lineHeight:1}}>
						Contact Us
					</Typography>
					<Typography variant='body1' style={{color:theme.palette.common.blue}}>
						We're waiting
					</Typography>
				</Grid>
					<Grid item container style={{marginTop:'2em'}} >
					<Grid item>
						<img src={phoneIcon} alt='phone' style={{marginRight:'0.5em'}}/>
					</Grid>
					<Grid item>
						<Typography variant='body1' style={{color:theme.palette.common.blue,fontSize:'1rem'}}>
						<a href='tel:9870665230' style={{textDecoration:'none',color:'inherit'}} >(9870665230)</a>
						</Typography>
					</Grid>
					
				</Grid>
				<Grid item container style={{marginBottom:'2em'}}>
					<Grid item>
						<img src={emailIcon} alt='email' style={{marginRight:'0.5em',verticalAlign:'bottom'}}/>
					</Grid>
					<Grid item>
						<Typography variant='body1' style={{color:theme.palette.common.blue,fontSize:'1rem'}}>
								<a href='mailto:suraj.kandpal18@gmail.com' style={{textDecoration:'none',color:'inherit'}}>suraj.kandpal18@gmail.com</a>
						</Typography>
					</Grid>
					
				</Grid>
				

					<Grid item style={{marginBottom:'0.5em'}} >
						<TextField 
								
								label='Name'
								id='name' 
								value={name}
								fullWidth
								onChange={(event)=>setName(event.target.value)}/>
						
					</Grid>
					<Grid item style={{marginBottom:'0.5em'}}>
						
						<TextField 
								label='E-mail' 
								id='email' 
								error={emailHelper.length!==0?true:false}
								helperText={emailHelper.length!==0?"Enter a valid E-mail":undefined}
								value={email}
								fullWidth
								onChange={onChange}/>
						
					</Grid>
					<Grid item style={{marginBottom:'0.5em'}}>
						
						<TextField 
								label='Phone' 
								id='phone'
								error={phoneHelper.length!==0?true:false}
								helperText={phoneHelper.length!==0?"Enter a valid Phone no":undefined}
								 fullWidth
								value={phone}
								onChange={onChange} />
						
					</Grid>
					<Grid item style={{maxWidth:'20em'}} style={{marginBottom:'2em'}}>
						
						<TextField 
								className={classes.message}
								multiline
								rows={10} 
								fullWidth
								id='message'
								value={message}
								onChange={(event)=>setMessage(event.target.value)}
								InputProps={
									{
										disableUnderline:true
									}
								} />
						
					</Grid>
					<Grid item container justify='center'>
						
						<Button 
								className={classes.sendButton}
								variant='contained'
								fullWidth
								onClick={()=>setOpen(true)}
								disabled={name.length===0||message.length===0||phoneHelper.length!==0||emailHelper.length!==0?true:false}
							>
							{buttonContents}
						</Button>

					</Grid>
				
				</Grid>
				


				</Grid>
					
			</Grid>
			<Dialog
					open={open}
					PaperProps={{
						style:{
							paddingTop:matchesXS?'1em':'3em',
							paddingBottom:matchesXS?'1em':'3em',
							paddingLeft:matchesXS?0:matchesSM?'5em':matchesMd?'10em':'11em',
							paddingRight:matchesXS?0:matchesSM?'5em':matchesMd?'10em':'11em',
						}
					}}
					style={{zIndex:1302}}
					onClose={()=>setOpen(false)}
					>
					<DialogContent>	
						<Grid container direction='column' alignItems='center'>
							<Grid item>
								<Typography variant='h4' gutterBottom>
									Confirm Message
								</Typography>
							</Grid>
							<Grid item container direction='column'>
							<Grid item style={{marginBottom:'0.5em'}} >
								<TextField 
								
									label='Name'
									id='name' 
									value={name}
									fullWidth
									onChange={(event)=>setName(event.target.value)}/>
						
							</Grid>

							<Grid item style={{marginBottom:'0.5em'}}>
						
							<TextField 
								label='E-mail' 
								id='email' 
								error={emailHelper.length!==0?true:false}
								helperText={emailHelper.length!==0?"Enter a valid E-mail":undefined}
								value={email}
								fullWidth
								onChange={onChange}/>
						
							</Grid>
							<Grid item style={{marginBottom:'0.5em'}}>
						
							<TextField 
								label='Phone' 
								id='phone'
								error={phoneHelper.length!==0?true:false}
								helperText={phoneHelper.length!==0?"Enter a valid Phone no":undefined}
								fullWidth
								value={phone}
								onChange={onChange} />
						
							</Grid>
							<Grid item  style={{marginBottom:'2em'}}>
						
							<TextField 
								className={classes.message}
								multiline
								rows={10} 
								fullWidth
								id='message'
								value={message}
								onChange={(event)=>setMessage(event.target.value)}
								InputProps={
									{
										disableUnderline:true
									}
								} />
						
							</Grid>
						</Grid>
					<Grid item container direction={matchesSM?'column':"row"} >
						<Grid item>
						<Button onClick={()=>setOpen(false)} color='primary'>Cancel</Button>
						</Grid>
						<Grid item>
							<Button 
								className={classes.sendButton}
								variant='contained'
								
								onClick={onConfirm}
								disabled={name.length===0||message.length===0||phoneHelper.length!==0||emailHelper.length!==0?true:false}
							>
							{loading?<CircularProgress size={30}/>:buttonContents}
							</Button>
						</Grid>
					</Grid>
							
						</Grid>
					</DialogContent>
			</Dialog>

			<Snackbar open={alert.open} 
					  message={alert.message} 
					  ContentProps={{style:{backgroundColor:alert.backgroundColor}}} 
					  anchorOrigin={{vertical:'top',horizontal:'center'}} onClose={()=>setAlert({...alert,open:false})}
					  autoHideDuration={4000}/>

			<Grid item container alignItems='center' justify={matchesMd?'center': 'space-between' } direction={matchesMd?'column':'row'} className={classes.background} lg={8} xl={9}>
				<Grid item style={{marginLeft:matchesSM?0:'5em',textAlign:matchesMd?"center":"inherit"}}>
				<Grid container direction='column'>
					<Grid item>
						<Typography align={matchesMd?'center':undefined} variant='h2'>Simple Software. <br/>Revolution Results</Typography>
						<Typography align={matchesMd?'center':undefined} variant='subtitle2' style={{fontSize:'1.5rem'}}>Take Advantage of 21st Century</Typography>
						<Grid container justify={matchesMd?"center":undefined} item >
                        <Button  variant='outlined' className={classes.learnButton} >
                                <span style={{marginRight: 5}}>Learn More</span>
                        <ButtonArrow height={10} width={10} fill={theme.palette.common.blue}/>
                        </Button>
                        </Grid>
					</Grid>
				</Grid>
				
			</Grid>
			<Grid item > 
			<Button  variant='filled' component={Link} to='/estimate' onClick={()=>{props.setValue(5)}} className={classes.Estimate}>Free Estimate</Button>
			</Grid>
			</Grid>
		</Grid>
		)

}	