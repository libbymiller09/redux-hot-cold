import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make a guess',
  coount: 0,
  correctAnswer: Math.round(Math.random() * 100) + 1
};

export default (state=initialState, action) => {
  if (action.type === actions.NEW_GAME) {
    return Object.assign({}, state, {
      guesses: [],
      feedback: 'Make a guess',
      count: 0,
      correctAnswer: action.correctAnswer
    });
  }

  else if (action.type === actions.MAKE_GUESS) {
    let feedback, guess;

    guess = parseInt(action.guess, 10);
    return Object.assign({}, state, {
      feedback,
      guesses: [...state.guesses, guess]
    });
  }

  else if (action.type === actions.FEEDBACK) {
    const {guesses, feedback} = state;
    const pluralize = guesses.length !== 1;
    let feedback = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize
      ? 'guesses'
      : 'guess'}.`;

    return Object.assign({}, state, {feedback});
  }
  
  return state;
};