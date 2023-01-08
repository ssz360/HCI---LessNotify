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
  IonList,
  IonMenuButton,
  IonPage,
  IonRow,
  useIonAlert,
  useIonRouter,
} from "@ionic/react";
import { IonHeader, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import { createBrowserHistory } from "history";
import { chevronBackOutline, text } from "ionicons/icons";
import { useEffect, useState } from "react";
import { getDatabase, saveData } from "../../globalVariebles/storage";

//interface ContainerProps { }

let selected: Array<any> = [];
const ContactsAndGroups: React.FC = () => {
  const history = createBrowserHistory();

  const [contactsGroups, setContactsGroups] = useState<any>([]);
  const [presentAlert] = useIonAlert();
  const router = useIonRouter();

  useEffect(() => {
    const data = getDatabase();
    setContactsGroups(data.allContacts);
  }, []);

  function handleChange(ev: Event) {
    const data = getDatabase();

    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setContactsGroups(
      data.allContacts.filter((d: any) => d.toLowerCase().indexOf(query) > -1)
    );
  }

  function onSelect(el: any) {
    if (selected.includes(el)) {
      selected.splice(selected.indexOf(el), 1);
    } else {
      selected.push(el);
    }
  }

  function saveChanges() {
    presentAlert({
      header: "Warning",
      message: "Are you sure you want to Add these contacts/groups?",
      buttons: [
        {
          text: "Yes",
          handler: () => {
            const data = getDatabase();

            for (let el of selected) {
              if (!data.selectedContacts.includes(el)) {
                data.selectedContacts.push(el);
              }
            }
            saveData();
            selected = [];
            router.push("/");
          },
        },
        "Cancel",
      ],
    });
  }

  function selectDeselectAll(selectAll: any) {
    if (selectAll) {
      selected = [];
      for (let el of contactsGroups) {
        selected.push(el);
      }
    } else {
      selected = [];
    }
    setContactsGroups([...contactsGroups]);
  }

  function shouldCheck(el: any): boolean | undefined {
    return selected.includes(el);
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
            <IonTitle>Contacts And Groups</IonTitle>
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar
          showClearButton="always"
          placeholder="Search"
          onIonChange={(ev) => handleChange(ev)}
        ></IonSearchbar>

        <IonItem>
          <IonCheckbox
            slot="start"
            onIonChange={(e) => selectDeselectAll(e.detail.checked)}
          ></IonCheckbox>
          <IonLabel>Select All</IonLabel>
        </IonItem>
        <br />
        <br />
        <IonList>
          {contactsGroups.map((el: any) => {
            return (
              <IonItem key={el}>
                <IonCheckbox
                  slot="start"
                  onIonChange={(e) => onSelect(el)}
                  checked={shouldCheck(el)}
                ></IonCheckbox>
                <IonLabel>{el}</IonLabel>
              </IonItem>
            );
          })}
        </IonList>
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
              <IonButton
                onClick={() => saveChanges()}
                size="default"
                className="plr-10"
              >
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
