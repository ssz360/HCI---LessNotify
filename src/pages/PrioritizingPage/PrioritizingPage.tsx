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
  IonNote,
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
import Menu from "../../components/Menu";

const PrioritizingPage: React.FC = () => {
  const history = createBrowserHistory();

  const [applications, setApplications] = useState<any>([]);

  useEffect(() => {
    setApplications(getDatabase().applications as any);
  }, []);

  return (
    <>
      <IonPage id="main">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Prioritize Notifications</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <br />
          <br />
          <IonText>
            You can define the important contacts and groups of each
            application, when you this feature is enabled all of the
            notifications of the applications are ignored but the ones from the
            specified contact and groups.
          </IonText>
          <IonNote>Select an application to set the priority list.</IonNote>
          <br />
          <br />
          <IonList>
            {applications.map((app: any) => {
              return (
                <IonItem
                  key={app.id}
                  routerLink={"/priority-listPage/" + app.name}
                  detail={true}
                >
                  <IonLabel>
                    <IonLabel>{app.name}</IonLabel>
                  </IonLabel>
                </IonItem>
              );
            })}
          </IonList>
        </IonContent>
      </IonPage>
    </>
  );
};

export default PrioritizingPage;
