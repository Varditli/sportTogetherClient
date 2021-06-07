import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";

import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

const Filter = ({ filter, setFilter, sportTypes }) => {
	const classes = useStyles();

	const onChange = (event) => {
		console.log("event", event.target);
		const { name, value } = event.target;
		setFilter({ ...filter, [name]: value });
	};
	console.log("filter", filter);

	const handleChangePrice = (event, newValue) => {
		console.log("handleChangePrice", newValue);
		setFilter({ ...filter, price: newValue });
	};

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<TextField
				id="outlined-basic"
				label="trainerUsername"
				variant="outlined"
				name="trainerUsername"
				onChange={onChange}
			/>
			<TextField
				select
				SelectProps={{
					multiple: true,
					renderValue: (selected) => {
						return selected.join(", ");
					},
				}}
				id="outlined-basic"
				label="sportType"
				variant="outlined"
				name="type"
				onChange={onChange}
				value={filter.type || []}
			>
				{sportTypes.map((sportType) => (
					<MenuItem key={sportType.name} value={sportType.name}>
						<Checkbox
							checked={filter?.type?.indexOf(sportType.name) > -1}
						/>
						<ListItemText primary={sportType.name} />
					</MenuItem>
				))}
			</TextField>

			<div>
				<Typography id="range-slider" gutterBottom>
					Price
				</Typography>
				<Slider
					value={filter.price || [0, 100]}
					onChange={handleChangePrice}
					valueLabelDisplay="auto"
					aria-labelledby="range-slider"
				/>
			</div>
		</form>
	);
};

export default Filter;
