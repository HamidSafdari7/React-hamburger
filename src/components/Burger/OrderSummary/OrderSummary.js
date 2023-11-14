

const OrderSummary = ({ ingredients, closeModal, confirmOrder, price }) => {

    const ingredientSummary = Object.keys(ingredients).map(igKey => {

        return (
            <li key={igKey}>
                <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {ingredients[igKey]}
            </li>
        );
    })

    return (
        <div>
            <h3>Your Order</h3>
            <p>A delecious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <button onClick={closeModal} className="btn btn-danger">CANCEL</button>
            <button onClick={confirmOrder} className="btn">CONTINUE</button>
        </div>
    )
}

export default OrderSummary
