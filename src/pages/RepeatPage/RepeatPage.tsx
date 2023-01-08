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
import { useEffect, useState } from "react";
import {
  getDatabase,
  saveData,
  _database,
} from "../../globalVariebles/storage";

const RepeatPage: React.FC = () => {
  const history = createBrowserHistory();

  const [days, daysSetter] = useState<any>([]);

  useEffect(() => {
    const data = getDatabase();
    daysSetter(data.repeat);
  }, []);

  function onToggleChange(e: any) {
    let name = e.target.computedName.replace("Every ", "");
    const el = days.find((x: any) => x.name === name);
    el.value = e.target.checked;

    daysSetter([...days]);
  }

  function onDone() {
    _database.repeat = days;
    saveData();
  }

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
  );
};

export default RepeatPage;
