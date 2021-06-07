import React, { useEffect, useState, useHistory } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";
import Parallax from "../../compopnets/Parallax/Parallax";
import Training from "../../Card/Training";
import GridContainer from "../../Grid/GridContainer";
import GridItem from "../../Grid/GridItem";
import classNames from "classnames";
import Footer from "../../Footer/Footer";
import styles from "./styles";
import Button from "../../CustomButtons/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./Search";
//import Maps from "./googleMaps/Maps";
import Schedule from "@material-ui/icons/Schedule";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import NavPills from "../../NavPills/NavPills";
//import LocationSearchInput from "./googleMaps/LocationSearchInput";
//import FindLocation from "./googleMaps/FindLocation";
// import { ZoomMtg } from '@zoomus/websdk';

import Filter from "../../Filter/Filter";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
	const [trainings, setTrainings] = useState([]); //contains json of trainings
	const [sportTypes, setSportTypes] = useState([]); //contains json of trainings
	const fetchData = async () => {
		try {
			const res = await fetch(
				`${process.env.REACT_APP_SERVER}/allTrainings`,
				{
					headers: {
						"Content-Type": "application/json", //the content type is json
					},
				}
			);
			const body = await res.json();
			return body.trainings.filter((training) => {
				return new Date(training.time).getTime() > Date.now(); // display only future training
			});
		} catch (err) {
			console.log(err);
		}
	};

	const likeTraining = (id, result) => {
		const newData = trainings.map((item) => {
			if (item._id == result._id) {
				return result;
			} else {
				return item;
			}
		});
		setTrainings(newData);
	};

	const unlikeTraining = (id, result) => {
		const newData = trainings.map((item) => {
			if (item._id == result._id) {
				return result;
			} else {
				return item;
			}
		});
		setTrainings(newData);
	};

	const fetchSportTypes = async (callback) => {
		try {
			const res = await fetch(
				`${process.env.REACT_APP_SERVER}/allSportTypes`
			);
			const body = await res.json();

			callback(body.sportTypes);
			return body.sportTypes;
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		console.log("fetch");
		fetchData().then((data) => setTrainings(data));
		fetchSportTypes((data) => setSportTypes(data));
	}, []);

	const filtertrainings = (trfiltertrainings, query) => {
		if (!query) {
			return trfiltertrainings;
		}

		return trfiltertrainings.filter((trainings) => {
			const trainingsName = trainings.name.toLowerCase();
			return trainingsName.includes(query);
		});
	};

	const classes = useStyles();
	const { search } = window.location;
	const query = new URLSearchParams(search).get("s");
	const [searchQuery, setSearchQuery] = useState(query || "");
	const filteredtrainings = filtertrainings(trainings, query);

	console.log("trainings : ", trainings);
	console.log("setSportTypes", sportTypes);

	const [filter, setFilter] = useState({});
	const filterOptions = (item) => {
		const { trainerUsername, type, price } = filter;
		if (trainerUsername && !item.trainerUsername.includes(trainerUsername))
			return false;

		if (type && type.length) {
			const exists = item.type.some((sportType) => type.includes(sportType));
			console.log("exists", exists, type, item);
			if (!exists) return false;
		}

		if (price && (item.price < price[0] || item.price > price[1]))
			return false;

		return true;
	};

	return (
		<Router>
			<div>
				<Parallax
					small
					filter
					image={
						"https://res.cloudinary.com/varditcloud/image/upload/v1622705744/bg_brk5no.png"
					}
				>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={6}>
								<h1 className={classes.title}>SporTogether</h1>
								<h3>We bring you all the traingings into one place</h3>
								<br />
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>

				<div className={classNames(classes.main, classes.mainRaised)}>
					<Container className={classes.root} component="main">
						<div className={classes.section}>
							<GridContainer justify="center">
								<GridItem xs={12} sm={12} md={8}>
									<h1>How it works</h1>
								</GridItem>
							</GridContainer>
							<NavPills
								color="primary"
								tabs={[
									{
										tabButton: "Sign up",
										tabIcon: HowToRegIcon,
										tabContent: (
											<span className={classes.centered}>
												<h3>
													<ul>
														In order to participate in the
														trainings,
													</ul>
													<ul>
														{" "}
														first, you need to sign up to our
														website
													</ul>
												</h3>
												<br />
											</span>
										),
									},
									{
										tabButton: "Register to the training",
										tabIcon: Schedule,
										tabContent: (
											<span className={classes.centered}>
												<h3>
													<ul>After you are signed-in,</ul>
													<ul>
														choose the training you would like to
														participate in and book your place.
													</ul>
													<ul>
														No payment needed, you will pay
														directly to the trainer.
													</ul>
												</h3>
												<br />
											</span>
										),
									},
									{
										tabButton: " Enjoy ",
										tabIcon: CheckCircleIcon,
										tabContent: (
											<span className={classes.centered}>
												<h3>
													<ul>It's all set !</ul>
													<ul>You can now enjoy your training</ul>
												</h3>
												<br />
											</span>
										),
									},
								]}
							/>

							<GridContainer justify="center">
								<GridItem xs={12} sm={12} md={8}>
									<h1>Our Trainings</h1>
								</GridItem>
							</GridContainer>
							<GridContainer>
								{/* //here will be the filters for the trainings */}

								{/* <Autocomplete
                  id="Category"
                  options={trainings}
                  getOptionLabel={(trainings) => trainings.type}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Category"
                      variant="outlined"
                    />
                  )}
                />
                <Autocomplete
                  id="Date"
                  options={trainings}
                  getOptionLabel={(trainings) => trainings.time}
                  style={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label=" Date" variant="outlined" />
                  )}
                /> */}
							</GridContainer>
							<Grid className={classes.filter} container spacing={16}>
								<Filter
									setFilter={setFilter}
									filter={filter}
									sportTypes={sportTypes}
								/>
							</Grid>
							<Grid className={classes.high} container spacing={8}>
								{trainings
									? trainings.filter(filterOptions).map((item) => {
											return (
												<Training
													key={item._id}
													value={item}
													likeTraining={likeTraining}
													unlikeTraining={unlikeTraining}
												/>
											);
									  })
									: ""}
							</Grid>
						</div>
					</Container>
				</div>
				<Footer />
			</div>
		</Router>
	);
}
