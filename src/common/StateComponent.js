/**
 * @author youxuan  E-mail:xuanyouwu@163.com
 * @Description
 * @Company Beijing dsb
 */
import React, {Component} from 'react';
import $ from 'jquery';

export default class StateComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {data: {}}
    }

    componentDidMount() {
        $.ajax({
            uri: 'https://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=17611639080',
            dataType: 'json',
            type: 'GET',
            success: (res, stat) => {
                console.log("正确");
                console.log(stat);
                console.log(res);
                this.setState({
                    data: res,
                })
            },
            error: (res, stat,error) => {
                console.log("错误"+error);
                console.log(stat);
                console.log(res);
            }
        })
    }

    render() {
        return (<div>{JSON.stringify(this.state.data)}
        </div>);
    }
}