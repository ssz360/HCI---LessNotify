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
  useIonAlert,
  useIonRouter,
} from "@ionic/react";
import { informationCircle, star, chevronBackOutline } from "ionicons/icons";
import { createBrowserHistory } from "history";

import "./SetTimePage.css";
import { useEffect, useState } from "react";
import { getDatabase, saveData } from "../../globalVariebles/storage";

const SetTimePage: React.FC = () => {
  const history = createBrowserHistory();

  const [from, fromSetter] = useState("2023-01-05T12:46:00+01:00");
  const [to, toSetter] = useState("2023-01-05T12:46:00+01:00");
  const [presentAlert] = useIonAlert();
  const router = useIonRouter();

  useEffect(() => {
    let data = getDatabase().setTime;
    fromSetter(data.from);
    toSetter(data.to);
  }, []);

  function goBack(e: any) {
    e.preventDefault();
    history.goBack();
  }

  function onToChange(e: any) {
    toSetter(e.target.value);
  }
  function onFromChange(e: any) {
    fromSetter(e.target.value);
  }

  function onDone() {

    presentAlert({
      header: "Warning",
      message: "Are you sure?",
      buttons: [
        {
          text: "Yes",
          handler: () => {
           
            let database = getDatabase();
            database.setTime.from = from;
            database.setTime.to = to;
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
            <IonTitle>Add Time</IonTitle>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <br />
        <br />
        <IonItem>
          <IonLabel>From :</IonLabel>
          <IonDatetime
            presentation="time"
            value={from}
            onIonChange={(e) => {
              onFromChange(e);
            }}
          ></IonDatetime>
        </IonItem>
        <IonItem>
          <br />
          <IonLabel>To :</IonLabel>
          <IonDatetime
            presentation="time"
            value={to}
            onIonChange={(e) => {
              onToChange(e);
            }}
          ></IonDatetime>
        </IonItem>
        <br />
        <br />
        <IonItem routerLink="/repeat" button detail={true}>
          <IonLabel>Repeat</IonLabel>
        </IonItem>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonItem>
            <div slot="end">
              <IonButton
                onClick={() => onDone()}
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
