import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from './component/Menu';
import DropMenu from './component/DropMenu';
import Search from '../../pages/Search/Search';
import PopMyPage from './component/PopMyPage';
import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isSearch: false,
      isPopMyPage: false,
    };
  }

  handlerDropdownOpen = () => {
    const { isDropdownOpen } = this.state;
    this.setState({
      isDropdownOpen: !isDropdownOpen,
    });
  };

  handelerSearch = () => {
    const { isSearch } = this.state;
    this.setState({ isSearch: !isSearch });
  };

  handlerPopMyPage = () => {
    const { isPopMyPage } = this.state;
    this.setState({
      isPopMyPage: !isPopMyPage,
    });
  };

  render() {
    const { isDropdownOpen, isSearch, isPopMyPage } = this.state;
    return (
      <header className="header">
        <nav>
          <div className="logo">
            <Link to="/main" className="logo">
              HHYYY
            </Link>
          </div>
          <Menu onMouseEnter={this.handlerDropdownOpen} />
          <div className="menuIcons">
            <ul>
              <li className="menuIconsList" onClick={this.handelerSearch}>
                <i className="fas fa-search" />
              </li>
              <li className="menuIconsList">
                <Link to="/cart" className="cartLink">
                  <i className="fas fa-shopping-bag" />
                </Link>
              </li>
              <li
                className="menuIconsList"
                onMouseEnter={this.handlerPopMyPage}
              >
                <i className="fas fa-user-circle" />
                {isPopMyPage && (
                  <PopMyPage onMouseLeave={this.handlerPopMyPage} />
                )}
              </li>
            </ul>
          </div>
        </nav>
        {isDropdownOpen && <DropMenu onMouseLeave={this.handlerDropdownOpen} />}
        {isSearch && <Search />}
      </header>
    );
  }
}

export default Header;
