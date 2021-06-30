import styled from 'styled-components'
import SideBar from './components/SideBar'
import ChatBox from './components/ChatBox'

const App = () => {
  return (
    <AppContainer>
      <AppBody>
        <SideBar />
        <ChatBox />
      </AppBody>
      
    </AppContainer>
  )
}

export default App

const AppContainer = styled.main`
  display: grid;
  place-items: center;
  background-color: #dadbd3;
  min-width: 750px;
  height: 100vh;
  min-height: 600px;
`

const AppBody = styled.div`
  display: flex;
  width: 95vw;
  min-width: 700px;
  height: 90vh;
  min-height: 550px;
  background-color: #ededed;
  box-shadow: -1px 4px 15px -6px rgba(0, 0, 0, 0.75);
`
