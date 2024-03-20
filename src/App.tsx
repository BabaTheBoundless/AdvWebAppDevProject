import { Redirect, Route, Link } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { logoGithub, logoPlaystation, square, basketball, calendarNumber } from 'ionicons/icons';
import Calendar from './pages/Calendar';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import EventChange from './pages/EventChange';

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
/*import Calendar from 'react-calendar';r*/



function redirectURL() {
  window.location.href="https://github.com/BabaTheBoundless/AdvWebAppDevProject";

}

setupIonicReact();
//replaced <Calendar /> with <Tab3 /> and changed it back and now it works but only until you refresh the page 
const App: React.FC = () => (
  
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/calendar" >
      
            <Calendar />
          </Route>
          <Route exact path="/eventchange">
            <EventChange />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/tab4">
            <Tab4 />
          </Route>
          <Route exact path="/">
            <Redirect to="/calendar" />
          </Route>
          
        </IonRouterOutlet>
        <IonTabBar slot="bottom">

          <IonTabButton tab="calendar" href="/calendar">
            <IonIcon aria-hidden="true" icon={calendarNumber} />
            <IonLabel>Calendar</IonLabel>
          </IonTabButton>

          <IonTabButton tab="eventchange" href="/eventchange">
            <IonIcon aria-hidden="true" icon={basketball} />
            <IonLabel>Create Event</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>

          <IonTabButton tab="github" onClick={redirectURL}>
            <IonIcon aria-hidden="true" icon={logoGithub} />
            <IonLabel>Github</IonLabel>
          </IonTabButton>

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>

);

export default App;
