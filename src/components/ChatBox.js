import styled from 'styled-components'
import { AttachFile, MoreHoriz, Search, VideocamOutlined, PhoneOutlined } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core';
import my_pics from '../resources/images/Nurudeen.jpg'
import ChatBody from './ChatBody';

const ChatBox = () => {
    return (
        <ChatBoxContainer>
            <ChatBoxHeader>

                <Avatar src={my_pics} />

                <ActiveChatRoom>
                    <h2>Room Name</h2>
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

            <ChatBody />
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
