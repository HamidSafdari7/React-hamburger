import Wrapper from "../../../assets/wrappers/Toolbar"
import NavigationItems from "../NavigationItems/NavigationItems"

const Toolbar = ({ openSidebarHandler }) => {
    return (
        <Wrapper>
            <header className="Toolbar">
                <div onClick={openSidebarHandler}>MENU</div>
                <nav className="DesktopOnly">
                    <NavigationItems />
                </nav>
            </header>
        </Wrapper>
    )
}

export default Toolbar
