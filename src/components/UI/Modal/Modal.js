import Wrapper from '../../../assets/wrappers/Modal'


const Modal = ({ children }) => {
  return (
    <Wrapper>
      <div className='Modal'>
        {children}
      </div>
    </Wrapper>
  )
}

export default Modal
