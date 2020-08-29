import React, { useState } from "react";
import axios from "axios";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ButtonArrow from "./Ui/ButtonArrow.js";
import Lottie from "react-lottie";
import Dialog from "@material-ui/core/Dialog";
import CircularProgress from "@material-ui/core/CircularProgress";
import DialogContent from "@material-ui/core/DialogContent";
import Snackbar from "@material-ui/core/Snackbar";
import { Link } from "react-router-dom";
import estimateAnimation from "../animations/estimateAnimation/data.json";
import { cloneDeep } from "lodash";
import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import website from "../assets/website.svg";
import mobile from "../assets/mobile.svg";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import people from "../assets/people.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import users from "../assets/users.svg";
import iphone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";

const useStyle = makeStyles((theme) => ({
  icon: {
    height: "12em",
    width: "12em",
    marginTop: "1em",
  },
  Estimate: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 50,
    width: 225,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.25rem",
    marginTop: "5em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  specialText: {
    fontFamily: "Raleway",
    fontSize: "1.5rem",
    fontWeight: 700,
    color: theme.palette.common.orange,
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: "Which service are you interested in?",
    active: true,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        icon: software,
        iconAlt: "three floating screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "IOS/Android App Development",
        subtitle: null,
        icon: mobile,
        iconAlt: "mobile",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: website,
        iconAlt: "website",
        selected: false,
        cost: 0,
      },
    ],
  },
];

const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: iphone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: android,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        icon: camera,
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users/Authentication",
        subtitle: null,
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: bell,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: person,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: globe,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

export default function Estimate(props) {
  const classes = useStyle();
  const theme = useTheme();
  const [name, setName] = useState("");
  const [nameHelper, setNameHelper] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");
  const [questions, setQuestions] = useState(defaultQuestions);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [service, setService] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState("");
  const [category, setCategory] = useState("");
  const [users, setUsers] = useState("");
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const onChange = (event, id) => {
    let valid;
    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );
        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }

        break;

      case "phone":
        setPhone(event.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          event.target.value
        );
        if (!valid) {
          setPhoneHelper("Invalid phone");
        } else {
          setPhoneHelper("");
        }

        break;

      default:
        break;
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: estimateAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const previousIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[previousIndex] = {
      ...newQuestions[previousIndex],
      active: true,
    };

    setQuestions(newQuestions);
  };

  const navigationPreviousDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);

    if (currentlyActive[0].id == 1) {
      return true;
    } else {
      return false;
    }
  };

  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);

    if (currentlyActive[0].id == questions[questions.length - 1].id) {
      return true;
    } else {
      return false;
    }
  };

  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const newSelected = newQuestions[activeIndex].options[id - 1];
    const previousSelected = currentlyActive[0].options.filter(
      (option) => option.selected
    );

    switch (currentlyActive[0].subtitle) {
      case "Select one.":
        if (previousSelected[0]) {
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;

      default:
        newSelected.selected = !newSelected.selected;
        break;
    }

    switch (newSelected.title) {
      case "Custom Software Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        break;
      case "IOS/Android App Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        break;
      case "Website Development":
        setQuestions(websiteQuestions);
        setService(newSelected.title);
        break;
      default:
        setQuestions(newQuestions);
        break;
    }
  };

  const getCost = () => {
    let cost = 0;

    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);

    selections.map((options) => options.map((option) => (cost += option.cost)));

    if (questions.length > 2) {
      const userCost = questions
        .filter(
          (question) => question.title === "How many users do you expect?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0].cost;
      cost -= userCost;
      cost *= userCost;
    }

    setTotal(cost);
    console.log(cost);
  };

  const getPlatforms = () => {
    let newPlatforms = [];

    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === "Which platforms do you need supported?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0]
        .map((option) => newPlatforms.push(option.title));

      setPlatforms(newPlatforms);
    }
  };

  const getFeatures = () => {
    let newFeatures = [];

    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === "Which features do you expect to use?"
        )
        .map((question) => question.options.filter((option) => option.selected))
        .map((option) => console.log(option));

      //  setPlatforms(newPlatforms);
    }
  };

  return (
    <Grid container direction="row">
      <Grid item container direction="column" lg>
        <Grid item style={{ marginLeft: "5em", marginTop: "2em" }}>
          <Typography variant="h2" gutterBottom>
            Estimate
          </Typography>
        </Grid>
        <Grid
          item
          style={{ marginRight: "10em", maxWidth: "50em", marginTop: "7.5em" }}
        >
          <Lottie options={defaultOptions} height="100%" width="100%" />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        lg
        style={{ marginRight: "2em", marginBottom: "25em" }}
      >
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid item>
                <Typography
                  variant="h2"
                  style={{
                    fontWeight: 500,
                    fontSize: "2.25em",
                    marginTop: "5em",
                    lineHeight: 1.25,
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginBottom: "2.5em" }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid item container justify="space-evenly">
                {question.options.map((option) => (
                  <Grid
                    item
                    container
                    direction="column"
                    style={{
                      maxWidth: "14em",
                      display: "grid",
                      textTransform: "none",
                      backgroundColor: option.selected
                        ? theme.palette.common.orange
                        : null,
                    }}
                    md
                    component={Button}
                    onClick={() => handleSelect(option.id)}
                  >
                    <Grid item style={{ maxWidth: "20em" }}>
                      <Typography
                        variant="h6"
                        align="center"
                        style={{ marginBottom: "1em" }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img
                        src={option.icon}
                        className={classes.icon}
                        alt={option.iconAlt}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}

        <Grid
          item
          container
          justify="space-between"
          style={{ width: "18em", marginTop: "3em" }}
        >
          <Grid item>
            <IconButton
              disabled={navigationPreviousDisabled()}
              onClick={previousQuestion}
            >
              {" "}
              <img
                src={
                  navigationPreviousDisabled() ? backArrowDisabled : backArrow
                }
                alt="prev"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              disabled={navigationNextDisabled()}
              onClick={nextQuestion}
            >
              {" "}
              <img
                src={
                  navigationNextDisabled() ? forwardArrowDisabled : forwardArrow
                }
                alt="next"
              />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            onClick={() => {
              setDialogOpen(true);
              getCost();
              getPlatforms();
            }}
            className={classes.Estimate}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        style={{ zIndex: 1302 }}
      >
        <Grid container justify="center" direction="column">
          <Grid item>
            <Typography variant="h2" align="center">
              Estimate
            </Typography>
          </Grid>
          <DialogContent>
            <Grid container>
              <Grid item container direction="column" md={7}>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    label="Name"
                    id="name"
                    value={name}
                    fullWidth
                    onChange={(event) => setName(event.target.value)}
                  />
                </Grid>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    label="E-mail"
                    id="email"
                    error={emailHelper.length !== 0 ? true : false}
                    helperText={
                      emailHelper.length !== 0
                        ? "Enter a valid E-mail"
                        : undefined
                    }
                    value={email}
                    fullWidth
                    onChange={onChange}
                  />
                </Grid>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    label="Phone"
                    id="phone"
                    error={phoneHelper.length !== 0 ? true : false}
                    helperText={
                      phoneHelper.length !== 0
                        ? "Enter a valid Phone no"
                        : undefined
                    }
                    fullWidth
                    value={phone}
                    onChange={onChange}
                  />
                </Grid>
                <Grid
                  item
                  style={{ maxWidth: "20em" }}
                  style={{ marginBottom: "2em" }}
                >
                  <TextField
                    className={classes.message}
                    multiline
                    rows={10}
                    fullWidth
                    id="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    InputProps={{
                      disableUnderline: true,
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body1" paragraph>
                    We can create this digital solution for an estimated{" "}
                    <span className={classes.specialText}>{`$${total}`}</span>
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Fill out your name,phone number and email,place your
                    request, and we'll get back to you with details moving
                    forard and final price
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container direction="column" md={5}>
                <Grid item>
                  <Grid container direction="column">
                    <Grid item container alignItems="center">
                      <Grid item>
                        <img src={check} alt="checkmark" />
                      </Grid>
                      <Grid item>
                        <Typography variant="body1">
                          You want {service}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container alignItems="center">
                      <Grid item>
                        <img src={check} alt="checkmark" />
                      </Grid>
                      <Grid item>
                        <Typography variant="body1">
                          {`for ${
                            //if only web application is selected...
                            platforms.indexOf("Web Application") > -1 &&
                            platforms.length === 1
                              ? //then finish sentence here
                                "a Web Application."
                              : //otherwise, if web application and another platform is selected...
                              platforms.indexOf("Web Application") > -1 &&
                                platforms.length === 2
                              ? //then finish the sentence here
                                `a Web Application and an ${platforms[1]}.`
                              : //otherwise, if only one platform is selected which isn't web application...
                              platforms.length === 1
                              ? //then finish the sentence here
                                `an ${platforms[0]}`
                              : //otherwise, if other two options are selected...
                              platforms.length === 2
                              ? //then finish the sentence here
                                "an iOS Application and an Android Application."
                              : //otherwise if all three are selected...
                              platforms.length === 3
                              ? //then finish the sentence here
                                "a Web Application, an iOS Application, and an Android Application."
                              : null
                          }`}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container alignItems="center">
                      <Grid item>
                        <img src={check} alt="checkmark" />
                      </Grid>
                      <Grid item>
                        <Typography variant="body1">
                          Third options check
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button variant="contained" className={classes.Estimate}>
                    Place Request
                    <img
                      src={send}
                      alt="paper"
                      style={{ marginLeft: "0.5em" }}
                    />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Grid>
      </Dialog>
    </Grid>
  );
}
