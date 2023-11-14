import Wrapper from "../../assets/wrappers/Burger"
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient"

const Burger = ({ ingredients }) => {

    let arrayIngredient = Object.keys(ingredients).map(igKey => {

        return [...Array(ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />
        })
    }).reduce((acc, currentValue) => {

        return acc.concat(currentValue);
    }, [])
    

    if (arrayIngredient.length === 0) {
        arrayIngredient = <p style={{ border: "2px solid black", backgroundColor: "white" }}>Please start adding ingredients!</p>;
    }


    return (
        <Wrapper>
            <div className='Burger'>
                <BurgerIngredient type="bread-top" />
                {arrayIngredient}
                <BurgerIngredient type="bread-bottom" />
            </div>
        </Wrapper>
    )
}

export default Burger
