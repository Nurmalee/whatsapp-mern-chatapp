import styled from 'styled-components'

const ChatMessage = ({message, timestamp, sender}) => {
    return (
        <ChatMessageContainer className={true && `received`}>
            <span>{sender}</span>
           
            <MessageDetails>
                {message}
                <span>Thu, 12:59AM</span>
            </MessageDetails>
        </ChatMessageContainer>
    )
}

export default ChatMessage

const ChatMessageContainer = styled.div`

    .received {
        background-color: lightgreen;
    }

    > span {
        font-size: 11px;
        padding-left: 10px;
    }

`

const MessageDetails = styled.p`
    font-size: 12px;
    border-radius: 15px;
    width: fit-content;
    padding: 10px;
    margin: 2px 0 15px 0;
    background-color: white;

    > span {
        font-size: 11px;
        margin-left: 25px;
    }

`