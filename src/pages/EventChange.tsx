import { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonDatetime } from '@ionic/react';
import Calendar from 'react-calendar';
import './Calendar.css';

function EventChange() {
  //manage date
  const [date, setDate] = useState(new Date());
  //manage time
  const [time, setTime] = useState(''); 
  const [eventData, setEventData] = useState({
    title: '',
    description: ''
  });

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleEventCreation = () => {
    //handles event creation
    console.log('Event created:', {
      ...eventData,
      datetime: new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.split(':')[0], time.split(':')[1]).toISOString() // Combine selected date and time into a single datetime string
    });
    //gets rid of the entered form firleds
    setEventData({
      title: '',
      description: ''
    });
    //default to current date
    setDate(new Date()); 
    //default fo current time
    setTime('');
  };

  return (
    <IonPage>
      <IonHeader>

      </IonHeader>
      <IonContent>
        <Calendar
          onChange={handleDateChange}
          value={date}
        />
        <IonInput
          name="title"
          placeholder="Title"
          value={eventData.title}
          onIonChange={handleInputChange}
        />
        <IonInput
          name="description"
          placeholder="Description"
          value={eventData.description}
          onIonChange={handleInputChange}
        />
        <IonInput
          name="time"
          placeholder="Select Time"
          type="time"
          value={time}
          onIonChange={(e) => setTime(e.detail.value)}
        />
        <IonButton expand="block" onClick={handleEventCreation}>Create Event</IonButton>
      </IonContent>
    </IonPage>
  );
}

export default EventChange;
