// 초기상태값(state) 필요
const initialState = {
    userId: 123,
};
// const [number, setNumber] = useState(0);
// 이걸 위처럼 작성한거임~~

// reducer : 'state에 변화를 일으키는' 함수
// 1) state를 action의 type에 따라 변경하는 함수

// input값 : state, action 2가지로 받는다
const users = (state = initialState, action) => {
    // action : type, value 가 있다
    //        : state를 어떻게 할건지~~
    switch (action.type) {
        default:
            return state;
    }
};
export default users;
// 밖으로 내보내주기..
// counter modules 만든거다
