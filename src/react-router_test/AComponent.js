/**
 * @author youxuan  E-mail:xuanyouwu@163.com
 * @Description
 * @Company Beijing dsb
 */
import React, {Component} from 'react';
import { Router, Route, Switch } from "react-router";

export default class AComponent extends Component {
    render() {
        return <Switch location={"/"} className={'item'}>跳转到B</Switch>;
    }
}