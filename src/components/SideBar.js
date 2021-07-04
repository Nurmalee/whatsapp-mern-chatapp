import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { DonutLarge, MoreHoriz, Search, AddOutlined } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'
import SideBarRoom from './SideBarRoom'
import RoomSkeleton from './RoomSkeleton'
import db from '../config/firebase'
import { useStateContext } from '../AppContext/context'


// const demoRooms = [
//     {
//         id: 1234,
//         name: "Boys Room",
//     },
//     {
//         id: 5678,
//         name: "Girls Room",
//     }
// ]

const SideBar = () => {
    const {currentUser, signOut} = useStateContext()
    const [loading, setLoading] = useState(true)
    const [initialRooms, setInitialRooms] = useState([])
    const [chatRooms, setChatRooms] = useState([])
    const [pendingRoom, setPendingRoom] = useState('')

    useEffect(() => {
        setLoading(true)
        const subscribe = db.collection('chat-rooms').orderBy('name').onSnapshot(snapshot => {
            const documents = snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }))
            documents.length > 0 && setLoading(false)
            setInitialRooms(documents)
            setChatRooms(documents)
        })

        return () => subscribe()
    }, [])

    const handleRoomSearch = (e) => {
        const roomname = e.target.value
        setPendingRoom(e.target.value)

        if(initialRooms){
            const filteredRooms = initialRooms.filter(room => 
                room.data.name.toLowerCase().includes(roomname.toLowerCase()) ? room : null
            )
            setChatRooms(filteredRooms)
        }
    }

    const addRoom = (e) => {
        e.preventDefault()

        const suffix = ['Room', 'Hub', 'Chat', 'ChatRoom', 'Square', 'Clique', 'Crew']
        const randomSuffix = suffix[Math.floor(Math.random() * suffix.length)]

        const newRoom = pendingRoom.charAt(0).toUpperCase() + pendingRoom.slice(1)
       
        if(pendingRoom && pendingRoom.length > 3 && pendingRoom.length <= 15){
            db.collection('chat-rooms').add({
                // name: `${newRoom} Room`
                name: newRoom + " " + randomSuffix
            })
        } else {
            setChatRooms(initialRooms)
        }

        setPendingRoom('')
    }

    return (
        <SideBarContainer>
            <SideBarHeader>
                <Avatar src={currentUser?.photoURL} />

                <SideBarHeaderRight>

                    <IconButton>
                        <DonutLarge onClick={signOut} />
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
                    <form onSubmit={addRoom}>
                        <input type="text" onChange={handleRoomSearch} value={pendingRoom} placeholder="Search or start a new chat" />
                    </form>

                    {(pendingRoom.length >= 1 && pendingRoom.length < 4) ? <span>If adding room, room name must be more than 4 letters</span> : null}

                    {pendingRoom.length >= 15 ? <span>If adding room, room name must be less than 12 letters</span> : null}
                </SideBarInput>

                <SideBarRooms>
                    {
                        (!loading && chatRooms.length < 0) && <p>Add a new group to start chatting</p>
                    }
                    {
                        chatRooms.map(room => <SideBarRoom key={room.id} id={room.id} roomname={room.data.name} />)
                    }
                    {
                        loading && [1,2,3,4,5, 7,8,9,10,11,12].map(n => <RoomSkeleton key={n} id={n} />)
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
    position: relative;

    > .MuiSvgIcon-root {
        font-size: 20px;
        color: grey;
    }

    > form {
        flex: 1;

        > input {
            font-family: 'Roboto', sans-serif;
            font-weight: 100;
            width: 100%;
            border-radius: 20px;
            padding: 1px 10px;
            padding-left: 15px;
            color: grey;
            font-size: 16px;
            border: none;
            outline: none;
        }
    }        

    > span {
        position: absolute;
        font-size: 9px;
        top: 36px;
        left: 2px;
        z-index: 20;
    }
`

const SideBarRooms = styled.div`
    background-color: white;
    position: absolute;
    top: 57px;
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

    > p {
        z-index: 20
    }
`