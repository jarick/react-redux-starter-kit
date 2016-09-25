// ------------------------------------
// Constants
// ------------------------------------
export const SEND = 'SEND_GET_COMPETENTS'
export const SUCCESS = 'SUCCESS_GET_COMPETENTS'
export const ERROR = 'ERROR_GET_COMPETENTS'

// ------------------------------------
// Actions
// ------------------------------------

export const load = (token) => {
  return (dispatch) => {
    dispatch({
      type: SEND
    })
    fetch("/api/v1/competents", {
      method: "GET",
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(res => {
        status = res.status;
        return res.json();
      })
      .then(data => {
        if (status >= 200 && status < 300) {
          dispatch({
            type: SUCCESS,
          });
        } else {
          dispatch({
            type: ERROR,
          });
        }
      })
      .catch((e) => {
        dispatch({
          type: ERROR,
        });
      })
  }
}

export const actions = {
  load
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  items: [],
  isSend: false,
  isFail: false,
  paginate: {}
}
export default function competenceReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
