import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BioPage from './pages/about.js';
import BurgerProject from './components/burgerproject';
import WowProject from './components/wowproject';
import PasswordProject from './components/pwgenproject';
import WeatherProject from './components/weatherproject';
import ScheduleProject from './components/scheduleproject';
import CryptoProject from './components/cryptoproject';

const Main = () => (
  <Switch>
    <Route exact path="/" component={BioPage} />
    <Route exact path="/raidbuilder" component={WowProject} />
    <Route exact path="/burger" component={BurgerProject} />
    <Route exact path="/password" component={PasswordProject} />
    <Route exact path="/weather" component={WeatherProject} />
    <Route exact path="/scheduler" component={ScheduleProject} />
    <Route exact path="/crypto" component={CryptoProject} />
  </Switch>
)

export default Main;