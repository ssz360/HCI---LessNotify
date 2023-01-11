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
  IonMenuButton,
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
import { useEffect, useState } from "react";
import { getDatabase, saveData } from "../../globalVariebles/storage";
import { useParams } from "react-router";
import Menu from "../../components/Menu";

const RepeatPage: React.FC = () => {
  const history = createBrowserHistory();

  const [days, daysSetter] = useState<any>([]);

  const [tag, setTag] = useState("");
  const [app, setApp] = useState("");

  const params: any = useParams();

  let database: any;
  //path="/repeat/:app/:tag"
  useEffect(() => {
    let tag = params.tag;
    let app = params.app;
    setTag(params.tag);
    setApp(params.app);

    database = getDatabase();

    let data = database.repeat.default;
    if (database.repeat[app] && database.repeat[app][tag]) {
      data = Object.assign({}, database.repeat[app][tag]);
    } else {
      if (!database.repeat[app]) {
        database.repeat[app] = {};
      }
      database.repeat[app][tag] = { ...database.repeat.default };
      saveData(database);
    }

    daysSetter(data);
  }, [params]);

  function onToggleChange(e: any) {
    let name = e.target.computedName.replace("Every ", "");
    const el = days.find((x: any) => x.name === name);
    el.value = e.target.checked;

    daysSetter([...days]);
  }

  function onDone() {
    database.repeat[app][tag] = days;
    saveData(database);
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
                    e.preventDefault();
                    history.goBack();
                  }}
                  icon={chevronBackOutline}
                  slot="start"
                ></IonIcon>
              </IonButtons>
              <IonTitle>Select the repitition</IonTitle>
            </IonItem>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonText>
            Select the repetition of time for {tag}{" "}
            {app === "turn-off" ? "" : "in " + app}
          </IonText>
          <br />
          <br />
          <IonList>
            {days.map((day: any) => {
              return (
                <IonItem key={day.name}>
                  <IonLabel>Every {day.name}</IonLabel>
                  <IonToggle
                    slot="end"
                    checked={day.value}
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
                  routerLink="/"
                  size="default"
                  className="plr-10"
                  onClick={(e) => {
                    onDone();
                  }}
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

export default RepeatPage;
