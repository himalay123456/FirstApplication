import * as actionLabels from '../../actionLabels';

export const initialState = {
  isLoading: {
    setToken: false,
  },
  accessToken: '',
  isLogin: false,
};
export default (state = initialState, {type, payload}) => {
  switch (type) {
    // Set Token
    case actionLabels.SET_AUTH_TOKEN_START:
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          setToken: true,
        },
      };
    case actionLabels.SET_AUTH_TOKEN_SUCCESS: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          setToken: false,
        },
        accessToken: payload,
        isLogin: true,
      };
    }
    case actionLabels.SET_AUTH_TOKEN_FAIL: {
      return {
        ...state,
        isLoading: {
          ...state.isLoading,
          setToken: false,
        },
      };
    }

    default:
      return state;
  }
};
