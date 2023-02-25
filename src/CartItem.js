import React from 'react';
class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 9999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }
    render() {
        const { price , title , qty } = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div className='right-block'>
                    <div style={ {fontSize: 25} }>{title}</div>
                    <div style={ {color: '#777'} }>Rs {price}</div>
                    <div style={ {color: '#777'} }>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        <img alt='increase' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/3303/3303893.png' />
                        <img alt='dcrease' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/992/992683.png' />
                        <img alt='delete' className='action-icons' src='https://cdn-icons-png.flaticon.com/128/1214/1214428.png' />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;