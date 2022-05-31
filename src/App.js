import Header from './Header';
import Pokemon from './Pokemon';
import AllPokemon from './AllPokemon';
import AddPokemon from './CreatePokemon';
import UpdatePokemon from './UpdatePokemon';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/create' component={AddPokemon} />
          <Route path='/update/:id' component={UpdatePokemon} />
          <Route path='/:id' component={Pokemon} />
          <Route path='/' component={AllPokemon} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;