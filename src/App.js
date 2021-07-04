import styled from 'styled-components'
import SideBar from './components/SideBar'
import ChatBox from './components/ChatBox'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <AppContainer>

      <AppBody>
        <Router>
          <SideBar />
          <Switch>
            {/* <Route path='/'>
              <ChatBox />
            </Route> */}
            <Route path='/rooms/:roomId' component={ChatBox} />
          </Switch>
        </Router>
      </AppBody>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.main`
  display: grid;
  place-items: center;
`

const AppBody = styled.div`
  display: flex;
  width: 100vw;
  min-width: 800px;
  height: 100vh;
  min-height: 550px;
  background-color: #ededed;
  box-shadow: -1px 4px 15px -6px rgba(0, 0, 0, 0.75);
`
