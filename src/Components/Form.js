import React from 'react';

const Form = ({ func, setName, setPhone, setEmail, setHobbies }) => {
    // console.log(func);
    return (
        <div>
            {/* <!-- The button to open modal --> */}
            {/* <label htmlFor="form-modal" className="btn modal-button">open modal</label> */}

            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="form-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="form-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <div className="card flex-shrink-0 w-11/12 pl-4">
                    <div className="card-body p-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="John Doe" onChange={(e) => setName(e.target.value)} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="tel" placeholder="254-854-2525" onChange={(e) => setPhone(e.target.value)} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="example@domain.com" onChange={(e) => setEmail(e.target.value)} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Hobbies</span>
                            </label>
                            <input type="text" placeholder="Travelling, eating, gardening etc." onChange={(e) => setHobbies(e.target.value.split(","))} className="input input-bordered" />
                        </div>
                        <div className="modal-action">
                            <label htmlFor="form-modal" onClick={func} className="btn">Save</label>
                    </div>
                </div>
            </div>
        </div>
            </div >
        </div >
    );
};

export default Form;