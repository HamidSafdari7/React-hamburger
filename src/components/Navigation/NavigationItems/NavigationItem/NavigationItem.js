import Wrapper from '../../../../assets/wrappers/NavigationItem'

const NavigationItem = ({ link, children, active }) => {
    return (
        <Wrapper>
            <li className='NavigationItem'>
                <a
                    href={link}
                    className={active ? 'active' : null}
                >
                    {children}
                </a>
            </li>
        </Wrapper>
    )
}

export default NavigationItem
