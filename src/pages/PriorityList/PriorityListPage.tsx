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
  useIonAlert,
  useIonRouter,
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
  const [presentAlert] = useIonAlert();
  const router = useIonRouter();

  useEffect(() => {
    const data = getDatabase();
    setContacts(data.selectedContacts);
  }, []);

  function onDelete(key: any) {
    presentAlert({
      header: "Warning",
      message: "Are you sure you want to Delete the contact/group?",
      buttons: [
        {
          text: "Delete",
          handler: () => {
            const el = contacts.find((x: any) => x === key);

            contacts.splice(contacts.indexOf(el), 1);

            setContacts([...contacts]);

            const data = getDatabase();
            data.selectedContacts = contacts;
            saveData();
          },
        },
        "Cancel",
      ],
    });
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
        <IonText>Select a contact to change the timing:</IonText>
        <br />
        <br />
        <IonList>
          {contacts.map((contact: any) => {
            return (
              <IonItem
                key={contact}
                onClick={() => {
                  router.push("/settime");
                }}
              >
                <IonLabel>{contact}</IonLabel>
                <IonIcon
                  icon={trashOutline}
                  slot="end"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(contact);
                  }}
                ></IonIcon>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
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
