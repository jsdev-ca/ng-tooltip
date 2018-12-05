import { Actions, ADD_STATES, CLEAR_STATES } from './control-panel.actions';

const initialState = [];

export function controlPanelReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ADD_STATES:
      return state.concat(state, action.payload);
    case CLEAR_STATES:
      return initialState;
    default:
      return state;
  }
}
