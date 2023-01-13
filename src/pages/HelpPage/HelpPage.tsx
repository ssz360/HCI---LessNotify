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
                <IonLabel>How this application helps me?</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                This application helps you by providing the different tools for
                managing the other applications notifications, you can turn off
                the notifications of the selected applications or define some of
                your contacts and groups like your families and best friend as
                priorities so the application declines all the notifications but
                the ones from the defined contact or groups.
              </div>
            </IonAccordion>
            <IonAccordion value="second">
              <IonItem slot="header" color="light">
                <IonLabel>What does Turn off section do?</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                In this section you can define some striction on selected
                application and ignoring their notification for the desired time
                and days. For example you can turn of the notification of
                Whatsapp for Thursdays and Fridays between 8:00-17:00.
              </div>
            </IonAccordion>
            <IonAccordion value="third">
              <IonItem slot="header" color="light">
                <IonLabel>What does Prioritizing section do?</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                In this page you can select notifications of which contacts of
                which applications have the priority to pass the filtration. All
                other notifications will be ignored.
              </div>
            </IonAccordion>
            <IonAccordion value="forth">
              <IonItem slot="header" color="light">
                <IonLabel>What does Content Filtering section do?</IonLabel>
              </IonItem>
              <div className="ion-padding" slot="content">
                When you need to dismiss all the notifications but the ones that
                include some important words or phrases you use this part. The
                application will scan the content of the notifications and let
                them pass the filtration if the have one of the keywords and
                dismiss them otherwise.
              </div>
            </IonAccordion>
          </IonAccordionGroup>
        </IonContent>
      </IonPage>
    </>
  );
};

export default HelpPage;
