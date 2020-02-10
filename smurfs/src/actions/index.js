import axios from 'axios';

// Action Types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
// export const DELETE_SMURF = 'DELETE_SMURF';
// export const EDIT_SMURF = 'EDIT_SMURF';

// Action Creator
export const fetchSmurfs = () => (dispatch) => {
	// Action Objects
	dispatch({ type: START_FETCHING });
	// Async action and dispatch error or success
	axios
		.get('http://localhost:3333/smurfs')
		.then((res) => {
			dispatch({ type: FETCH_SUCCESS, payload: res.data });
		})
		.catch((err) => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const addSmurf = (smurf) => (dispatch) => {
	axios
		.post('http://localhost:3333/smurfs', smurf)
		.then((res) => {
			console.log(res);
			dispatch({ type: FETCH_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			console.error(err);
			dispatch({ type: FETCH_FAILURE, payload: err.response });
		});
};
