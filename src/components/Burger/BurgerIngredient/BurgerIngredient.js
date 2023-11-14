import Wrapper from "../../../assets/wrappers/BurgerIngredient"


const BurgerIngredient = ({ type }) => {

    return (
        <Wrapper>

            <div>
                {type === 'bread-bottom' && (
                    <img className="img-ingredient" src={require("../../../assets/images/bottom-bread.png")} alt="bread-bottom" />
                )}

                {type === 'bread-top' && (
                    <img className="img-ingredient" src={require("../../../assets/images/top-bread.png")} alt="bread-top" />

                )}

                {type === 'meat' && (
                    <img className="img-ingredient" src={require("../../../assets/images/meat.png")} alt="meat" />

                )}

                {type === 'cheese' && (
                    <img className="img-ingredient" src={require("../../../assets/images/cheese.png")} alt="cheese" />

                )}

                {type === 'salad' && (
                    <img className="img-ingredient" src={require("../../../assets/images/salad.png")} alt="salad" />

                )}
            </div>

        </Wrapper>
    );
}

export default BurgerIngredient
