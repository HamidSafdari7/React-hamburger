import styled from 'styled-components'

const Wrapper = styled.section`
  .BuildControl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
}

.BuildControl button {
    display: block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;
}

.BuildControl button:disabled {
    background-color: #AC9980;
    border: 1px solid #7E7365;
    color: #ccc;
    cursor: default;
}

.BuildControl button:hover:disabled {
    background-color: #AC9980;
    color: #ccc;
    cursor: not-allowed;
}

.Label {
    padding: 10px;
    font-weight: bold;
    width: 80px;
}

.BuildControl .Less {  
    background-color: #D39952;
    color: white;
}

.BuildControl .More {
    background-color: #8F5E1E;
    color: white;
}

.BuildControl .Less:hover, .BuildControl .Less:active {  
    background-color: #DAA972;
    color: white;
}

.BuildControl .More:hover,.BuildControl .More:active {
    background-color: #99703F;
    color: white;
}
`

export default Wrapper
