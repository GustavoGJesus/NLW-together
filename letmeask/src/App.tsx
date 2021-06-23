import { BrowserRouter, Route, Switch} from "react-router-dom";

import { Home } from '../src/pages/Home';
import { NewRoom } from "./pages/NewRoom";
import { Room } from "./pages/Room";

import {AuthContextProvider } from './context/AuthContext'


function App() {
  return(
   <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/new/rooms" component={NewRoom}/>
          <Route path="/rooms/:id" component={Room}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>

  )
};
export default App;
