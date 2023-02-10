// 중앙 데이터 관리소(store)를 설정하는 부분
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import counter from './modules/counter';
import users from './modules/users';

const rootReducer = combineReducers({
    // 여기 안에 reducer들을 다 넣을꺼야!!
    // 객체라서 key-value로 작성
    //  counter : counter 같으니깐 생략 가넝~
    counter,
    users,
});
const store = createStore(rootReducer);

export default store;
