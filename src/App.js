import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {

  return (

      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
                  
          <Route path="/dialogs" 
            render={ () => <DialogsContainer store={props.store} state={props.state.dialogsPage}  />} />
          <Route path="/profile" 
              render={() => <Profile store={props.store} />} />

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    
  );
}

export default App;
