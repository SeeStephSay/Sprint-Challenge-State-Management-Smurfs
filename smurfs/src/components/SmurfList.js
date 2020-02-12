import React, { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';

const SmurfList = (props) => {
	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(fetchSmurfs());
		},
		[ dispatch ],
	);

	if (props.isFetching) {
		// spinner
		return (
			<Loader
				type='Circles'
				color='#00BFFF'
				height={100}
				width={100}
				timeout={3000} //3 secs
			/>
		);
	}

	return <div className='cards'>{props.SmurfList.map((smurf) => <Smurf key={smurf.id} smurf={smurf} />)}</div>;
};

const mapStateToProps = (state) => {
	return {
		SmurfList  : state.SmurfList,
		isFetching : state.isFetching,
		error      : state.error,
	};
};

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);
