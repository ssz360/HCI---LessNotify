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
import {
  informationCircle,
  star,
  chevronBackOutline,
  addCircleOutline,
  trashOutline,
} from "ionicons/icons";
import { createBrowserHistory } from "history";
import { IonFab, IonFabButton } from "@ionic/react";
import { add } from "ionicons/icons";

import "./PriorityListPage.css";
import { useEffect, useState } from "react";
import { getDatabase, saveData } from "../../globalVariebles/storage";

const PriorityListPage: React.FC = () => {
  const history = createBrowserHistory();

  const [contacts, setContacts] = useState<any>([]);

  useEffect(() => {
    const data = getDatabase();
    setContacts(data.selectedContacts);
  }, []);

  function onDelete(key: any) {
    const el = contacts.find((x: any) => x === key);

    contacts.splice(contacts.indexOf(el), 1);

    setContacts([...contacts]);

    const data = getDatabase();
    data.selectedContacts = contacts;
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
            <IonTitle>Selected Contacts And Groups</IonTitle>
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
          {contacts.map((contact: any) => {
            return (
              <IonItem key={contact}>
                <IonLabel>{contact}</IonLabel>
                <IonIcon
                  icon={trashOutline}
                  slot="end"
                  onClick={() => onDelete(contact)}
                ></IonIcon>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
      {/* <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton routerLink="/contacts-groups">
            <IonIcon icon={add}></IonIcon>
          </IonFabButton>
          </IonFab> */}

      <IonButton fill="clear" routerLink="/contacts-groups">
        <IonToolbar>
          <IonIcon icon={addCircleOutline} slot="start" size="large"></IonIcon>
          <IonTitle class="ion-text-start">Add Contact</IonTitle>
        </IonToolbar>
      </IonButton>
    </IonPage>
  );
};

export default PriorityListPage;
