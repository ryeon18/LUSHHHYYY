import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './popMyPage.scss';

class PopMyPage extends Component {
  render() {
    const { onMouseLeave } = this.props;
    return (
      <ul className="myPageList" onMouseLeave={onMouseLeave}>
        <li>
          <Link to="/SignIn">로그인</Link>
        </li>
        <li>
          <Link to="/SignUp">회원가입</Link>
        </li>
      </ul>
    );
  }
}

export default PopMyPage;
