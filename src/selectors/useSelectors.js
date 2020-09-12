export const toGetLoading = state => state.loadingReducer.loading;

export const toGetUserSession = (state) => state.authReducer.user;

export const toGetUserError = (state) => state.authReducer.authError;
