import React, {useEffect, useContext} from "react"
import openSocket from "socket.io-client"
import { activeChatAction } from "./stateManegement/actions";
import { store } from "./stateManegement/store"

const SOCKET_URL = "https://animachat.ru:2053"
let socket;

const SocketService = () => {

    const {state: {userDetail}, dispatch} = useContext(store);


    const setupSocket = () =>{
        socket = openSocket(SOCKET_URL);
        socket.on("command", (data) => {
            console.log(data);
            if(userDetail !== data.reciever) return;
            dispatch({type:activeChatAction, payload:data});
        });
    };

    useEffect(setupSocket, [userDetail]);

    return <></>;
};

export default SocketService;

const SendSocket = (data) => {
    socket.emit("command", {
        type: data.type,
        id: data.id,
        content: data.content,
    });
};

export const SendTestSocket = (data) => {
    socket.emit("command", data);
};