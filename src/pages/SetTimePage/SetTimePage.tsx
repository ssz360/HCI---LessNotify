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
  IonDatetime,
} from "@ionic/react";
import { informationCircle, star, chevronBackOutline } from "ionicons/icons";
import { createBrowserHistory } from "history";

import "./SetTimePage.css";

const SetTimePage: React.FC = () => {
  const history = createBrowserHistory();

  function goBack(e: any) {
    e.preventDefault();
    history.goBack();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonItem className="no-border">
            <IonIcon
              onClick={(e) => {
                goBack(e);
              }}
              icon={chevronBackOutline}
              slot="start"
            ></IonIcon>
            <IonTitle>Add Time</IonTitle>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <br />
        <br />
        <IonItem>
          <IonLabel>From :</IonLabel>
          <IonDatetime presentation="time"></IonDatetime>
        </IonItem>
        <IonItem>
          <br />
          <IonLabel>To :</IonLabel>
          <IonDatetime presentation="time"></IonDatetime>
        </IonItem>
        <br />
        <br />
        <IonItem button detail={true}>
          <IonLabel>Repeat</IonLabel>
        </IonItem>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonItem>
            <div slot="end">
              <IonButton
                routerLink="/"
                size="default"
                className="plr-10"
              >
                Done
              </IonButton>
            </div>
          </IonItem>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default SetTimePage;
