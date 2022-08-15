import React from 'react';

const Modal = () => {
    return (
        <div>
            {/* // < !--The button to open modal-- > */}
            {/* <label for="my-modal" class="btn modal-button">open modal</label> */}

            {/* // <!--Put this part before </body > tag-- > */}
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <p class="py-4 text-center pt-8 text-red-500">Do you want to send data to <span className='text-blue-500'>info@redpositive.in</span> ?</p>
                    <div class="modal-action">
                        <label for="my-modal" class="btn">Confirm</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;