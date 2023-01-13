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
import { useParams } from "react-router";
import Menu from "../../components/Menu";

const PriorityListPage: React.FC = () => {
  const history = createBrowserHistory();

  const [contacts, setContacts] = useState<any>([]);
  const [presentAlert] = useIonAlert();
  const router = useIonRouter();

  const [tag, setTag] = useState();

  const params: any = useParams();

  useEffect(() => {
    let tag = params.tag;
    setTag(params.tag);

    const database = getDatabase();

    let data = getDatabase().contacts.selectedContacts;
    if (
      database.contacts["priorityList"] &&
      database.contacts["priorityList"][tag]
    ) {
      data = [...database.contacts["priorityList"][tag]];
    } else {
      if (!database.contacts["priorityList"]) {
        database.contacts["priorityList"] = {};
      }
      database.contacts["priorityList"][tag] = [
        ...database.contacts.selectedContacts,
      ];

      saveData(database);
    }

    setContacts(data);
  }, [params]);

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
            data.contacts["priorityList"][tag as any] = contacts;
            saveData(data);
          },
        },
        "Cancel",
      ],
    });
  }

  return (
    <>
      <IonPage id="main">
        <IonHeader>
          <IonToolbar>
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
              <IonTitle>Contacts And Groups</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <br />
          <br />
          <IonText>
            Select a contact to change the timing for <strong>{tag}</strong>:
          </IonText>
          <br />
          <br />
          <IonList>
            {contacts?.map((contact: any) => {
              return (
                <IonItem
                  key={contact}
                  onClick={() => {
                    router.push("/settime/" + tag + "/" + contact);
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
        <IonButton fill="clear" routerLink={"/contacts-groups/" + tag}>
          <IonToolbar>
            <IonIcon
              icon={addCircleOutline}
              slot="start"
              size="large"
            ></IonIcon>
            <IonTitle class="ion-text-start">Add Contact</IonTitle>
          </IonToolbar>
        </IonButton>
      </IonPage>
    </>
  );
};

export default PriorityListPage;
