import React, { useState, useEffect, useContext} from "react";
import {store} from "./stateManegement/store";
import { activeChatAction, userDetailAction } from "./stateManegement/actions";
import {SendTestSocket} from "./socketService"
import { activeChatState } from "./stateManegement/reducers";


const SimpleMessage = (props) => {
    const [name, SetName]= useState("");

    const [showMessage, setShowMessage] = useState(false);

    const {dispatch} = useContext(store);

    const onsubmit = (e) => {
        e.preventDefault();
        dispatch({type: userDetailAction, payload: name})
        setShowMessage(true);
    };
    return (
        <>
            {!showMessage ? (
                <div>
                <h3>Hello, Please enter your name </h3>
                <form onSubmit={onsubmit}>
                    <input value = {name} onChange = {e => SetName(e.target.value)}/>
                    <button type = "submit">submit</button>
                </form>
                </div>
            ) : (
                <MssegeInterface />
            )}
        </>
    );
};

export default SimpleMessage;

const MssegeInterface = (props) => {
    const [name, setName]= useState("");
    const [messages, SetMessages] = useState([]);
    const [message, SetMessage] = useState("");
    const [reciever, setReciever] = useState("");

    const {
        state: {userDetail, activeChat},
        dispatch,
    } = useContext(store);

    useEffect(() => {
        if(name != userDetail) {
            setName(userDetail);
        }
        if(activeChat){
            SetMessages([...messages, activeChat]);
            dispatch({type: activeChatAction, payload: null});
        }
    }, [userDetail, activeChat]);

const submit = e => {
    e.preventDefault();
    let data = {
        sender: name,
        reciever,
        message
    };
    SetMessages([...messages, data]);
    SendTestSocket(data);
    console.log(data);
};

    return(
        <div>
        <h2>hello {name} </h2>
        <form onSubmit={submit}>
            <input 
                value={reciever} 
                placeholder="enter receiver name"
                onChange={e => setReciever(e.target.value)}
            ></input>
            <br />
            <textarea 
                value={message} 
                placeholder="enter message"
                onChange={e => SetMessage(e.target.value)}
            ></textarea>
             <button type="submit">send</button>
         </form>
         <br />
         { messages.length < 1 ? (
            <div>No messages</div>
         ) : (
            messages.map((item, index) => {
                return(
                    <div key = {index}>
                        <b>{item.message}</b>
                        <br />
                        <small>{item.sender}</small>
                        <hr/>
                    </div>
                )
            })
        )
        }
        </div>
    );
};