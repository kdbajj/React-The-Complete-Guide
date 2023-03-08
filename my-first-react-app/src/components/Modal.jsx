import './Modal.css'

export default function Modal({children, handleClose}) {
  return (
    <div className="modal-backdrop">
        <div className="modal">
          {/* instead of writing everything in component
          we just write it in main file          
          children are elements of main component*/}
            {/* <h2>10% Off coupon Code!</h2>
            <p>Use our code at the checkout</p> */}
          {children}
          <button onClick={handleClose}>Close</button>
        </div>

    </div>
  )
}
