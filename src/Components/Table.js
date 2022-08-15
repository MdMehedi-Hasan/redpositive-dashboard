import React from 'react';
import Form from './Form';
import Modal from './Modal';

const Table = () => {
    return (
        <div className="overflow-x-auto mt-5 mr-10">
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>Hobbies</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td><button className="btn primary">Update</button></td>
                        <td><button className="btn primary">Delete</button></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                        <td>Purple</td>
                        <td><button className="btn primary">Update</button></td>
                        <td><button className="btn primary">Delete</button></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td>Red</td>
                        <td><button className="btn primary">Update</button></td>
                        <td><button className="btn primary">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            <label for="form-modal" class="btn modal-button">Add</label>
            <label for="my-modal" class="btn modal-button">Send</label>
            <Modal />
            <Form/>
        </div>
    );
};

export default Table;