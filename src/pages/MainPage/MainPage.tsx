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
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import { helpOutline } from "ionicons/icons";
import { useEffect } from "react";
import Menu from "../../components/Menu";
import { loadData } from "../../globalVariebles/storage";

import "./MainPage.css";

const MainPage: React.FC = () => {
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Menu />
      <IonPage id="main">
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
            <IonText>You can turn the features on by using the toggles</IonText>
            <br />
            <br />
            <br />
          </IonCol>
          <IonRow>
            <IonCol size="10">
              <IonButton routerLink="/turn-off" expand="block" size="large">
                Turn Off
              </IonButton>
            </IonCol>
            <IonCol size="2">
              <IonToggle
                className="mt-10px"
                enableOnOffLabels={true}
              ></IonToggle>
            </IonCol>
            <br />
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton routerLink="/prioritizing" expand="block" size="large">
                Prioritizing
              </IonButton>
            </IonCol>
            <IonCol size="2">
              <IonToggle
                className="mt-10px"
                enableOnOffLabels={true}
              ></IonToggle>
            </IonCol>
            <br />
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                routerLink="/filter-content"
                expand="block"
                size="large"
              >
                Content Filtering
              </IonButton>
            </IonCol>
            <IonCol size="2">
              <IonToggle
                className="mt-10px"
                enableOnOffLabels={true}
              ></IonToggle>
            </IonCol>
            <br />
          </IonRow>
        </IonGrid>
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton routerLink="/help">
            <IonIcon icon={helpOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonPage>
    </>
  );
};

export default MainPage;
