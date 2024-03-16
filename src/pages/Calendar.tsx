import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import Card from '../components/Card'
import ExploreContainer from '../components/ExploreContainer';
import './Calendar.css';
import Calendar from 'react-calendar';



type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyApp() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default MyApp;