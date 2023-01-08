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

import "./PrioritizingPage.css";
import { useEffect, useState } from "react";
import { getDatabase } from "../../globalVariebles/storage";

const PrioritizingPage: React.FC = () => {
  const history = createBrowserHistory();

  const [applications, setApplications] = useState<any>([]);

  useEffect(() => {
    setApplications(getDatabase().turnoff.applications as any);
  }, []);

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
            <IonTitle>Prioritize Notifications</IonTitle>
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
          {applications.map((app: any) => {
            return (
              <IonItem key={app.id} routerLink="/priority-listPage" detail={true}>
                <IonLabel>
                  <IonLabel>{app.name}</IonLabel>
                </IonLabel>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PrioritizingPage;
