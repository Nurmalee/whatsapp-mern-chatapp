import styled from 'styled-components'
import { DonutLarge, Chat, MoreVert, Search } from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core';
import SideBarRoom from './SideBarRoom'
import my_pics from '../resources/images/Nurudeen.jpg'

const SideBar = () => {
    return (
        <SideBarContainer>
            <SideBarHeader>
                <Avatar src={my_pics} />

                <SideBarHeaderRight>

                    <IconButton>
                        <DonutLarge />
                    </IconButton>

                    <IconButton>
                        <Chat />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>

                </SideBarHeaderRight>
            </SideBarHeader>

            <SideBarBody>
                <SideBarInput>
                    <Search />
                    <input type="text" placeholder="Search or start a new chat" />
                </SideBarInput>

                <SideBarRooms>
                    <SideBarRoom />
                    <SideBarRoom />
                    <SideBarRoom />
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
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #dadbd3;
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
    flex: 1;
    /* height: 450px; */
    /* overflow-y: scroll; */
`