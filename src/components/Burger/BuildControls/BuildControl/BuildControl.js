import Wrapper from "../../../../assets/wrappers/BuildControl"

const BuildControl = ({ label, added, removed, disabled }) => {
    return (
        <Wrapper>
            <div className='BuildControl'>
                <div className='Label'>{label}</div>
                <button className='Less' onClick={removed} disabled={disabled}>Less</button>
                <button className='More' onClick={added}>More</button>
            </div>

        </Wrapper>
    )
}

export default BuildControl
