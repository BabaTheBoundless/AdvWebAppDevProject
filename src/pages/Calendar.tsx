import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';


import './Calendar.css';
import Calendar from 'react-calendar';



type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyApp() {
  const [value, setValue] = useState<Value>(new Date());

  useEffect(() => {
    return () => {
      setValue(new Date())
    };
  }, []);

  const handleDateChange = (newValue: Value) => {
    setValue(newValue);

  };

  return (
    <IonPage>
    
      <IonContent>
        <Calendar onChange={handleDateChange} value={value} />
      </IonContent>
    </IonPage>
  );
}
export default MyApp;