import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE, ADD_SMURF, DELETE_SMURF, EDIT_SMURF } from '../actions';

const initialState = {
	SmurfList  : [],
	isFetching : false,
	error      : '',
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case START_FETCHING:
			return {
				...state,
				isFetching : true,
				error      : '',
			};
		case FETCH_SUCCESS:
			return {
				...state,
				isFetching : false,
				error      : '',
				SmurfList  : action.payload,
			};
		case FETCH_FAILURE:
			return {
				...state,
				isFetching : false,
				error      : action.payload,
			};
		case ADD_SMURF:
			return {
				...state,
				SmurfList  : action.payload,
				error      : action.payload,
				isFetching : false,
			};
		default:
			return state;
	}
};

export default reducer;
