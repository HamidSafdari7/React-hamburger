import { useEffect, useState } from "react"
import Burger from "./Burger/Burger"
import BuildControls from "./Burger/BuildControls/BuildControls"
import Modal from "./UI/Modal/Modal";
import OrderSummary from "./Burger/OrderSummary/OrderSummary";
import axios from '../axios-orders';
import Spinner from "./UI/Spinner/Spinner";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
};



const BurgerBuilder = () => {

    const [ingredients, setIngredients] = useState(null);

    const [totalPrice, setTotalPrice] = useState(4);

    const [purchasable, setPurchasable] = useState(false);

    const [loading, setLoading] = useState(false);

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        axios.get('https://react-humberger-default-rtdb.firebaseio.com/ingredients.json')
            .then(response => {
                setIngredients(response.data);
            });
    }, [])

    const modalHandler = () => {

        setOpenModal(true);
    }

    const modalCloseHandler = () => {

        setOpenModal(false);
    }

    const addIngredientHandler = (type) => {

        const oldCount = ingredients[type];
        const updateCount = oldCount + 1;

        const updateIngredients = { ...ingredients };

        updateIngredients[type] = updateCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice + priceAddition;

        setTotalPrice(newPrice);

        setIngredients(updateIngredients);

        updatePurchaseState(updateIngredients);
    }



    const disabledInfo = {
        ...ingredients
    };

    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    const removeIngredientHandler = (type) => {

        const oldCount = ingredients[type];
        const updateCount = oldCount - 1;

        const updateIngredients = { ...ingredients };

        updateIngredients[type] = updateCount;

        const priceDeducation = INGREDIENT_PRICES[type];
        const oldPrice = totalPrice;
        const newPrice = oldPrice - priceDeducation;

        setTotalPrice(newPrice);

        setIngredients(updateIngredients);

        updatePurchaseState(updateIngredients);
    }


    const updatePurchaseState = (ingredients) => {

        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);

        setPurchasable(sum > 0);
    }

    const confirmOrder = () => {
        setLoading(true)
        const order = {
            ingredients: ingredients,
            price: totalPrice,
            customer: {
                name: 'Hamid Safdari',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '9174582541',
                    country: 'Iran'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                setLoading(false)
                setOpenModal(false)
            })
            .catch(error => {
                setLoading(false)
                setOpenModal(false)
            });
    }


    let burger = <Spinner />

    if (ingredients) {
        burger = (
            <div>
                <Burger ingredients={ingredients} />
                <BuildControls
                    ingredientAdded={addIngredientHandler}
                    ingredientRemoved={removeIngredientHandler}
                    disabled={disabledInfo}
                    price={totalPrice}
                    purchasable={purchasable}
                    clicked={modalHandler}
                />
            </div>
        )
    }


    return (
        <div>
            {openModal &&
                <Modal>
                    <span style={{ color: "#aaa", float: "right", fontSize: "20px", fontWeight: "bold", cursor: "pointer" }} onClick={modalCloseHandler}>
                        &times;
                    </span>
                    {loading ?
                        <Spinner />
                        :
                        <OrderSummary
                            confirmOrder={confirmOrder}
                            closeModal={modalCloseHandler}
                            ingredients={ingredients}
                            price={totalPrice}
                        />
                    }

                </Modal>
            }

            {burger}
        </div>
    )
}

export default BurgerBuilder 
