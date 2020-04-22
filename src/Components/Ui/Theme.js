import { createMuiTheme } from '@material-ui/core/styles';



const arcBlue="#0b72b9";
const arcOrange='#ffba60';
const arcGrey="#868686";
const Theme = createMuiTheme({
  palette:{
  	common:{
  		blue:`${arcBlue}`,
  		orange:`${arcOrange}`,
  	},
  primary:{
  	main:`${arcBlue}`
  },
  secondary:{
  	main:`${arcOrange}`
  }
},

  typography:{
    h2:{
      fontFamily:'Raleway',
      fontWeight:700,
      fontSize:'2.5rem',
      color:`${arcBlue}`,
      lineHeight:1.5
    },
  	h3:{
        fontFamily:'Pacifico',
  		  fontSize:'2.5rem',
        color:`${arcBlue}`
  	  	},

    h4:{
      fontFamily:'Raleway',
      fontSize:'1.75rem',
      color:`${arcBlue}`,
      fontWeight:700,

    },
    h6:{
      fontWeight:500,
      fontFamily:'Raleway',
      color:arcBlue,
      lineHeight:1
    },
    subtitle1:{
      fontSize:"1.25rem",
      color:`${arcGrey}`,
      fontWeight:300
    },
    body1:{
 fontSize:"1.25rem",
      color:arcGrey,
      fontWeight:200
    },

    subtitle2:{
      fontSize:"1.25rem",
      color:"white",
      fontWeight:300
    },
    learnButton:{
      borderColor:arcBlue,
  color:arcBlue,
  borderWidth:2,
  textTransform:'none',
  borderRadius:50,
  fontFamily:'Roboto',
  fontWeight:'bold',
    },

  	tab:{
  		fontFamily:'Raleway',
		textTransform:'none',
		fontWeight:700,
		fontSize:'1rem',
  	},
  	estimate:{
  		fontFamily:'Pacifico',
		fontSize:'1rem',
		textTransform:'none',
		color:'white',
  	}


  },
  overrides:{
    MuiInputLabel:{
      root:{
        color:arcBlue,
        fontSize:'1rem'
      }
    },
    MuiInput:{
      root:{
        color:arcGrey,
        fontSize:'1rem',
        fontWeight:300

      },
      underline:{
        "&:before":{
          borderBottom:`2px solid ${arcBlue}`
        },
        "&:hover:not($disable):not($focused):not($error):before":{
          borderBottom:`2px solid ${arcBlue}`
        },
      }
    }
  }
  
});


export default Theme;