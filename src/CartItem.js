import React from 'react';
const CartItem = (props) => {
    const { price, title, qty } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onhandleDeleteProduct } = props;
    return (
        <div className='cart-item'>
            <div className='left-block'>
                <img style={styles.image} />
            </div>
            <div className='right-block'>
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs {price}</div>
                <div style={{ color: '#777' }}>Qty: {qty}</div>
                <div className='cart-item-actions'>
                    <img
                        alt='increase'
                        className='action-icons'
                        src='https://cdn-icons-png.flaticon.com/128/3303/3303893.png'
                        onClick={() => onIncreaseQuantity(product)}
                    />
                    <img
                        alt='decrease'
                        className='action-icons'
                        src='https://cdn-icons-png.flaticon.com/128/992/992683.png'
                        onClick={() => onDecreaseQuantity(product)}
                    />
                    <img
                        alt='delete'
                        className='action-icons'
                        src='https://cdn-icons-png.flaticon.com/128/1214/1214428.png'
                        onClick={() => onhandleDeleteProduct(product.id)}
                    />

                </div>
            </div>
        </div>
    )
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