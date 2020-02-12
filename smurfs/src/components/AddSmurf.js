import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AddCircleRounded from '@material-ui/icons/AddCircleRounded';
import { connect, useDispatch } from 'react-redux';
import { addSmurf } from '../actions';
import { FormHelperText } from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';

const CssTextField = withStyles({
	root : {
		'& label.Mui-focused'         : {
			color : '#00BFFF',
		},
		'& .MuiInput-underline:after' : {
			borderBottomColor : '#00BFFF',
		},
		'& .MuiOutlinedInput-root'    : {
			'& fieldset'             : {
				borderColor : 'red',
			},
			'&:hover fieldset'       : {
				borderColor : 'yellow',
			},
			'&.Mui-focused fieldset' : {
				borderColor : 'green',
			},
		},
	},
})(TextField);

const useStyles = makeStyles((theme) => ({
	root   : {
		display  : 'flex',
		flexWrap : 'wrap',
	},
	margin : {
		margin : theme.spacing(1),
	},
}));

const AddSmurf = (props) => {
	const classes = useStyles();
	const [ inputs, setInputs ] = useState({ name: '', age: '', height: '' });
	const dispatch = useDispatch();
	const onSubmit = (event) => {
		event.preventDefault();
		setInputs({ name: '', age: '', height: '' });
		dispatch(addSmurf(inputs));
		console.log('This is a villager from useState', inputs);
	};

	const valueChange = (event) => {
		setInputs({ ...inputs, [event.target.name]: event.target.value });
	};

	return (
		<form className={classes.root} noValidate onSubmit={onSubmit}>
			<CssTextField
				className={classes.margin}
				id='custom-css-standard-input'
				label='Name'
				name='name'
				value={inputs.name}
				onChange={valueChange}
			/>
			<CssTextField
				className={classes.margin}
				id='custom-css-standard-input'
				label='Age'
				value=''
				name='age'
				type='number'
				value={inputs.age}
				onChange={valueChange}
			/>
			<CssTextField
				className={classes.margin}
				id='custom-css-standard-input'
				label='Height'
				name='height'
				value={inputs.height}
				onChange={valueChange}
			/>

			<IconButton aria-label='add'>
				<AddCircleRounded className={classes.button} type={onSubmit} style={{ color: cyan[500] }} />
			</IconButton>
		</form>
	);
};

const mapStateToProps = (state) => {
	return {
		AddSmurf   : state.AddSmurf,
		isFetching : state.isFetching,
		error      : state.error,
	};
};

export default connect(mapStateToProps, { addSmurf })(AddSmurf);
