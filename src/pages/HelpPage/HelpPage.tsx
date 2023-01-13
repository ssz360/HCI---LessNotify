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
  IonAccordionGroup,
  IonAccordion,
  IonLabel,
} from "@ionic/react";
import { chevronBackOutline } from "ionicons/icons";
import { createBrowserHistory } from "history";
import Menu from "../../components/Menu";

const HelpPage: React.FC = () => {
  const history = createBrowserHistory();

  return (
    <>
      <IonPage id="main">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>FAQ</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonAccordionGroup>
            <IonAccordion value="first">
              <IonItem slot="header" color="light">
                <IonLabel>First Accordion</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                First Content
              </div>
            </IonAccordion>
            <IonAccordion value="second">
              <IonItem slot="header" color="light">
                <IonLabel>Second Accordion</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                Second Content
              </div>
            </IonAccordion>
            <IonAccordion value="third">
              <IonItem slot="header" color="light">
                <IonLabel>Third Accordion</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                Third Content
              </div>
            </IonAccordion>
          </IonAccordionGroup>
        </IonContent>
      </IonPage>
    </>
  );
};

export default HelpPage;
