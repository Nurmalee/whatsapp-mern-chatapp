import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SideBar from './components/SideBar'
import ChatBox from './components/ChatBox'
import SignIn from './components/SignIn'
import { useStateContext } from './AppContext/context'

const App = () => {
  
  const {currentUser} = useStateContext()

  if(!currentUser){
    return (
      <AppContainer>
        <SignIn />
      </AppContainer>
    )
  }

  return (
    <AppContainer>
        <AppBody>
          <Router>
            <SideBar />
            <Switch>
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
  height: 100vh;
  min-height: 550px;
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
