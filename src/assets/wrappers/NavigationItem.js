import styled from 'styled-components'

const Wrapper = styled.section`
  .NavigationItem {
        margin: 10px 0;
        box-sizing: border-box;
        display: block;
        width: 100%;
    }

    .NavigationItem a {
        color: #8F5C2C;
        text-decoration: none;
        width: 100%;
        box-sizing: border-box;
        display: block;
    }

    .NavigationItem a:hover, .NavigationItem a:active, .NavigationItem a.active {
    color: #4084C8;
}

@media (min-width: 500px) {
    .NavigationItem {
        margin: 0;
        box-sizing: border-box;
        display: flex;
        height: 100%;
        width: auto; 
        align-items: center;
    }
    .NavigationItem a {
        color: white;
        text-decoration: none;
        height: 100%;
        padding: 16px 10px;
        border-bottom: 4px solid transparent;
        box-sizing: border-box;
        display: block;
    }
    .NavigationItem a:hover, .NavigationItem a:active, .NavigationItem a.active {
        background-color: #8F5C23;
        border-bottom: 4px solid #4084C8;
        color: white;
    }
}
`

export default Wrapper
