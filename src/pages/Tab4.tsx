import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';


const Tab4: React.FC = () => {
  
  return (
    <IonPage>
      <IonHeader>

      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 4 page" />
      </IonContent>
    </IonPage>
   
  );
};


export default Tab4;
