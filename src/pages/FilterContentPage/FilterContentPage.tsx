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
import "./FilterConetentPage.css";
import { useEffect, useState } from "react";
import { getDatabase, saveData } from "../../globalVariebles/storage";
import Menu from "../../components/Menu";

const FilterContent: React.FC = () => {
  const history = createBrowserHistory();

  const [keywords, setKeywords] = useState<any>([]);
  const [presentAlert] = useIonAlert();

  useEffect(() => {
    const data = getDatabase();
    setKeywords(data.keywords);
  }, []);

  function onDelete(key: any) {
    presentAlert({
      header: "Warning",
      message: "Are you sure you want to Delete the filter?",
      buttons: [
        {
          text: "Delete",
          handler: () => {
            const el = keywords.find((x: any) => x === key);

            keywords.splice(keywords.indexOf(el), 1);

            setKeywords([...keywords]);

            const data = getDatabase();
            data.keywords = keywords;
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
              </IonButtons>
              <IonTitle>Filter By Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent  className="ion-padding">
          <br />
          <br />
          <IonText>
            If message contains the keyword from the blow list, show me the
            notification:
          </IonText>
          <br />
          <br />
          <IonText>
            <h3>Keywords:</h3>
          </IonText>

          <IonList>
            {keywords.map((key: any) => {
              return (
                <IonItem key={key}>
                  <IonLabel>{key}</IonLabel>
                  <IonIcon
                    icon={trashOutline}
                    slot="end"
                    onClick={() => onDelete(key)}
                  ></IonIcon>
                </IonItem>
              );
            })}
          </IonList>
        </IonContent>
        <IonButton fill="clear" routerLink="/add-keywords">
          <IonToolbar>
            <IonIcon
              icon={addCircleOutline}
              slot="start"
              size="large"
            ></IonIcon>
            <IonTitle class="ion-text-start">Add Keyword</IonTitle>
          </IonToolbar>
        </IonButton>
      </IonPage>
    </>
  );
};

export default FilterContent;
