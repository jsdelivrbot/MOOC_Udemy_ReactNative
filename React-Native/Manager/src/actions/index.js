import Firebase from 'firebase';

import actionTypes from './types'

export const emailChanged = text =>
{
	return 	{
				type : actionTypes.EMAIL_CHANGED,
				payload : text
			}
};

export const passwordChanged = text =>
{
	return 	{
				type : actionTypes.PASSWORD_CHANGED,
				payload : text
			}
}

/**
 * @async -> This is why we imported Redux-Thunk and used dispatch
 *
 */
export const loginUser = ( { email, password } ) =>
{
	return dispatch =>
	{
		Firebase.auth().signInWithEmailAndPassword( email, password)
			.then( user => loginUserSuccess( dispatch, user ) )
			.catch( () =>
			{
				Firebase.auth().createUserWithEmailAndPassword( email, password )
					.then( user => loginUserSuccess( dispatch, user ) )
					.catch( () => loginUserFail( dispatch ) );
			})
	};

	//////////////////////////////////////////////////////////////////

	function loginUserSuccess( dispatch, user )
	{
		dispatch(
		{
			type : actionTypes.LOGIN_USER_SUCCESS,
			payload : user
		} );
	}

	function loginUserFail( dispatch )
	{
		dispatch(
		{
			type: actionTypes.LOGIN_USER_FAIL
		} );
	}

}

/*
! Redux-Thunk is used to handle actions that are asynchronous
! Thanks to Redux-Thunk, instead of having to send back an object, we can send a function with a "dispatch"
! And thanks to redux-thunk, we can use the dispatch whenever we wanr inside the function ( I'm thinking for example if I use promisses and there's an error and I try with a new approach ...)
*/