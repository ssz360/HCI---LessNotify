import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonIcon,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import { createBrowserHistory } from "history";
import Menu from "../../components/Menu";

const HelpPage: React.FC = () => {
  const history = createBrowserHistory();

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
              <IonTitle>FAQ</IonTitle>
            </IonItem>
          </IonToolbar>
        </IonHeader>
        <IonContent></IonContent>
      </IonPage>
    </>
  );
};

export default HelpPage;
