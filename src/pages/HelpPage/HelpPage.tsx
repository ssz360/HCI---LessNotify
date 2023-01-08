import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonIcon,
} from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import { createBrowserHistory } from "history";

const HelpPage: React.FC = () => {
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
            <IonTitle>FAQ</IonTitle>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};

export default HelpPage;
