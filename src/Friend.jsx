import React from 'react';

const Friend = ({friend}) => {
    // console.log(friend);
    const {name, email} = friend;
    console.log(name, email);

    const friendsStyle = {
        border:'1px solid tomato',
        margin:'20px',
        padding:'20px',
        borderRadius:'10px'
    }
    return (
        <div style={friendsStyle}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    );
};

export default Friend;