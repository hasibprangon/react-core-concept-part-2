import React, { useState } from 'react';

const Team = () => {

    const [player, setPlayer] = useState(11)

    const handleAddPlayer = () => {
        const newPlayer = player + 1;
        setPlayer(newPlayer);
    };

    const handleRemovePlayer = () => {
        setPlayer(player - 1)
    }

    const teamStyle = {
        border: '1px solid aqua',
        margin: '15px',
        padding: '15px',
        borderRadius: '10px'
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {player}</h3>
            <button onClick={handleAddPlayer}>Add player</button>
            <button onClick={handleRemovePlayer}>Remove player</button>
        </div>
    );
};

export default Team;