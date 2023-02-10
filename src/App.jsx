import { useSelector } from 'react-redux';
import './App.css';

function App() {
    // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다
    // useSelector(콜백함수) 사용(redux hook)

    // state는 중앙저장소의 state를 말한다!!
    const data = useSelector((state) => {
        // return state;
        return state.counter;
    });
    console.log(data);
    /*
        return state ->
        data = counter : {number:0}, users: {userId:123}
        date.counter = {number:0}
        date.counter.number = 0

        return state.counter ->
        data = {number:0}
    */
    return <div>Redux!</div>;
}

export default App;
