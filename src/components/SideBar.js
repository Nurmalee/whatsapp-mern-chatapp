import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { DonutLarge, MoreHoriz, Search, AddOutlined } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'
import SideBarRoom from './SideBarRoom'
import my_pics from '../resources/images/Nurudeen.jpg'
import db from '../config/firebase'

const SideBar = () => {

    const [chatRooms, setChatRooms] = useState([])

    useEffect(() => {
        db.collection('chat-rooms').onSnapshot(snapshot => {
            setChatRooms(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])

    return (
        <SideBarContainer>
            <SideBarHeader>
                <Avatar src={my_pics} />

                <SideBarHeaderRight>

                    <IconButton>
                        <DonutLarge />
                    </IconButton>

                    <IconButton>
                        <AddOutlined />
                    </IconButton>

                    <IconButton>
                        <MoreHoriz />
                    </IconButton>

                </SideBarHeaderRight>
            </SideBarHeader>

            <SideBarBody>
                <SideBarInput>
                    <Search />
                    <input type="text" placeholder="Search or start a new chat" />
                </SideBarInput>

                <SideBarRooms>
                    {
                        chatRooms.map(room => <SideBarRoom key={room.id} id={room.id} roomname={room.data.name} />)
                    }
                </SideBarRooms>
            </SideBarBody>
        </SideBarContainer>
    )
}

export default SideBar


const SideBarContainer = styled.div`
    flex: 0.3;
    display: flex;
    flex-direction: column;
`

const SideBarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-right: 1px solid #dadbd3;
    background-color: #ededed;
`

const SideBarHeaderRight = styled.div`
    display: flex;
`

const SideBarBody = styled.div`
    flex: 1;
    background-color: #dadbd3;
    position: relative;
`

const SideBarInput = styled.div`
    margin: 10px;
    padding: 6px 15px;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 20px;

    > .MuiSvgIcon-root {
        font-size: 20px;
        color: grey;
    }

    > input {
        font-family: 'Roboto', sans-serif;
        font-weight: 100;
        flex: 1;
        border-radius: 20px;
        padding: 1px 10px;
        padding-left: 15px;
        color: grey;
        font-size: 16px;
        border: none;
        outline: none;
    }
`

const SideBarRooms = styled.div`
    background-color: white;
    position: absolute;
    top: 52px;
    right: 0;
    left: 0;
    bottom: 0;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 5px;
    }
        
    &::-webkit-scrollbar-track {
        background-color: white;
    }
        
    &::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        border-radius: 5px;
    }
`