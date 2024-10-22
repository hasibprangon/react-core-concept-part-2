import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return (
        <div>
            <h3>Users: {users.length}</h3>
        </div>
    );
};

export default Users;