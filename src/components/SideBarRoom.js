import styled from 'styled-components'
import { Avatar } from '@material-ui/core';
import my_pics from '../resources/images/Nurudeen.jpg'

const SideBarRoom = () => {
    return (
        <SingleRoom draggable={true}>

            <Avatar src={my_pics} />

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
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    cursor: pointer;

    &:hover {
        background-color: #ededed;
    }
`

const RoomDetails = styled.div`
    padding: 0 10px;
    font-weight: 300;
    > h2 {
        font-size: 14px;
    }

    > p {
        font-size: 12px;
    }
`
