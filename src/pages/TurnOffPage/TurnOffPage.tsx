import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
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
import { saveData, getDatabase } from "../../globalVariebles/storage";

import "./TurnOffPage.css";
import { useEffect, useState } from "react";
import Menu from "../../components/Menu";

const TurnOffPage: React.FC = () => {
  const history = createBrowserHistory();

  const [applications, setApplications] = useState<any>([]);

  const [presentAlert] = useIonAlert();
  const router = useIonRouter();

  let db: any = {};

  useEffect(() => {
    db = getDatabase();
    setApplications(db.applications as any);
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

  function onDone() {
    presentAlert({
      header: "Warning",
      message: "Are you sure?",
      buttons: [
        {
          text: "Yes",
          handler: () => {
            const database = getDatabase();
            database.applications = applications;
            saveData(database);

            router.push("/");
          },
        },
        "Cancel",
      ],
    });
  }
  return (
    <>
      <Menu />
      <IonPage id="main">
        <IonHeader>
          <IonToolbar>
            <IonItem className="no-border">
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
                <IonIcon
                  onClick={(e) => {
                    goBack(e);
                  }}
                  icon={chevronBackOutline}
                  slot="start"
                ></IonIcon>
              </IonButtons>
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
                  routerLink="/settime/turn-off/Selected Applications"
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
    </>
  );
};

export default TurnOffPage;
