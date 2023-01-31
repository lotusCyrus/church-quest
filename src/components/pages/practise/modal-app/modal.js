import './modal.css'
export default function modal({children, handleClose,  isModalColor}) {
  return (
        <div className="modal-backdrop">
     <div className="modal" style={{color:isModalColor ?"red":"" }}>
        {children}
      </div>
   </div>
  )
}
