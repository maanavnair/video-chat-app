import React, { useState } from 'react'
import { useSocket } from '../context/SocketProvider';

const LobbyScreen = () => {

    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");

    const socket = useSocket();

    const handleSubmit = (e) => {
        e.preventDefault();
        socket.emit('room:join', {email, room});
    }

  return (
    <div>
        <h1>Lobby</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input 
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='room'>Room Number</label>
            <input 
                type='text'
                id='room'
                value={room}
                onChange={(e) => setRoom(e.target.value)}
            />
            <button>Join</button>
        </form>
    </div>
  )
}

export default LobbyScreen