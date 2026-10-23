import './Modal.css';

function Modal({qry, yesact, nullact}) {
    return (
        <>
            <div className="modal">
                <p className="modal_title">{qry}</p>
                <div className="modal_buttons">
                    <button className="btn btn_cancel">{nullact}</button>
                    <button className="btn">{yesact}</button>
                </div>
            </div>
            <div className="backdrop"></div>
        </>
     );
}

export default Modal;