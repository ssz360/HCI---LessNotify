import {
  IonButton,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { helpOutline } from "ionicons/icons";
import { useEffect } from "react";
import { loadData } from "../../globalVariebles/storage";

import "./MainPage.css";

const MainPage: React.FC = () => {
  useEffect(() => {
    loadData();
  }, []);

  return (
    <IonPage>
      <IonGrid className="text-center mt-10">
        <IonRow>
          <IonCol>
            <h1>LessNotification</h1>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <h3>Less notification, More concentration</h3>
          </IonCol>
        </IonRow>
        <IonCol>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </IonCol>
        <IonRow>
          <IonCol>
            <IonButton routerLink="/turn-off" expand="block" size="large">
              Turn Off
            </IonButton>
            <br />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton routerLink="/prioritizing" expand="block" size="large">
              Prioritizing
            </IonButton>
            <br />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton routerLink="/filter-content" expand="block" size="large">
              Content Filtering
            </IonButton>
            <br />
          </IonCol>
        </IonRow>
      </IonGrid>
      <IonFab slot="fixed" vertical="bottom" horizontal="end">
        <IonFabButton routerLink="/help">
          <IonIcon icon={helpOutline}></IonIcon>
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
};

export default MainPage;
