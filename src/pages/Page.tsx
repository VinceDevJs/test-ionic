import { useEffect, useState } from 'react';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import useFCM from '../hooks/useFCM';

const Page: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const { messages, fcmToken } = useFCM();

  useEffect(() => {
    if (fcmToken) {
        setToken(fcmToken);
        console.log("TOKEN =>", fcmToken);
    }
  }, [fcmToken]);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window && messages.length > 0) {
      const lastNotif = messages[0];

      const title = lastNotif.notification?.title || '';
      const body = lastNotif.notification?.body || '';
      const image = lastNotif.notification?.image || '';

      new Notification(
        title,
        {
          body: body,
          icon: image
        }
      );
    }
  }, [messages]);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IONIC test</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <ExploreContainer token={token} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
