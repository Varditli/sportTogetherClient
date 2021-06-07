import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
	Container,
	Typography,
	Grid,
	CssBaseline,
	Button,
	CardMedia,
} from "@material-ui/core";
import SignUp from "./compopents/Signup";
import SignIn from "./compopents/Signin";
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardBody from "../../Card/CardBody";
import Parallax from "../../compopnets/Parallax/Parallax";
import GridContainer from "../../Grid/GridContainer";
import GridItem from "../../Grid/GridItem";
import Footer from "../../Footer/Footer";

import ForgotPassword from "./compopents/ForgotPassword";

import useStyles from "./styles";

var isSignin = true;
function refreshPage() {
	window.location.reload(false);
}
export default function Login() {
	const [displayForgotPassword, setDisplayForgotPassword] = useState(false);

	const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
	setTimeout(function () {
		setCardAnimation("");
	}, 700);
	const history = useHistory();
	const isSigned = () => {
		if (isSignin) {
			isSignin = false;
		} else {
			isSignin = true;
		}
		history.push("/LoginTrainee");
	};

	const classes = useStyles();
	console.log(Date.now());

	const onForgotPassword = () => setDisplayForgotPassword(true);

	return (
		<div>
			<Parallax
				small
				filter
				image={
					"https://res.cloudinary.com/dywnmmeue/image/upload/v1618049358/image1587385360_ortrsf.jpg"
				}
			>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={6}>
							<h1 className={classes.title}>SporTogether</h1>
							<br />
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>

			<Container className={classes.trainer} component="main" maxWidth="xs">
				<CssBaseline />
				<Grid>
					<Card className={classes[cardAnimaton]}>
						{isSignin ? (
							<div>
								<CardHeader>
									<Typography component="h1" variant="h5">
										{displayForgotPassword
											? "Reset password"
											: "Sign in"}
									</Typography>
								</CardHeader>
								<form className={classes.form}>
									{!displayForgotPassword && (
										<SignIn value={isSignin} />
									)}
									{displayForgotPassword && (
										<ForgotPassword
											onSuccess={() =>
												setDisplayForgotPassword(false)
											}
										/>
									)}
									<Grid item>
										<Button
											onClick={() => isSigned()}
											variant="body2"
										>
											{"Don't have an account? Sign Up"}
										</Button>
										<Button
											onClick={() => onForgotPassword()}
											variant="body2"
										>
											forgot password?
										</Button>
									</Grid>
								</form>
							</div>
						) : (
							<div>
								<CardHeader>
									<Typography component="h1" variant="h5">
										Sign Up
									</Typography>
								</CardHeader>
								<SignUp />
								<Grid item>
									<Button
										onClick={() =>
											isSigned() && setDisplayForgotPassword(false)
										}
										variant="body2"
									>
										{"Already have an account? Sign in"}
									</Button>
								</Grid>
							</div>
						)}
					</Card>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
}
