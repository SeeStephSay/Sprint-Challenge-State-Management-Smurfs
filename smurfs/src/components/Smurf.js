import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
// import { deleteSmurf } from '../actions';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import 'typeface-roboto';
// import { editSmurf } from '../actions';

const useStyles = makeStyles((theme) => ({
	card   : {
		display        : 'flex',
		color          : '#00BFFF',
		width          : 210,
		margin         : '1rem auto',
		padding        : '1rem',
		justifyContent : 'center',
	},
	button : {
		width  : 57,
		height : 40,
		margin : theme.spacing(0.5),
	},

	title  : {
		fontFamily : 'Roboto',
	},
	pos    : {
		// marginBottom : 12,
	},
	modal  : {
		display        : 'flex',
		alignItems     : 'center',
		justifyContent : 'center',
	},
	paper  : {
		backgroundColor : theme.palette.background.paper,
		border          : '2px solid #000',
		boxShadow       : theme.shadows[5],
		padding         : theme.spacing(2, 4, 3),
	},
}));

const Smurf = (props) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	// const onDelete = (e) => {
	// 	e.preventDefault();
	// 	dispatch(deleteSmurf(props.smurf.id));
	// 	console.log(props.smurf);
	// };
	const [ open, setOpen ] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const [ inputs, setInputs ] = useState({ name: props.smurf.name, age: props.smurf.age, height: props.smurf.height });
	// const onSubmit = (event) => {
	// 	event.preventDefault();
	// 	setOpen(false);
	// 	dispatch(editSmurf(inputs));
	// 	console.log(inputs);
	// };

	const valueChange = (event) => {
		setInputs({ ...inputs, [event.target.name]: event.target.value });
	};

	return (
		<div className='cards'>
			<Card className={classes.card}>
				<CardContent>
					<Typography variant='h3' component='h2'>
						{props.smurf.name}
					</Typography>
					<Typography className={classes.pos}>Age: {props.smurf.age}</Typography>
					<Typography variant='body3' component='p'>
						Height: {props.smurf.height}
					</Typography>
					{/* <Button variant='contained' color='primary' className={classes.button} onClick={handleOpen}>
						Edit
					</Button> */}
					{/* <Button variant='contained' color='secondary' className={classes.button} onClick={onDelete}>
						Delete
					</Button> */}
				</CardContent>
			</Card>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout : 500,
				}}>
				<Fade in={open}>
					<div className={classes.paper}>
						<label for='Name'>Name</label>
						<input type='text' id='Name' name='name' value={inputs.name} onChange={valueChange} />
						<label for='Age'>Age</label>
						<input type='text' id='Age' value='' name='age' type='number' value={inputs.age} onChange={valueChange} />
						<label for='Height'>Height</label>
						<input type='text' id='Height' name='height' value={inputs.height} onChange={valueChange} />
						{/* <Button variant='contained' color='primary' className={classes.button} onClick={onSubmit}>
							Save
						</Button> */}
					</div>
				</Fade>
			</Modal>
		</div>
	);
};
export default Smurf;
