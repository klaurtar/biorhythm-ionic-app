import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhythmCard';
import { useLocalStorage } from './hooks';

function App() {
  const [birthDate, setBirthDate] = useLocalStorage('birthdate', '');
  const [targetDate, setTargetDate] = useState(new Date().toISOString());

  const handleInputChange = (setStateName) => {
    return (e) => {
      setStateName(e.detail.value);
    };
  };
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {/* <IonItem>
          <IonLabel position="stacked">Name:</IonLabel>
          <IonInput value={name} onIonChange={handleInputChange(setName)} />
        </IonItem> */}
        {birthDate && (
          <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        )}
        <IonItem>
          <IonLabel position="fixed">Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat="MMM-DD-YYYY"
            value={birthDate}
            onIonChange={handleInputChange(setBirthDate)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Target Date:</IonLabel>
          <IonDatetime
            displayFormat="MMM-DD-YYYY"
            value={targetDate}
            onIonChange={handleInputChange(setTargetDate)}
          />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
