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
  import { IonFab, IonFabButton } from '@ionic/react';
import { add } from 'ionicons/icons';

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
          <IonItem detail={true}>
              <IonLabel>
                <IonLabel>Telegram</IonLabel>
              </IonLabel>
            </IonItem>
            <IonItem detail={true}>
              <IonLabel>
                <IonLabel>Whatsapp</IonLabel>
              </IonLabel>
            </IonItem>
            <IonItem detail={true}>
              <IonLabel>
                <IonLabel>Imo</IonLabel>
              </IonLabel>
            </IonItem>
            <IonItem detail={true}>
              <IonLabel>
                <IonLabel>Skype</IonLabel>
              </IonLabel>
            </IonItem>
            <IonItem detail={true}>
              <IonLabel>
                <IonLabel>Messenger</IonLabel>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
          </IonFab>
      </IonPage>
    );
  };
  
  export default PriorityListPage;
  