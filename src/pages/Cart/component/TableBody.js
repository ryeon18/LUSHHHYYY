import React, { Component } from 'react';

class TableBody extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }
  handleQuantity = e => {
    e.preventDefault();
    const { className } = e.target;
    const { quantity } = this.state;
    if (className === 'plusQuantity') {
      quantity < 10
        ? this.setState(state => {
            return { quantity: state.quantity + 1 };
          })
        : alert('10개까지만 주문할 수 있습니다');
    } else if (className === 'minusQuantity') {
      quantity > 1
        ? this.setState(state => {
            return { quantity: state.quantity - 1 };
          })
        : alert('1개부터 주문 할 수 있습니다');
    }
  };

  render() {
    const { itemData } = this.props;
    const { quantity } = this.state;
    return (
      <>
        <td>
          <span>
            <input type="checkbox" className="checkedInput"></input>
          </span>
        </td>
        <td className="productSpec">
          <img alt="productImg" src={itemData.product_image} />
          <div>
            {itemData.product_name}
            <p>{itemData.category_name}</p>
            <p>용량: {itemData.size}g</p>
          </div>
        </td>
        <td>
          <span className="countBox">
            <button
              className="minusQuantity"
              onClick={e => this.handleQuantity(e)}
            >
              -
            </button>
            <input
              type="text"
              name="count"
              className="productCount"
              value={quantity}
            />
            <button
              className="plusQuantity"
              onClick={e => this.handleQuantity(e)}
            >
              +
            </button>
          </span>
        </td>
        <td>
          <strong className="productPrice">{itemData.product_price}</strong>
        </td>
        <td>&nbsp;</td>
        <td>
          <strong className="totalPrice">
            {itemData.product_price * quantity}
          </strong>
        </td>
        {/* <td>
          <span className="deliveryFee">₩ 2,500</span>
          <span className="deliveryFee">(택배)</span>
        </td> */}
      </>
    );
  }
}

export default TableBody;
