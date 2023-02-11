import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// counter 리듀서에서 export한거 import해주기
// import { PLUS_ONE, MINUS_ONE } from './redux/config/modules/counter';
import { plusOne, minusOne, plusN, minusN } from './redux/config/modules/counter';
import { useState } from 'react';

function App() {
    const [num, setNum] = useState(0);

    // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다
    // useSelector(콜백함수) 사용(redux hook)

    // state는 중앙저장소의 state를 말한다!!
    const counter = useSelector((state) => {
        // return state;
        return state.counter;
    });
    //console.log('counter -> ', counter.number);
    /*
        return state ->
        counter = counter : {number:0}, users: {userId:123}
        counter.counter = {number:0}
        counter.counter.number = 0

        return state.counter ->
        counter = {number:0}
    */

    // dispatch 가져오기
    const dispatch = useDispatch();

    return (
        <>
            <div>현재 카운트 : {counter.number}</div>
            <div>
                <input
                    type="number"
                    value={num}
                    onChange={(e) => {
                        // e.target.value = 문자형
                        // 앞에 + 붙여주면 => 숫자형으로 자동으로 형변환 시켜줌
                        // setNum(+e.target.value);

                        // 구조분해할당 연습~!!
                        const { value } = e.target;
                        setNum(+value);
                    }}
                />
            </div>
            <button
                onClick={() => {
                    // + 1을 해주는 로직을 작성해주면 된다
                    // !!! action 객체를 store로 던져주는 역할 = dispatch !!!!!
                    /*
                    dispatch({
                        type: PLUS_ONE,
                    });
                    */
                    // dispatch 안에는 반드시 객체만 들어가야 되지 않나??
                    // => plusOne()의 리턴값을 객체로 해주었기때문에 결국 객체값이다
                    // 그럼 action value 값 필요없음~~
                    // dispatch(plusOne());

                    // num을 payload값으로 넘겨주기
                    dispatch(plusN(num));
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    //dispatch(minusOne());
                    dispatch(minusN(num));
                }}
            >
                -
            </button>
        </>
    );
}
export default App;
