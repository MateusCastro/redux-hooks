const INITIAL_STATE = {
  number: 0
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, number: state.number + 1 };
    case "REM":
      return { ...state, number: state.number - 1 };
    default:
      return state;
  }
}
