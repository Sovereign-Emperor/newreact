import './Modal.css';

function Modal() {
    return (
        <div>
            <div className="modal">
                <p className="modal_title">Are you sure?</p>
                <div className="modal_buttons">
                    <button className="btn btn_cancel">Cancel</button>
                    <button className="btn">Confirm</button>
                </div>
            </div>
            <div className="backdrop"></div>
        </div>
     );
}

export default Modal;