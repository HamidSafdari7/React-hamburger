import Wrapper from '../../../assets/wrappers/NavigationItems'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = () => {
    return (
        <Wrapper>
            <ul className='NavigationItems'>
                <NavigationItem link="/" active>Burger Builder</NavigationItem>
                <NavigationItem link="/">Checkout</NavigationItem>
            </ul>
        </Wrapper>

    )
}

export default NavigationItems
