export const INCREMENT = 'INCREMENT';
export const DECRIMENT = 'DECRIMENT';
const initialState = 0;

export function counterReducer(state: number = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECRIMENT:
      return state - 1;
    default:
      return state;
  }
}
