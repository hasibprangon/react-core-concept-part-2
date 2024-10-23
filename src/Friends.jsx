import React, { useEffect, useState } from 'react';
import Friend from './Friend';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriends(data))
    },[]);

    const friendsStyle = {
        border:'1px solid tomato',
        margin:'20px',
        padding:'20px',
        borderRadius:'10px'
    }

    return (
        <div style={friendsStyle}>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;