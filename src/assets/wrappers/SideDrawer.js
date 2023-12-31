import styled from 'styled-components'

const Wrapper = styled.section`
  .SideDrawer {
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 1s ease-out;
}

@media (min-width: 500px) {
    .SideDrawer {
        display: none;
    }
}

.Open {
    transform: translateX(0);
}

.Close {
    transform: translateX(-100%);
}
`

export default Wrapper
