import './Modal.css';

function Modal({ qry, yesact, nullact, yesaction, nullaction }) {
    return (
        <>
            <div className="modal">
                <p className="modal_title">{qry}</p>
                <div className="modal_buttons">
                    <button className="btn btn_cancel" onClick={() => {
                        nullaction() && console.log(nullact, ' button clicked')

                    }}>{nullact}</button>

                    <button className="btn" onClick={() => {
                        yesaction() && console.log(yesact, ' button clicked')

                    }}>{yesact}</button>
                </div>
            </div>
            <div className="backdrop"></div>
        </>
    );
}

export default Modal;