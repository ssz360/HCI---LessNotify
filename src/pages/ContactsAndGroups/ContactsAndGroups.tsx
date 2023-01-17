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
  IonText,
  useIonAlert,
  useIonRouter,
} from "@ionic/react";
import { IonHeader, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import { createBrowserHistory } from "history";
import { chevronBackOutline, text } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import Menu from "../../components/Menu";
import { getDatabase, saveData } from "../../globalVariebles/storage";

//interface ContainerProps { }

let selected: Array<any> = [];
const ContactsAndGroups: React.FC = () => {
  const history = createBrowserHistory();
  const location = useLocation();

  const [contactsGroups, setContactsGroups] = useState<any>([]);
  const [presentAlert] = useIonAlert();
  const router = useIonRouter();

  const [tag, setTag] = useState("");

  const params: any = useParams();

  useEffect(() => {
    setTag(params.tag);
  }, [params]);

  useEffect(() => {
    const data = getDatabase();
    setContactsGroups(data.contacts.all);
  }, [location]);

  function handleChange(ev: Event) {
    const data = getDatabase();

    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setContactsGroups(
      data.contacts.all.filter((d: any) => d.toLowerCase().indexOf(query) > -1)
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
      message: "Are you sure you want to Add these contacts/groups to priority list?",
      buttons: [
        {
          text: "Yes",
          handler: () => {
            const data = getDatabase();

            for (let el of selected) {
              if (!data.contacts["priorityList"][tag].includes(el)) {
                data.contacts["priorityList"][tag].push(el);
              }
            }
            saveData(data);
            selected = [];
            // router.push("/");
            history.goBack();
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

  function onSetTime() {
    if (selected.length === 0) {
      presentAlert({
        header: "Error",
        message: "At least one contact/group must be selected?",
        buttons: ["Ok"],
      });
    } else {
      router.push("/settime/" + tag + "/The selected contacts or groups");
    }
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
          <IonSearchbar
            showClearButton="always"
            placeholder="Search"
            onIonChange={(ev) => handleChange(ev)}
          ></IonSearchbar>

          <IonText>
            Select contacts and groups for <strong>{tag}</strong>
          </IonText>

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
                  onClick={() => {
                    onSetTime();
                  }}
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
    </>
  );
};

export default ContactsAndGroups;
