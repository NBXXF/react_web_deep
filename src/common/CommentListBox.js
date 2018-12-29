/**
 * @author youxuan  E-mail:xuanyouwu@163.com
 * @Description
 * @Company Beijing dsb
 */
import React, {Component} from 'react';


class CommentListBox extends Component {
    render() {
        return <div>{this.props.list.map((item) => {
            return <div style={{backgroundColor:'#f2f2f2'}}>{item}</div>;
        })}</div>
    }
}

export {CommentListBox as default}