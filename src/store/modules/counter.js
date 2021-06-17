import { createAction, handleActions } from "redux-actions";

//액션 타입을 정의
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

//액션 생성 함수
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

//모듈의 초기 상태를 정의
const initialState = {
    number: 0
};

//handleActions의 첫번째 파라미터는 액션을 처리하는 함수들로 이루어진 객체이고 두번째 파라미터는 초기 상태 이다.
export default handleActions({
    [INCREMENT]: (state, action) => {
        return { number: state.number + 1};
    },
    [DECREMENT]: ({ number }) => ({ number: number - 1})
}, initialState);