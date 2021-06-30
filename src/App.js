import styled from 'styled-components'
import SideBar from './components/SideBar'
import ChatBox from './components/ChatBox'

const App = () => {
  return (
    <AppContainer>
        <SideBar />
        <ChatBox />
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  display: flex;
  min-width: 800px;
  height: 100vh;
  min-height: 550px;
  background-color: #ededed;
  box-shadow: -1px 4px 15px -6px rgba(0, 0, 0, 0.75);
`
