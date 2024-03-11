import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/Card'
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'


const genCards = [1,2,3,4]


function myCalendar() {
  return (
    <div>
      <h1>Calendar; add Google calendar support</h1>
      <Calendar />
    </div>
  )
}

export default myCalendar;
