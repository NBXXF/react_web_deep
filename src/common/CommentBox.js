/**
 * @author youxuan  E-mail:xuanyouwu@163.com
 * @Description
 * @Company Beijing dsb
 */
import React, {Component} from 'react';


class CommentBox extends Component {
    render() {
        return <div>{this.props.name}</div>
    }
}

export {CommentBox as default}