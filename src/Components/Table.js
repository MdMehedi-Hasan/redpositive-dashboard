import React, { useEffect, useState } from 'react';
import Form from './Form';
import Modal from './Modal';
import { Icon } from '@iconify/react';

const Table = () => {
    const [order, setOrder] = useState("")
    const [results, setResults] = useState([])
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [hobbies, setHobbies] = useState([])
    const [load, setLoad] = useState("")
    const newData = {
        name: name,
        email: email,
        phone: phone,
        hobbies: hobbies
    }
    // ================   Getting data from database  ======================= //
    useEffect(() => {
        fetch('http://localhost:2000/home')
            .then(res => res.json())
            .then(data => setResults(data))
    }, [load])
    // ====================  Data posted  ============================ //
    const postData = () => {
        fetch('http://localhost:2000/newdata', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                if (data?.insertedId) {
                    setLoad(data.insertedId)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    // =============================================================
    const updateData = (id) => {
        console.log(id);
    }
    // ======================  Data deleted =========================
    const deleteData = (id) => {

        fetch('http://localhost:2000/deletedData', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id}),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                if (data?.deletedCount === 1) {
                    setLoad(data.acknowledged)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
    const func = (e) => {
        console.log(e);
    }
    return (
        <div className="overflow-x-auto pr-10">

            <div className='flex  items-center gap-5'>
                <h1>Select table order</h1>
                <select onChange={(e) => setOrder(e.target.value)} className="select max-w-xs mt-4 mb-5 border border-black">
                    <option>Ascending</option>
                    <option>Descending</option>
                </select>
            </div>
            <table className="table table-zebra w-screen">
                <thead>
                    <tr>
                        <th></th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>Hobbies</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className='max-w-full'>
                    {results.map(result =>
                        <tr className='w-screen' key={result?._id}>
                            <td><input onClick={()=>func(result?._id)} type="checkbox" name="" id="" /></td>
                            <td>{results.indexOf(result) + 1}</td>
                            <td>{result?.name}</td>
                            <td>{result?.phone}</td>
                            <td>{result?.email}</td>
                            <td>{result?.hobbies.join(", ")}</td>
                            <td><button onClick={() => updateData(result?._id)} className="btn btn-warning mr-4">Update</button><button onClick={() => deleteData(result?._id)} className="btn btn-error">Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <label htmlFor="form-modal" className="btn modal-button mr-8 btn-accent"><span className='text-2xl pr-2'><Icon icon="ant-design:plus-circle-outlined" /></span>Add</label>
            <label htmlFor="my-modal" className="btn modal-button btn-accent" ><span className='text-2xl pr-2'><Icon icon="bi:send-fill" /></span> Send</label >
            <Modal />
            <Form func={postData} setName={setName} setPhone={setPhone} setEmail={setEmail} setHobbies={setHobbies} />
        </div >
    );
};

export default Table;