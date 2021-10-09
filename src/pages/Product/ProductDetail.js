import React, { Component } from 'react';
import './ProductDetail.scss';

class ProductDetail extends Component {
  render() {
    return (
      <section className="productDetail">
        <article className="productInfo">
          <div className="productThumbnail">
            <img
              src="https://www.lush.co.kr/data/goods/16/03/18/174/174_detail_044.jpg"
              className="productThumbnail_img"
              alt="productThumbnail_img"
            />
          </div>
          <div className="itemInfomation">
            <header className="itemTitle">
              <h2 className="itemName">인터갈락틱</h2>
              <p className="itemTag">#배쓰밤 #환상적인우주느낌</p>
            </header>
            <div className="itemInfo">
              <p className="goodToKnow">
                Good to Know
                <img
                  src="/images/product/question.png"
                  className="questionMark"
                  alt="questionMark"
                />
              </p>
              <ul className="itemInfoList">
                <li className="itemInfoRow">
                  <span className="itemInfoDetail">판매가격</span>₩ 25,000
                </li>
                <li className="itemInfoRow">
                  <span className="itemInfoDetail">상품무게</span>50g
                </li>
                <li className="itemInfoRow">
                  <span className="itemInfoDetail">구매수량</span> 1
                </li>
              </ul>
            </div>
            <div className="itemPrice">
              <span className="howMuch">총 합계 금액</span>
              <span className="allPrice">₩ 25,000</span>
            </div>
            <div className="btnList">
              <button className="cartBtn">장바구니</button>
              <button className="buyBtn">구매하기</button>
            </div>
          </div>
        </article>
        <article className="photoReviewWrap">
          <h2 className="photoReviewText">Photo Review</h2>
          <div className="photoImg">
            <h2 className="photoImgText">포토리뷰 모아보기</h2>
          </div>
        </article>
      </section>
    );
  }
}

export default ProductDetail;
