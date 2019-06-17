/**
 *  작성할 제목, 내용, 태그들의 상태를 리덕스에서 관리
 * 
 */
import { createAction, handleActions } from 'redux-actions';

import { Map } from 'immutable';
import { pender } from 'redux-pender';

// action types
const INITIALIZE = 'editor/INITIALIZE';
const CHANGE_INPUT = 'editor/CHANGE_INPUT';

// action creators
export const initialize = createAction(INITIALIZE);
export const changeInput = createAction(CHANGE_INPUT);

// initial state
const initialState = Map({
  title: '',
  markdown: '',
  tags: ''
});

// reducer
export default handleActions({
  [INITIALIZE]: (state, action) => initialState,
  [CHANGE_INPUT]: (state, action) => {
    const { name, value } = action.payload;
    return state.set(name, value);
  }
}, initialState)