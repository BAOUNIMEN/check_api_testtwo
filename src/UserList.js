import React, { useEffect, useState } from 'react'
import axios from 'axios';
const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('https://jsonplaceholder.typicode.com/users')
                console.log(res);
                setUsers(res.data)
            }

            catch (error) {
                console.log(error)
            }
        };
        fetchUsers();
        setLoading(false);
    }, []);
    return (
        <div>
            {
                loading ? (
                    <h1>loading...</h1>
                ) : (
                    users.map((el) => (
                        <div style={{ border: '1px solid black' }}>
                            {/* <li key={post.id}>{post.name}</li> */}
                            <h3>{el.name}</h3>
                            <p>{el.email}</p>
                            <p>{el.address.street}</p>
                        </div>
                    ))
                )
            }


        </div>
    )
}

export default UserList