import { container, title } from "../../Card/Exports";

const styles = {
	visuallyHidden: {
		clip: "rect(0 0 0 0)",
		clipPath: "inset(50%)",
		height: "1px",
		overflow: "hidden",
		position: "absolute",
		whitespace: "nowrap",
		width: "1px",
	},

	ul: {
		textAlign: "left",
		width: "400px",
	},
	filter: {
		margin: "16px",
	},

	high: {
		display: "flex",
		justifyContent: "space-evenly",
	},

	input: {
		height: "27px",
		margin: "4px",
		padding: "4px",
		fontSize: "24px",
	},

	p: {
		textAlign: "center",
		margin: "auto",
	},
	h2: {
		textAlign: "center",
	},
	Body: {
		backgroundColor: "#92ffff",
	},
	root: {
		flexWrap: "wrap",
		justifyContent: "space-around",
		display: "flex",
		position: "relative",
		padding: "30px",
	},
	container: {
		zIndex: "12",
		textAlign: "center",
		padding: "20px",
		margin: "auto",
		color: "#FFFFFF",
		...container,
	},
	title: {
		...title,
		color: "#FFFFFF",
		margin: "auto",
		display: "inline-block",
		position: "relative",
		fontSize: "48px",
		textAlign: "center",
		marginTop: "30px",
		padding: "15px",
		minHeight: "32px",
		textDecoration: "none",
	},
	brand: {
		color: "#FFFFFF",
		textAlign: "left",
		backgroundColor: "#212121",
	},

	subtitle: {
		fontSize: "1.313rem",
		maxWidth: "500px",
		margin: "10px 0 0",
	},
	main: {
		background: "#FFFFFF",
		position: "relative",
		zIndex: "3",
	},
	mainRaised: {
		margin: "-60px 30px 0px",
		borderRadius: "6px",
		boxShadow:
			"0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
	},
	link: {
		textDecoration: "none",
	},
	textCenter: {
		textAlign: "center",
	},

	centered: {
		textAlign: "center",
		lineHeight: "normal",
	},
};

export default styles;
