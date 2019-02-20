import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentBox from './common/CommentBox';
import ComponentListBox from './common/CommentListBox';
import StateComponent from './common/StateComponent';

class App extends Component {
    onSubmitFunc(event) {
        event.preventDefault();//去掉默认要做的事情
        var name = this.refs.nameInput.value;
        var age = this.refs.ageInput.value;
        alert("准备提交了....name:" + name + "   age:" + age);
    }

    constructor(props) {
        super(props);
        window.document.addEventListener('message', function (e) {
            const message = e.data
            console.log(message);
            alert("收到 原生的消息message:" + JSON.stringify(message));
        });
        //alert("cookie22222:" + document.cookie)
    }

    render() {
        return (
            <div className="App">
                <div style={{
                    padding: 40,
                    color: '#6cf',
                }} onClick={() => {
                    alert('yes');
                }}>test
                </div>
                <ComponentBox name="张三"/>
                <ComponentBox name="李四"/>
                <ComponentListBox list={["苹果", '华为', "三星", "oppo", "小米"]}/>
                <StateComponent/>

                <form onSubmit={this.onSubmitFunc.bind(this)}>
                    <div><input placeholder="name" ref="nameInput"/></div>
                    <div><input placeholder="age" ref="ageInput"/></div>
                    <button type="submit">提交</button>
                </form>
            </div>
        );
    }
}

export default App;
