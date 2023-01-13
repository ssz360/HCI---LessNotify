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
  IonTextarea,
  useIonAlert,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import {
  informationCircle,
  star,
  chevronBackOutline,
  trashOutline,
  addCircleOutline,
} from "ionicons/icons";
import { createBrowserHistory } from "history";
import "./AddKeywordsPage.css";
import { useState } from "react";
import { getDatabase, saveData } from "../../globalVariebles/storage";
import { useIonRouter } from "@ionic/react";
import Menu from "../../components/Menu";

const AddKeywords: React.FC = () => {
  const history = createBrowserHistory();

  const [key, setKey] = useState();

  const [presentAlert] = useIonAlert();
  const router = useIonRouter();

  function onAdd(e: any) {
    e.preventDefault();

    if (!key) {
      presentAlert({
        header: "Error",
        subHeader: "the Keyword is empty",
        message: "You must enter a keyword.",
        buttons: ["OK"],
      });
      return;
    }
    presentAlert({
      header: "Warning",
      subHeader: "The notifications would be effected",
      message: "Are you sure you want to add this keyword?",
      buttons: [
        {
          text: "Yes",
          handler: () => {
            const database = getDatabase();
            database.keywords.push(key);
            saveData(database);
            router.push("/");
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
            <IonTitle>Add New Keyword</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonTitle class="ion-text-start">The New Keyword:</IonTitle>
          <br />
          <br />
          <IonItem>
            <IonTextarea
              placeholder="New Keyword ..."
              onIonChange={(e) => setKey(e.target.value as any)}
              value={key}
            ></IonTextarea>
          </IonItem>
        </IonContent>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <IonFooter>
          <IonItem>
            <div slot="end">
              <IonButton
                routerLink="/"
                size="default"
                className="plr-10"
                onClick={onAdd}
              >
                Add
              </IonButton>
            </div>
          </IonItem>
        </IonFooter>
      </IonPage>
    </>
  );
};
export default AddKeywords;
