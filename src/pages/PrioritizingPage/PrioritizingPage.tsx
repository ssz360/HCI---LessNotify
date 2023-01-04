import {
  IonButton,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import { informationCircle, star, chevronBackOutline } from "ionicons/icons";
import { createBrowserHistory } from "history";

import "./PrioritizingPage.css";

const PrioritizingPage: React.FC = () => {
  const history = createBrowserHistory();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem className="no-border">
            <IonIcon
              onClick={(e) => {
                e.preventDefault();
                history.goBack();
              }}
              icon={chevronBackOutline}
              slot="start"
            ></IonIcon>
            <IonTitle>Applications</IonTitle>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <br />
        <br />
        <IonText>select an application to add priority list:</IonText>
        <br />
        <br />
        <IonList>
        <IonItem routerLink="/priority-listPage" detail={true}>
            <IonLabel>
              <IonLabel>Telegram</IonLabel>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/priority-listPage" detail={true}>
            <IonLabel>
              <IonLabel>Whatsapp</IonLabel>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/priority-listPage" detail={true}>
            <IonLabel>
              <IonLabel>Imo</IonLabel>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/priority-listPage" detail={true}>
            <IonLabel>
              <IonLabel>Skype</IonLabel>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/priority-listPage" detail={true}>
            <IonLabel>
              <IonLabel>Messenger</IonLabel>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PrioritizingPage;
