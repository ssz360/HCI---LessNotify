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
import {
  informationCircle,
  star,
  chevronBackOutline,
  addCircleOutline,
} from "ionicons/icons";
import { createBrowserHistory } from "history";
import { IonFab, IonFabButton } from "@ionic/react";
import { add } from "ionicons/icons";

import "./PriorityListPage.css";

const PriorityListPage: React.FC = () => {
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
          <IonItem routerLink="/contacts-groups" detail={true}>
            <IonLabel>
              <IonLabel>Telegram</IonLabel>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/contacts-groups" detail={true}>
            <IonLabel>
              <IonLabel>Whatsapp</IonLabel>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/contacts-groups" detail={true}>
            <IonLabel>
              <IonLabel>Imo</IonLabel>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/contacts-groups" detail={true}>
            <IonLabel>
              <IonLabel>Skype</IonLabel>
            </IonLabel>
          </IonItem>
          <IonItem routerLink="/contacts-groups" detail={true}>
            <IonLabel>
              <IonLabel>Messenger</IonLabel>
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      {/* <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton routerLink="/contacts-groups">
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
          </IonFab> */}

      <IonButton fill="clear" routerLink="/contacts-groups">
        <IonToolbar>
          <IonIcon icon={addCircleOutline} slot="start" size="large"></IonIcon>
          <IonTitle class="ion-text-start">Add Contact</IonTitle>
        </IonToolbar>
      </IonButton>
    </IonPage>
  );
};

export default PriorityListPage;
