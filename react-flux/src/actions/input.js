import AppDispatcher from '../dispatcher';

export default class Input {
  static refresh(input) {
    AppDispatcher.dispatch({
      actionType: 'REFRESH_INPUT',
      input: input,
    });
  }
}
