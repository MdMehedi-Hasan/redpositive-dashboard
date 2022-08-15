import React from 'react';

const Form = () => {
    return (
        <div>
            {/* <!-- The button to open modal --> */}
            {/* <label for="form-modal" class="btn modal-button">open modal</label> */}

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="form-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <label for="form-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div class="card flex-shrink-0 w-full w-11/12 pl-4">
                        <div class="card-body p-0">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="John Doe" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone Number</span>
                                </label>
                                <input type="tel" placeholder="254-854-2525" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="example@domain.com" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Hobbies</span>
                                </label>
                                <input type="text" placeholder="Travelling, eating, gardening etc." class="input input-bordered" />
                            </div>
                            <div class="modal-action">
                                <label for="form-modal" class="btn">Save</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;