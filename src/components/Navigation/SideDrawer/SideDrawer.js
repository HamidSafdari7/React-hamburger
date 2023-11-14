import NavigationItems from "../NavigationItems/NavigationItems"
import Wrapper from "../../../assets/wrappers/SideDrawer"


const SideDrawer = ({ openSidebar, closeSidebarHandler }) => {
    

    return (
        <Wrapper>
            <div className={openSidebar ? 'SideDrawer' : 'SideDrawer Close'}>
                <span onClick={closeSidebarHandler} style={{ color: "#aaa", float: "right", fontSize: "20px", fontWeight: "bold", cursor: "pointer" }}>
                    &times;
                </span>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Wrapper>

    )
}

export default SideDrawer
