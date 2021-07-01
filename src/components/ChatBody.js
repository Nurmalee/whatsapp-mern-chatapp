import styled from 'styled-components'
import ChatMessage from './ChatMessage'
import chat_background from '../resources/images/whatsapp-chat-background.png'

const ChatBody = () => {
    return (
        <ChatBodyContainer>
            <ChatMessage message="This is the First Message HERE!!!" />
            <ChatMessage message="Whassss going on HIAA!!!" />
            <ChatMessage message="This is just a TEST Message" />
            <ChatMessage message="This is just a TEST Message" />
            <ChatMessage message="This is just a TEST Message" />
            <ChatMessage message="This is just a TEST Message" />
            <ChatMessage message="This is just a TEST Message" />
            <ChatMessage message="This is just a TEST Message" />
            <ChatMessage message="This is just a TEST Message" />
            <ChatMessage message="This is just a TEST Message" />
            <ChatMessage message="This is just a TEST Message" />
            
            
            
        </ChatBodyContainer>
    )
}

export default ChatBody

const ChatBodyContainer = styled.div`
    flex: 1;
    background-image: url(${chat_background});
    background-repeat: repeat;
    background-position: center;
    position: relative;
    overflow-y: scroll;
    padding: 30px;

    &::-webkit-scrollbar {
        width: 10px;
    }
        
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
        
    &::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        border-radius: 5px;
    }
`
