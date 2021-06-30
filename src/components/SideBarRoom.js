import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { Avatar } from '@material-ui/core'
// import my_pics from '../resources/images/Nurudeen.jpg'

const SideBarRoom = () => {

    const [seed, setSeed] = useState(0)

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 9000 ))
    }, [])

    return (
        <SingleRoom draggable={true}>

            <Avatar src={`https://avatars.dicebear.com/api/micah/${seed}.svg`} />

            <RoomDetails>
                <h2>Room Name</h2>
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
    }

    > p {
        font-size: 12px;
    }
`
