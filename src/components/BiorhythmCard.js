import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
} from '@ionic/react';
import React from 'react';
import dayjs from 'dayjs';
import { calculateBiorhythms, calculateBiorhythmSeries } from '../calculations';
import BiorhythmChart from './BiorhythmChart';
import './BiorhythmCard.css';

const formatDate = (isoString) => {
  return dayjs(isoString).format('MMM D YYYY');
};

const BiorhythmCard = ({ birthDate, targetDate }) => {
  const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
  const data = calculateBiorhythmSeries(birthDate, startDate, 31).map(
    (item) => ({ ...item, date: formatDate(item.date) })
  );

  const { physical, emotional, intellectual } = calculateBiorhythms(
    birthDate,
    targetDate
  );

  return (
    <IonCard className="biorhythm-card ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <BiorhythmChart data={data} />
        <p className="physical">Physical: {physical.toFixed(4)}</p>
        <p className="emotional">Emotional: {emotional.toFixed(4)}</p>
        <p className="intellectual">Intellectual: {intellectual.toFixed(4)}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default BiorhythmCard;
