import * as types from '../common/actionTypes/app';

export const setAppLoading = (isLoading) => (dispatch) => {
    dispatch({
        type: types.SET_LOADING,
        data: isLoading,
    });
};
