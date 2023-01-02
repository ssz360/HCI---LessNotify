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
  
  import "./RepeatPage.css";
  
  const RepeatPage: React.FC = () => {
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
              
            </IonItem>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
         
          <br />
          <br />
          <IonList>
            <IonItem>
              <IonLabel>Every Monday</IonLabel>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Every Tuesday</IonLabel>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Every Wednesday</IonLabel>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Every Thursday</IonLabel>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Every Friday</IonLabel>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Every Saturday</IonLabel>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Every Sunday</IonLabel>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
          </IonList>
        </IonContent>
        <IonFooter>
          <IonToolbar>
            <IonItem>
              <div slot="end">
                <IonButton size="default" className="plr-10">
                  Done
                </IonButton>
              </div>
            </IonItem>
          </IonToolbar>
        </IonFooter>
      </IonPage>
    );
  };
  
  export default RepeatPage;
  