import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

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
import FilterContent from './pages/FilterContentPage/FilterContentPage'
import AddKeywords from './pages/AddKeywordsPage/AddKeywordsPage'
import PriorityListPage from './pages/PriorityList/PriorityListPage';
import ContactsAndGroups from './pages/ContactsAndGroups/ContactsAndGroups';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <MainPage />
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
        <Route exact path="/filter-content">
           <FilterContent/>
        </Route>
        <Route exact path="/add-keywords">
          <AddKeywords/>
        </Route>
        <Route exact path="/priority-listPage">
          <PriorityListPage/>
        </Route>
        <Route exact path="/contacts-groups">
          <ContactsAndGroups/>
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
