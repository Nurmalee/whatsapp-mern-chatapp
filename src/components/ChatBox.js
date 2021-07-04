import styled from 'styled-components'
import { AttachFile, MoreHoriz, Search, VideocamOutlined, PhoneOutlined } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core';
import ChatBody from './ChatBody';
import ChatForm from './ChatForm'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import db, { serverTimestamp } from '../config/firebase'
import { useStateContext } from '../AppContext/context';

const ChatBox = () => {
    const {currentUser} = useStateContext()
    const {roomId} = useParams()
    const [roomName, setRoomName] = useState('')
    const [roomMessages, setRoomMessages] = useState([])

    const writeMessage = (input) => {
        db.collection('chat-rooms').doc(roomId).collection('messages').add({
            message: input,
            createdAt: serverTimestamp,
            sender: currentUser.displayName
        })
    }

    useEffect(() => {
        if(roomId){
            const subscribe = db.collection('chat-rooms').doc(roomId).collection('messages').orderBy('createdAt', 'asc').onSnapshot(snapshot => {
                const documents = snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))

                setRoomMessages(documents)
            })

            return () => subscribe()
        }
    }, [roomId])

    useEffect(() => {
        if(roomId){
            db.collection('chat-rooms').doc(roomId)?.onSnapshot(snapShot => (
                setRoomName(snapShot.data().name)
            ))
        }
    }, [roomId])


    return (
        <ChatBoxContainer>
            <ChatBoxHeader>

                <Avatar src={`https://avatars.dicebear.com/api/micah/:seed.svg`} />

                <ActiveChatRoom>
                    <h2>{roomName}</h2>
                    <p>Last Seen at ...</p>
                </ActiveChatRoom>

                <Icons>
                    <IconButton>
                        <AttachFile />
                    </IconButton>

                    <IconButton>
                        <VideocamOutlined />
                    </IconButton>

                    <IconButton>
                        <PhoneOutlined />
                    </IconButton>

                    <IconButton>
                        <Search />
                    </IconButton>

                    <IconButton>
                        <MoreHoriz />
                    </IconButton>
                </Icons>
            </ChatBoxHeader>

            <ChatBody roomMessages={roomMessages} />
            <ChatForm writeMessage={writeMessage} />
        </ChatBoxContainer>
    )
}

export default ChatBox

const ChatBoxContainer = styled.div`
    flex: 0.7;
    display: flex;
    flex-direction: column;
`

const ChatBoxHeader = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
`

const ActiveChatRoom = styled.div`
    flex: 1;
    padding: 0 20px;

    > h2 {
        font-size: 16px;
    }

    > p {
        font-size: 12px;
    }
`

const Icons = styled.div`
    
`
