import styled from 'styled-components'
import chat_background from '../resources/images/whatsapp-chat-background.png'

const ChatBody = () => {
    return (
        <ChatBodyContainer>
            
        </ChatBodyContainer>
    )
}

export default ChatBody

const ChatBodyContainer = styled.div`
    flex: 1;
    background-image: url(${chat_background});
    background-repeat: repeat;
    background-position: center;
    /* overflow-y: scroll; */
    padding: 30px;
`
