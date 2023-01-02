import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MainPage from './pages/MainPage/MainPage';
import TurnOffPage from './pages/TurnOffPage/TurnOffPage';
import PrioritizingPage from './pages/PrioritizingPage/PrioritizingPage';
import SetTimePage from './pages/SetTimePage/SetTimePage'; 
import RepeatPage from './pages/RepeatPage/RepeatPage'; 

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/main-page">
          <MainPage />
        </Route>
        <Route exact path="/turn-off">
          <TurnOffPage />
        </Route>
        <Route exact path="/prioritizing">
          <PrioritizingPage />
        </Route>
        <Route exact path="/settime">
          <SetTimePage />
        </Route>
        <Route exact path="/repeat">
          <RepeatPage />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
