import styled from 'styled-components'
import { useStateContext } from '../AppContext/context'
import './trick.css'

const ChatMessage = ({message, timestamp, sender}) => {

    const {currentUser} = useStateContext()

    return (
        <ChatMessageContainer >
            <MessageDetails className={sender !== currentUser.displayName && 'received'}>
                {message}
                <span>{sender}</span>
                <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
            </MessageDetails>
        </ChatMessageContainer>
    )
}

export default ChatMessage

const ChatMessageContainer = styled.div`
`

const MessageDetails = styled.p`
    font-size: 12px;
    border-radius: 15px;
    width: fit-content;
    padding: 10px;
    margin: 2px 0 30px 0;
    background-color: white;
    position: relative;

    > span {

        &:first-of-type{
            font-size: 9px;
            position: absolute;
            left: 0;
            top: -15px;
            margin-left: 10px;
        }

        font-size: 9px;
        margin-left: 25px;
    }

`