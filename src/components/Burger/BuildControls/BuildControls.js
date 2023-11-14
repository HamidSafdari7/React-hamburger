import Wrapper from "../../../assets/wrappers/BuildControls"
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const BuildControls = ({ ingredientAdded, ingredientRemoved, disabled, price, purchasable, clicked }) => {
    return (
        <Wrapper>
            <div className='BuildControls'>
                <p>Current Price: <strong>{price.toFixed(2)}</strong></p>
                {controls.map(ctrl => (
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        added={() => ingredientAdded(ctrl.type)}
                        removed={() => ingredientRemoved(ctrl.type)}
                        disabled={disabled[ctrl.type]}
                    />
                ))}
                <button onClick={clicked} className="OrderButton" disabled={!purchasable}>ORDER NOW</button>
            </div>

        </Wrapper>
    )
}

export default BuildControls
