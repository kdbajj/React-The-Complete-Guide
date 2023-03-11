import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({children, handleClose}) {
  return ReactDOM.createPortal((
    <div className="modal-backdrop">
        <div className="modal" style={{
          border: "4px solid",
           borderColor:"#111",
           textAlign: "center" 
           }}>
          {/* instead of writing everything in component
          we just write it in main file          
          children are elements of main component*/}
            {/* <h2>10% Off coupon Code!</h2>
            <p>Use our code at the checkout</p> */}
          {children}
          <button onClick={handleClose}>Close</button>
        </div>
    </div>
  ), document.body)
}
