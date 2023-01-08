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

const AddKeywords: React.FC = () => {
  const history = createBrowserHistory();

  const [key, setKey] = useState();

  const [presentAlert] = useIonAlert();

  function onAdd(e:any) {
    if (!key) {
      presentAlert({
        header: "Error",
        subHeader: "the Keyword is empty",
        message: "You must enter a keyword.",
        buttons: ["OK"],
      });
      e.preventDefault();
      return;
    }
    const database = getDatabase();
    database.keywords.push(key);
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
          </IonItem>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonTitle class="ion-text-start">Add New Keyword:</IonTitle>
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
            <IonButton routerLink="/" size="default" className="plr-10" onClick={onAdd}>
              Add
            </IonButton>
          </div>
        </IonItem>
      </IonFooter>
    </IonPage>
  );
};
export default AddKeywords;
