import './Modal.css'

export default function Modal({children}) {
  return (
    <div className="modal-backdrop">
        <div className="modal">
          {/* instead of writing everything in component
          we just write it in main file
          
          children are elements of main component*/}
          {children}
            {/* <h2>10% Off coupon Code!</h2>
            <p>Use our code at the checkout</p> */}
        </div>

    </div>
  )
}
