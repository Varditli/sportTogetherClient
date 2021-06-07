import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../../App";
import Button from "../../../CustomButtons/Button";
import TextField from "@material-ui/core/TextField";
import useStyles from "../styles";
import CardFooter from "../../../Card/CardFooter";
import CardBody from "../../../Card/CardBody";
import GridItem from "../../../Grid/GridItem";

// import styles from "../LogInStyle";

// const loginstyle = makeStyles(styles);

// const classes = loginstyle();

export default function ForgotPassword({ onSuccess }) {
	const { state, dispatch } = useContext(UserContext);
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [tel, setTel] = useState("");
	const classes = useStyles();
	const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
	setTimeout(function () {
		setCardAnimation("");
	}, 700);

	function refreshPage() {
		window.location.reload(false);
	}
	const signinTrainee = () => {
		fetch(`${process.env.REACT_APP_SERVER}/forgotPassword`, {
			method: "post",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				email,
				password,
				tel,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				onSuccess();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<form className={classes.form} noValidate>
			<CardBody>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					id="email"
					label="Email Address"
					name="email"
					autoComplete="email"
					autoFocus
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					name="tel"
					label="tel"
					type="tel"
					id="tel"
					autoComplete="tel"
					value={tel}
					onChange={(e) => setTel(e.target.value)}
				/>
				<TextField
					variant="outlined"
					margin="normal"
					required
					fullWidth
					name="password"
					label="new Password"
					type="password"
					id="password"
					autoComplete="current-password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</CardBody>
			<GridItem>
				<Button onClick={() => signinTrainee()} round color="primary">
					Reset
				</Button>
			</GridItem>
		</form>
	);
}
