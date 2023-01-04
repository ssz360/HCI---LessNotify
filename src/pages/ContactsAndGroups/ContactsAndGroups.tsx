import {
  IonButton,
  IonButtons,
  IonCheckbox,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
} from "@ionic/react";
import { IonHeader, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import { createBrowserHistory } from "history";
import { chevronBackOutline, text } from "ionicons/icons";
import { useState } from "react";

//interface ContainerProps { }

const ContactsAndGroups: React.FC = () => {
  const history = createBrowserHistory();

  //create state with searchText
  const [searchText, setSearchText] = useState("type");

  const [text, setText] = useState("initial text");

  const clickEventOnButton = () => {
    console.log(text);
  };

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
            <IonTitle>Applications</IonTitle>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar></IonSearchbar>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Shahab</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Shahab</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox slot="start"></IonCheckbox>
          <IonLabel>Shahab</IonLabel>
        </IonItem>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonItem>
            <div slot="end">
              <IonButton
                routerLink="/settime"
                size="default"
                className="plr-10"
              >
                Set Time
              </IonButton>
              <IonButton routerLink="/" size="default" className="plr-10">
                Done
              </IonButton>
            </div>
          </IonItem>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default ContactsAndGroups;
