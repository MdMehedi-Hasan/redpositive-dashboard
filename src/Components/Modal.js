import React from 'react';

const Modal = () => {
    return (
        <div>
            {/* // < !--The button to open modal-- > */}
            {/* <label htmlFor="my-modal" className="btn modal-button">open modal</label> */}

            {/* // <!--Put this part before </body > tag-- > */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <p className="py-4 text-center pt-8 text-red-500">Do you want to send data to <span className='text-blue-500'>info@redpositive.in</span> ?</p>
                <div className="modal-action">
                    <label htmlFor="my-modal" className="btn">Confirm</label>
            </div>
        </div>
            </div >
        </div >
    );
};

export default Modal;