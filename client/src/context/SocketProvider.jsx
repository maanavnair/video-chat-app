import React, { createContext, useContext } from 'react'
import { io } from 'socket.io-client'

const SocketContext = createContext(null);

export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
}

export const SocketContextProvider = ({children}) => {
    const socket = io('localhost:3000');
    return(
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
} 