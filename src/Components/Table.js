import React, { useEffect, useState } from 'react';
import Form from './Form';
import Modal from './Modal';

const Table = () => {
    // const [order, setOrder] = useState("")
    const [results, setResults] = useState([])
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [hobbies, setHobbies] = useState([])
    const[load,setLoad] =useState("")
    const newData = {
        name: name,
        email: email,
        phone: phone,
        hobbies: hobbies
    }
    console.log(newData);
    // ================   Getting data from database  ======================= //
    useEffect(() => {
        fetch('http://localhost:2000/home')
            .then(res => res.json())
            .then(data => setResults(data))
    }, [load])
    // ================================================ //
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
                if (data) {
                    setLoad(data._id)
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div className="overflow-x-auto pr-10">

            <div className='flex  items-center gap-5'>
                <h1>Select table order</h1>
                <select className="select max-w-xs mt-4 mb-5 border border-black">
                    <option>Ascending</option>
                    <option>Descending</option>
                </select>
            </div>
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
                <tbody className='max-w-full'>
                    {results.map(result =>
                        <tr key={result?._id}>
                            <td><input type="checkbox" name="" id="" /></td>
                            <th>1</th>
                            <td>{result?.name}</td>
                            <td>{result?.phone}</td>
                            <td>{result?.email}</td>
                            <td>{result?.hobbies}</td>
                            <td><button className="btn primary">Update</button></td>
                            <td><button className="btn primary">Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <label htmlFor="form-modal" className="btn modal-button">Add</label>
            <label htmlFor="my-modal" className = "btn modal-button" > Send</label >
            <Modal />
            <Form func={postData} setName={setName} setPhone={setPhone} setEmail={setEmail} setHobbies={setHobbies} />
        </div >
    );
};

export default Table;