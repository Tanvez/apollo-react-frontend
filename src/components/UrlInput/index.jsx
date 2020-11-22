import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import isURL from "isurl";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch",
		},
		"& .MuiButton-root": {
			marginTop: "20px",
		},
	},
}));

export default function UrlInput() {
	const classes = useStyles();
	const [url, setUrl] = React.useState("");
	const [slug, setSlug] = React.useState("");
	const handleChange = (event) => {
		setUrl(event.target.value);
	};

	const handleChangeSlug = (event) => {
		setSlug(event.target.value);
	};

	const handleSubmit = () => console.log("is url?", isURL(url));

	// TODO HANDLE CHECKS FOR ISURL
	// const checkUrlInput = () => {
	// 	if (url === "") return "Empty field";
	// 	if (!isURL(url)) return "Not URL format";
	// 	return "";
	// };

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<div>
				<TextField
					id="url-text"
					label="URL"
					value={url}
					onChange={handleChange}
					required
					error={url === ""}
					helperText={url === "" ? "Empty field" : ""}
				/>

				<TextField
					id="slug"
					label="Slug"
					value={slug}
					onChange={handleChangeSlug}
					required
					error={slug === ""}
					helperText={slug === "" ? "Empty field!" : " "}
				/>
				<Button
					variant="contained"
					color="primary"
					href="#contained-buttons"
					onClick={handleSubmit}
				>
					Shorten
				</Button>
			</div>
		</form>
	);
}
