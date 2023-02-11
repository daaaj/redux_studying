/*
    만약 action type을 바꿔야 한다면...
    app 컴포넌트랑 counter 리듀서에 한개씩 다 직접 수정해줘야 함
    => 비효율적!! 몇백개의 파일들을 다 수정해줄 수 없다!!
       (휴먼에러..하드코딩 지양하자요...)
    그래서 type을 변수로 관리를 해보자!
*/
// action value
// 상수로 만들기 = 변하지 않으니깐^^
// 근데 여기서(reducer)안에서만 쓰는게 아니고 app컴포넌트에서도 써야하니깐
// export 해주기 !!!!!!!
// but, 이제는 action creator를 사용하기 때문에 export 해줄필요 없음
const PLUS_ONE = 'counter/PLUS_ONE';
const MINUS_ONE = 'counter/MINUS_ONE';
const PLUS_N = 'counter/PLUS_N';
const MINUS_N = 'counter/MINUS_N';
/*
    action 객체도 안에 내용들이 많아지기 때문에
    휴먼에러 가능성 높다!!
    그래서 이것도 하나의 변수로 관리...
    action은 객체니깐 return 도 객체로~~~
    이것도 컴포넌트에서 써야하니깐 export 해주기
*/
// action creator : action value를 return하는 함수
export const plusOne = () => {
    return {
        type: PLUS_ONE,
    };
};
export const minusOne = () => {
    return {
        type: MINUS_ONE,
    };
};
// payload 인자값으로 받기
export const plusN = (payload) => {
    return {
        type: PLUS_N,
        payload: payload,
    };
};
export const minusN = (payload) => {
    return {
        type: MINUS_N,
        payload,
    };
};

// 초기상태값(state) 필요
const initialState = {
    number: 0,
};
// const [number, setNumber] = useState(0);
// 이걸 위처럼 작성한거임~~

// reducer : 'state에 변화를 일으키는' 함수
// 1) state를 action의 type에 따라 변경하는 함수

// input값 : state, action 2가지로 받는다
// action 객체라는 것은 action type을 payload만큼 처리하는 것이다!!
// ex : payload가 3이다. 3만큼 plus ~~
const counter = (state = initialState, action) => {
    // action : type, value 가 있다(객체)
    //        : state를 어떻게 할건지~~

    // console.log(state)
    // => {number:0} 으로 객체형태여서
    // case return 문도 객체로 맞춰줘야 함!!
    switch (action.type) {
        // case 'PLUS_ONE': => 문자열말고 변수로 지정!!
        case PLUS_ONE:
            return {
                number: state.number + 1,
            };
        case MINUS_ONE:
            return {
                number: state.number - 1,
            };
        case PLUS_N:
            return {
                number: state.number + action.payload,
            };
        case MINUS_N:
            return {
                number: state.number - action.payload,
            };
        default:
            return state;
    }
};
export default counter;
// 밖으로 내보내주기..
// counter modules 만든거다
