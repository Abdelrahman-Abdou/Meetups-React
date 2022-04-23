import { Route, Switch } from 'react-router-dom'
import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import FavouriteMeetups from "./pages/FavouriteMeetups";
import Layout from './components/layout/Layout';
function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <AllMeetups />
        </Route>
        <Route path='/new-meetups'>
          <NewMeetups />
        </Route>
        <Route path='/favourite-meetups'>
          <FavouriteMeetups />
        </Route>
      </Switch>

    </Layout >
  )
}

export default App;
