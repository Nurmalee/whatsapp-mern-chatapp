import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core'
import BackspaceIcon from '@material-ui/icons/Backspace'
import db from '../config/firebase'

const SideBarRoom = ({roomname, id}) => {

    const [seed, setSeed] = useState(0)

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 9000 ))
    }, [])

    const deleteRoom = () => {
        db.collection('chat-rooms').doc(id).delete()
    }

    return (
        <SingleRoom draggable={true}>

            <Avatar src={`https://avatars.dicebear.com/api/micah/${seed}.svg`} />

            <RoomDetails>
                <h2>{roomname} <BackspaceIcon onClick={() => deleteRoom(id)} /> </h2>
                <p>Last Message...</p>
            </RoomDetails>
            
        </SingleRoom>
    )
}

export default SideBarRoom

const SingleRoom = styled.div`
    display: flex;
    align-items: center;
    padding: 0 20px;
    padding-right: 0;
    cursor: pointer;

    &:hover {
        background-color: #ededed;
       
        .MuiSvgIcon-root {
            visibility: visible;
        }
    }
`

const RoomDetails = styled.div`
    padding: 18px 0;
    margin-left: 15px; 
    font-weight: 300;
    flex: 1;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);

    > h2 {
        font-size: 14px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 10px;

        > .MuiSvgIcon-root {
            font-size: 20px;
            color: grey;
            visibility: hidden;
            transition: 500ms ease-in-out;
        }
    }

    > p {
        font-size: 12px;
    }
`
