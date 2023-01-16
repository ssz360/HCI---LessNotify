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
  IonNote,
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
import { useLocation } from "react-router";

const TurnOffPage: React.FC = () => {
  const history = createBrowserHistory();

  const [applications, setApplications] = useState<any>([]);

  const [presentAlert] = useIonAlert();
  const router = useIonRouter();
  const location = useLocation();

  let db: any = {};

  useEffect(() => {
    db = getDatabase();
    setApplications(db.applications as any);
  }, [location]);

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
      <IonPage id="main">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Turn Off Notifications</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
          <br />
          <br />
          <h2>Set Limitations On The Applications</h2>
          <IonText>
            In this section you can limit the notifications of applications by
            selecting them then choosing the desired time and days you want to
            apply those limitations.
          </IonText>
          <br />
          <IonNote>
            The selected applications’ notifications would be effected after
            applying the action.
          </IonNote>

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
          </IonToolbar>
        </IonFooter>
      </IonPage>
    </>
  );
};

export default TurnOffPage;
