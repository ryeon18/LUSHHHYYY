import React, { Component } from 'react';
import './BannerWrap.scss';

class bannerWrap extends Component {
  render() {
    return (
      <article className="bannerWrap">
        <div className="banner1">
          <h2>아보카도를 피부에 양보하세요</h2>
          <img src="./images/main/banner/middle/banner01.jpg" />
        </div>
        <div className="banner2">
          <img src="./images/main/banner/middle/banner02.jpg" />
        </div>
        <div className="banner3">
          <img src="./images/main/banner/middle/banner03.jpg" />
        </div>
        <div className="banner4">
          <img src="./images/main/banner/middle/banner04.jpg" />
        </div>
      </article>
    );
  }
}

export default bannerWrap;
