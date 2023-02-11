import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/config/configStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // provider 안에 app 넣어주면 앱이 프로바이더 지배권 안으로 들어옴
    // store import 해주기
    // 앱 아래의 컴포넌트는 싹다 store에 접근 가능
    <Provider store={store}>
        <App />
    </Provider>
);
