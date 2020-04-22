import React from 'react'
import Lottie from 'react-lottie';
import {makeStyles,useTheme} from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import {Link } from 'react-router-dom';
import vision from '../assets/vision.svg'
import consultation from '../assets/consultationIcon.svg'
import mockup from '../assets/mockupIcon.svg'

import review from '../assets/reviewIcon.svg'

import design from '../assets/designIcon.svg'
import build from '../assets/buildIcon.svg'
import launch from '../assets/launchIcon.svg'
import maintain from '../assets/maintainIcon.svg'
import iterate from '../assets/iterateIcon.svg'
import technologyData from '../animations/technologyAnimation/data.json';
import CallToAction from './Ui/CallToAction.js'




const useStyle=makeStyles(theme=>({
rowContainer:{
	paddingLeft:'5em',
	paddingRight:'5em',
	
	[theme.breakpoints.down('sm')]:{
		paddingLeft:'1.5em',
	paddingRight:'1.5em',
	
	}
},

}))




export default function Revolution(props){
	const classes=useStyle();
	const theme =useTheme();
	const matchesMd=useMediaQuery(theme.breakpoints.down('md'))
	const matchesSm=useMediaQuery(theme.breakpoints.down('sm'))
	const matchesXs=useMediaQuery(theme.breakpoints.down('xs'))

	const technologyOptions = {
      loop:true,
      autoplay: false, 
      animationData: technologyData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }}

	return (

		<Grid container direction='column'>
			<Grid item className={classes.rowContainer} style={{marginTop:'2em'}}>
				<Typography variant='h2' align={matchesMd?"center":undefined} style={{fontFamily:'Pacifico'}}>
				The Revolution
				</Typography>
			</Grid>
			<Grid item container direction={matchesMd?'column': 'row'} alignItems='center' className={classes.rowContainer} lg>
				<Grid item>
					<img src={vision} alt='vision' style={{maxWidth:matchesSm?300:'40em',marginRight:matchesMd?0:'5em',marginBottom:matchesMd?'5em':0}}/>
				</Grid>
				<Grid item container direction='column' style={{maxWidth:'40em'}} lg>
					<Grid item>
						<Typography variant='h4' align={matchesMd?"center":undefined} align={matchesMd?"center":'right'} paragraph>
							Vision
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='body1' align={matchesMd?"center":'right'} paragraph>
							The rise of computers, and subsequently the Internet, has completely 
							altered every aspect of human life. This has increased our comfort, broadened 
							our connections, and reshaped how we view the world.

						</Typography>
						<Typography variant='body1' align={matchesMd?"center":'right'} paragraph>
							What once was confined to huge rooms and teams of engineers now resides in every single one of our hands.
							 Harnessing this unlimited potential by using it to solve problems and better lives is at the heart of everything we do

						</Typography>
						<Typography variant='body1' align={matchesMd?"center":'right'} paragraph>
							We want to help businesses capitalize on the latest and greatest technology. The best way to predict
							 the future is to be the one building it, and we want to help guide the world into this next chapter of 
							 technological expansion, exploration, and innovation.


						</Typography>
						<Typography variant='body1' align={matchesMd?"center":'right'} paragraph>
							By holding ourselves to rigorous standards and pristine quality, we can ensure you have the 
							absolute best tools necessary to thrive in this new frontier.


						</Typography>
						<Typography variant='body1' align={matchesMd?"center":'right'} paragraph>
							We see a future where every individual has personalized software custom tailored to their lifestyle,
							 culture, and interests, helping them overcome life’s obstacles. Each project is a step towards that 


						</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item container direction={matchesMd?'column': 'row'} alignItems='center' className={classes.rowContainer} lg>
				
				<Grid item container direction='column' style={{maxWidth:'40em'}} lg>
					<Grid item>
						<Typography variant='h4' align={matchesMd?"center":undefined} align={matchesMd?"center":undefined} paragraph>
							Technology
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='body1' align={matchesMd?"center":undefined}   paragraph>
							In 2013, Facebook invented a new way of building websites. This new system,
							 React.js, completely revolutionizes the process and practice of website development.
						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} paragraph>
							Instead of chaining together long individual pages, like traditional websites, React websites are built
							 with little chunks of code called components. These components are faster, easier to maintain, and are 
						 easily reused and customized, each serving a singular purpose.
						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} paragraph>
							Two years later they shocked the world by releasing a similar system, React Native, for producing iOS and Android apps. 
							Instead of having to master two completely separate development platforms,
							 you can leverage the knowledge you already possessed from building websites and reapply it directly! This was a huge leap forward.
						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} paragraph>
							This technology is now being used by companies like AirBnB, Microsoft, Netflix, Pinterest, Skype, 
							Tesla, UberEats, and when Facebook purchased Instagram large portions of it were even rebuilt using React.
						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} paragraph>
							Developers have since built on top of these systems by automating project setup and deployment, allowing 
							creators to focus as much as possible on their work itself.
						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} paragraph>
							These technical advancements translate into savings by significantly reducing the workload and streamlining the 
							workflow for developing new pieces of software, while also lowering the barrier to entry for mobile app development.
						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} paragraph>
							This puts personalization in your pocket — faster, better, and more affordable than ever before.
						</Typography>
					</Grid>
				</Grid>
				<Grid item container justify={matchesMd?'center':'flex-end'} lg>
					<Lottie options={technologyOptions} style={{maxWidth:"40em",margin:0}} />
				</Grid>
			</Grid>
			<Grid item container direction='row' justify='center' className={classes.rowContainer}  >
				<Grid item>
					<Typography variant='h4'  align={matchesMd?"center":undefined} gutterBottom>Process</Typography>
				</Grid>
			</Grid>
			<Grid item container direction={matchesMd?'column': 'row'} className={classes.rowContainer} style={{backgroundColor:'#B3B3B3',height:'90em'}}>
				<Grid item container direction='column' alignItems={matchesMd?'center':undefined} lg>
					<Grid item>
						<Typography variant='h4' align={matchesMd?"center":undefined} gutterBottom style={{color:'#000',marginTop:'5em'}}>
						Consultation
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						Our process begins the moment you realize you need a piece of technology for your business.
						 Whether you already have an idea for where to start and what to do, or if you just 
						know you want to step things up, our initial consultation will help you examine your 
						business holistically to find the best solutions.
						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						Detailed notes will be taken on your requirements and constraints, while taking care to
						 identify other potential areas for consideration.
						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						Cutting-edge advancements in machine learning like object detection and natural language processing allow
						 computers to do things previously unimaginable, and our expertise and intuition will help usher you into 
						 this new future of possibilities.
						</Typography>
						
					</Grid>
				</Grid>
				<Grid item lg style={{alignSelf:'center'}}>
					<img src={consultation} alt='consultation' width='100%' style={{maxWidth:700}}/>
				</Grid>
			</Grid>
			<Grid item container direction={matchesMd?'column': 'row'} className={classes.rowContainer} style={{backgroundColor:'#FF7373',height:'90em'}}>
				<Grid item container direction='column' alignItems={matchesMd?'center':undefined} lg>
					<Grid item>
						<Typography variant='h4' align={matchesMd?"center":undefined} gutterBottom style={{color:'#000',marginTop:'5em'}}>
						Mockup
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						After we settle on the best path forward and decide on a solution to pursue, details like
						 the cost and timeline will be finalized.
						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						Then it’s time for us to start on your minimum viable product. That’s just a fancy term for a mockup,
						 which doesn’t include colors, images, 
						or any other polished design elements, but captures the essential layout structure and functionality.
						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						This helps us understand and refine the solution itself before getting distracted by specifics and looks.
						</Typography>
						
					</Grid>
				</Grid>
				<Grid item lg style={{alignSelf:'center'}}>
					<img src={mockup} alt='mockup' width='100%' style={{maxWidth:1000}}/>
				</Grid>
			</Grid>
			<Grid item container direction={matchesMd?'column': 'row'} className={classes.rowContainer} style={{backgroundColor:'#39B54A',height:'90em'}}>
				<Grid item container direction='column' alignItems={matchesMd?'center':undefined} lg>
					<Grid item>
						<Typography variant='h4' align={matchesMd?"center":undefined} gutterBottom style={{color:'#000',marginTop:'5em'}}>
						Review
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any
						 changes you may want or any ideas you may have come up with before any heavy lifting has been done.
						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into
						 each screen and every anticipated feature.

						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design
						</Typography>
						
					</Grid>
				</Grid>
				<Grid item lg style={{alignSelf:'center'}}>
					<img src={review} alt='review' />
				</Grid>
			</Grid>
			<Grid item container direction={matchesMd?'column': 'row'} className={classes.rowContainer} style={{backgroundColor:'#A67C52',height:'90em'}}>
				<Grid item container direction='column' alignItems={matchesMd?'center':undefined} lg>
					<Grid item>
						<Typography variant='h4' align={matchesMd?"center":undefined} gutterBottom style={{color:'#000',marginTop:'5em'}}>
						Design
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						Using the mockups and notes taken during the consultation as guides, we will start ironing out what the final product will look like.
						 This also involves using any brand material like fonts, colors, and logos to extend the experience you’re already familiar with.
						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						No aspect is superfluous, and care will be taken with every decision.

						</Typography>
						
						
					</Grid>
				</Grid>
				<Grid item lg style={{alignSelf:'center'}}>
					<img src={design} alt='design' width='100%' style={{maxWidth:1000}}/>
				</Grid>
			</Grid>
			<Grid item container direction={matchesMd?'column': 'row'} className={classes.rowContainer} style={{backgroundColor:'#FBB03B',height:'90em'}}>
				<Grid item container direction='column' alignItems={matchesMd?'center':undefined} lg>
					<Grid item>
						<Typography variant='h4' align={matchesMd?"center":undefined} gutterBottom style={{color:'#000',marginTop:'5em'}}>
						Build
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						Here’s where we get down to business.

						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						Engineering begins after your approval on the final designs. We start by scaffolding
						 out the project on a high level, prioritizing some areas over others.

						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						Each area is then developed in order of importance until ready to be connected to the next piece.
						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						Typically the backend, behind the scenes operations are completed first. Once all
						 the services are in place we can then create the front end, user side of things.

						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						Finishing the application doesn’t mean we’re done though, because we use extensive testing 
						to guarantee compatibility with all intended devices.

						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						Only after our rigorous examinations will we accept a product as finished, then pushing it through the
						 production pipeline. This produces an optimized, compressed, consumer version of the code and assets ready for deployment.
						</Typography>
						
					</Grid>
				</Grid>
				<Grid item lg style={{alignSelf:'center'}}>
					<img src={build} alt='build' width='100%' style={{maxWidth:matchesMd?700:1000}}/>
				</Grid>
			</Grid>
			<Grid item container direction={matchesMd?'column': 'row'} className={classes.rowContainer} style={{backgroundColor:'#C1272D',height:'90em'}}>
				<Grid item container direction='column' alignItems={matchesMd?'center':undefined} lg>
					<Grid item>
						<Typography variant='h4' align={matchesMd?"center":undefined} gutterBottom style={{color:'#000',marginTop:'5em'}}>
						Launch
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						The moment we’ve all been waiting for.


						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						When construction comes to a close you’re the first one to know. We’ll give our final demonstration to show 
						off your shiny new software in the wild so you know exactly how it will look to your users.


						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						When you say the word, we press the button and launch your project out to the public. We’re there to ensure everything 
						goes to plan so you can start reaping the rewards of your technological investment immediately.
						</Typography>
						
						
					</Grid>
				</Grid>
				<Grid item lg style={{alignSelf:'center'}}>
					<img src={launch} alt='launch' width='100%' style={{maxWidth:200}}/>
				</Grid>
			</Grid>
			<Grid item container direction={matchesMd?'column': 'row'} className={classes.rowContainer} style={{backgroundColor:'#8E45CE',height:'90em'}}>
				<Grid item container direction='column' alignItems={matchesMd?'center':undefined} lg>
					<Grid item>
						<Typography variant='h4' align={matchesMd?"center":undefined} gutterBottom style={{color:'#000',marginTop:'5em'}}>
						Maintain
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						Our work doesn’t end there.



						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						After a successful launch we keep in close contact to listen to feedback and hear how the project is being received.


						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						From there on out we make sure your application is kept up to date and taking advantage of the best features and practices available. When new developments arise or new techniques are 
						discovered in future projects, we will implement those advancements in your project as part of our routine maintenance.
						</Typography>
						
						
					</Grid>
				</Grid>
				<Grid item lg style={{alignSelf:'center'}}>
					<img src={maintain} alt='maintain' width='100%' style={{maxWidth:500}} />
				</Grid>
			</Grid>
			<Grid item container direction={matchesMd?'column': 'row'} className={classes.rowContainer} style={{backgroundColor:'#29ABB2',height:'90em'}}>
				<Grid item container direction='column' alignItems={matchesMd?'center':undefined} lg>
					<Grid item>
						<Typography variant='h4' align={matchesMd?"center":undefined} gutterBottom style={{color:'#000',marginTop:'5em'}}>
						Iterate
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						The cycle repeats whenever you come up with a new idea for extending your current project, or
						 come up with a brand new system entirely.



						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						By planning for future features and changes we can build and evolve your application over time. 
						As new use cases and customer needs develop we can respond with continuous integration of new content.



						</Typography>
						<Typography variant='body1' align={matchesMd?"center":undefined} style={{color:'#fff',maxWidth:'20em'}} paragraph>
						Our iterative process will keep you current and competitive, allowing you to quickly implement changes
						 instead of waiting months for a single update.
						</Typography>
						
						
					</Grid>
				</Grid>
				<Grid item lg style={{alignSelf:'center'}}>
					<img src={iterate} width='100%' alt='iterate' style={{maxWidth:1000}} />
				</Grid>
			</Grid>
			<Grid item>
					<CallToAction setValue={props.setValue} />
				</Grid>
		</Grid>

		)
}