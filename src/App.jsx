import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// counter 리듀서에서 export한거 import해주기
// import { PLUS_ONE, MINUS_ONE } from './redux/config/modules/counter';
import { plusOne, minusOne } from './redux/config/modules/counter';

function App() {
    // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다
    // useSelector(콜백함수) 사용(redux hook)

    // state는 중앙저장소의 state를 말한다!!
    const counter = useSelector((state) => {
        // return state;
        return state.counter;
    });
    console.log('counter -> ', counter.number);
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
            <button
                onClick={() => {
                    // + 1을 해주는 로직을 작성해주면 된다
                    // action 객체를 store로 던져주는 역할 = dispatch
                    /*
                    dispatch({
                        type: PLUS_ONE,
                    });
                    */
                    // dispatch 안에는 반드시 객체만 들어가야 되지 않나??
                    // => plusOne()의 리턴값을 객체로 해주었기때문에 결국 객체값이다
                    // 그럼 action value 값 필요없음~~
                    dispatch(plusOne());
                }}
            >
                +
            </button>
            <button
                onClick={() => {
                    dispatch(minusOne());
                }}
            >
                -
            </button>
        </>
    );
}
export default App;
