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
  useIonAlert,
  useIonRouter,
} from "@ionic/react";
import { informationCircle, star, chevronBackOutline } from "ionicons/icons";
import { createBrowserHistory } from "history";
import { _database, saveData, getDatabase } from "../../globalVariebles/storage";

import "./TurnOffPage.css";
import { useEffect, useState } from "react";

const TurnOffPage: React.FC = () => {
  const history = createBrowserHistory();

  const [applications, setApplications] = useState<any>([]);

  const [presentAlert] = useIonAlert();
  const router = useIonRouter();
  
  useEffect(() => {
    setApplications(getDatabase().turnoff.applications as any);
  }, []);

  function onToggleChange(e: any) {
    const el = applications.find((x: any) => x.name === e.target.computedName);
    el.isSelected = e.target.checked;

    setApplications([...applications]);
  }

  function goBack(e: any) {
    e.preventDefault();
    history.goBack();
  }

  function onDone(){

    presentAlert({
      header: "Warning",
      message: "Are you sure?",
      buttons: [
        {
          text: "Yes",
          handler: () => {
          
            _database.turnoff.applications = applications;
            saveData();

            router.push("/");
          },
        },
        "Cancel",
      ],
    });

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
            <IonTitle>Turn Off Notifications</IonTitle>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <br />
        <br />
        <h2>Select Applications</h2>
        <IonText>
          The selected applications’ notifications would be effected after
          applying the action
        </IonText>
        <br />
        <br />
        <IonList>
          {applications.map((app: any) => {
            return (
              <IonItem key={app.id}>
                <IonLabel>{app.name}</IonLabel>
                <IonToggle
                  slot="end"
                  checked={app.isSelected}
                  onIonChange={(e: any) => onToggleChange(e)}
                ></IonToggle>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonItem>
            <div slot="end">
              <IonButton
                routerLink="/settime"
                size="default"
                className="plr-10"
              >
                Set Time
              </IonButton>
              <IonButton
                onClick={(e) => {
                  onDone();
                }}
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

export default TurnOffPage;
