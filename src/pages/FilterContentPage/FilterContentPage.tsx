import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  ReactComponentOrElement,
  IonItem,
  IonIcon,
  IonText,
  IonLabel,
  IonList,
  IonToggle,
  IonFooter,
} from "@ionic/react";
import {
  informationCircle,
  star,
  chevronBackOutline,
  trashOutline,
  addCircleOutline,
} from "ionicons/icons";
import { createBrowserHistory } from "history";
import "./FilterConetentPage.css";

const FilterContent: React.FC = () => {
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
            <IonTitle>Filter By Content</IonTitle>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <br />
        <br />
        <IonText>
          If message contains the keyword from the blow list, show me the
          notification:
        </IonText>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <IonText>
          <h3>Keywords:</h3>
        </IonText>
        <br />
        <br />

        <IonList>
          <IonItem>
            <IonLabel>important</IonLabel>
            <IonIcon
              onClick={(e) => {
                e.preventDefault();
              }}
              icon={trashOutline}
              slot="end"
            ></IonIcon>
          </IonItem>
          <IonItem>
            <IonLabel>sos</IonLabel>
            <IonIcon
              onClick={(e) => {
                e.preventDefault();
              }}
              icon={trashOutline}
              slot="end"
            ></IonIcon>
          </IonItem>
          <IonItem>
            <IonLabel>HCI</IonLabel>
            <IonIcon
              onClick={(e) => {
                e.preventDefault();
              }}
              icon={trashOutline}
              slot="end"
            ></IonIcon>
          </IonItem>
          <IonItem>
            <IonLabel>help</IonLabel>
            <IonIcon
              onClick={(e) => {
                e.preventDefault();
              }}
              icon={trashOutline}
              slot="end"
            ></IonIcon>
          </IonItem>
        </IonList>
      </IonContent>
      <IonButton fill="clear" routerLink="/add-keywords">
        <IonToolbar>
          <IonIcon icon={addCircleOutline} slot="start" size="large"></IonIcon>
          <IonTitle class="ion-text-start">Add Keyword</IonTitle>
        </IonToolbar>
      </IonButton>
    </IonPage>
  );
};

export default FilterContent;
