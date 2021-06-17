import { createAction, handleActions } from "redux-actions";
import { Map, List } from 'immutable';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0; //todo 아이템에 들어갈 고유 값

const initialState = Map({
    input: '',
    todos: List()
});

export default handleActions({
    [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
    [INSERT]: (state, { payload: text }) => {
        //하나 추가 할 때마다 id 값을 증가시킴
        const item = Map({ id: id++, checked: false, text});
        return state.update('todos', todos => todos.push(item));
    },
    [TOGGLE]: (state, { payload: id }) => {
        //id 값을 가진 index를 찾아서 checked 값을 반전시킴
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.updateIn(['todos', index, 'checked'], checked => ! checked);
    },
    [REMOVE]: (state, { payload: id }) => {
        //id 값을 가진 index를 찾아서 지움
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.deleteIn(['todos', index]);
    }
}, initialState);