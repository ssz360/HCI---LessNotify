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
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import { informationCircle, star, chevronBackOutline } from "ionicons/icons";
import { createBrowserHistory } from "history";

import "./SetTimePage.css";
import { useEffect, useState } from "react";
import { getDatabase, saveData } from "../../globalVariebles/storage";
import { useParams } from "react-router";
import Menu from "../../components/Menu";

const SetTimePage: React.FC = () => {
  const history = createBrowserHistory();

  const [from, fromSetter] = useState("2023-01-05T12:46:00+01:00");
  const [to, toSetter] = useState("2023-01-05T12:46:00+01:00");
  const [presentAlert] = useIonAlert();
  const router = useIonRouter();

  const [tag, setTag] = useState("");
  const [app, setApp] = useState("");

  const params: any = useParams();
  let database: any;

  useEffect(() => {
    let tag = params.tag;
    let app = params.app;
    setTag(params.tag);
    setApp(params.app);

    database = getDatabase();

    let data = getDatabase().setTime.default;
    if (database.setTime[app] && database.setTime[app][tag]) {
      data = Object.assign({}, database.setTime[app][tag]);
    } else {
      if (!database.setTime[app]) {
        database.setTime[app] = {};
      }
      database.setTime[app][tag] = { ...database.setTime.default };

      saveData(database);
    }

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
            if (params.tag !== tag && params.app !== app) {
              return;
            }
            let database = getDatabase();
            database.setTime[app][tag].from = from;
            database.setTime[app][tag].to = to;
            saveData(database);
            // router.push("/");
            history.goBack();
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
              <IonIcon
                onClick={(e) => {
                  e.preventDefault();
                  history.goBack();
                }}
                icon={chevronBackOutline}
                slot="start"
              ></IonIcon>
            </IonButtons>
            <IonTitle>Add Time</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonText>
            Please set time for{" "}
            <strong>
              {tag} in {app === "turn-off" ? "" : app}
            </strong>
          </IonText>
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
          <IonItem
            routerLink={"/repeat/" + app + "/" + tag}
            button
            detail={true}
          >
            <IonLabel>Repeat</IonLabel>
          </IonItem>
        </IonContent>
        <IonFooter>
          <IonToolbar>
            <div slot="end">
              <IonButton
                onClick={() => onDone()}
                size="default"
                className="plr-10"
              >
                Set
              </IonButton>
            </div>
          </IonToolbar>
        </IonFooter>
      </IonPage>
    </>
  );
};

export default SetTimePage;
