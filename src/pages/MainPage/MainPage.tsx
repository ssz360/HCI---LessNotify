import {
  IonBadge,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonNote,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
  useIonRouter,
  useIonToast,
} from "@ionic/react";
import { helpOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import { getDatabase, loadData, saveData } from "../../globalVariebles/storage";

import "./MainPage.css";

const MainPage: React.FC = () => {
  useEffect(() => {
    loadData();

    const data = getDatabase();
    setTurnOff(data.featuresStatus.turnOffNotification);
    setPrioritizing(data.featuresStatus.Prioritizing);
    setContentFiltering(data.featuresStatus.contentFiltering);
    setShowSlider(data.showSlider);
  }, []);

  const [present] = useIonToast();

  const [turnOff, setTurnOff] = useState(false);
  const [prioritizing, setPrioritizing] = useState(false);
  const [contentFiltering, setContentFiltering] = useState(false);
  const [showSlider, setShowSlider] = useState(false);

  function onToggle(e: any, message: string) {
    const data = getDatabase();
    const val = e.detail.checked;
    if (message.includes("Turn Off")) {
      data.featuresStatus.turnOffNotification = val;
    } else if (message.includes("Prioritizing")) {
      data.featuresStatus.Prioritizing = val;
    } else {
      data.featuresStatus.contentFiltering = val;
    }
    saveData(data);

    const text = `The '${message}' is ${val ? "Turned On" : "Turned Off"}`;
    present({
      message: text,
      duration: 1500,
      position: "bottom",
    });
  }

  function onHideSlider() {
    setShowSlider(false);
    const data = getDatabase();
    data.showSlider = false;
    saveData(data);
  }

  const router = useIonRouter();

  function renderSlider() {
    return (
      <IonSlides pager={true}>
        <IonSlide>
          <div className="slider-container">
            <img
              src="images/notification.png"
              className="slider-img logo"
              alt="logo"
            ></img>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>What is LessNotify?</h2>
            <p className="text-left">
              <b>LessNotify</b> is an application that enables you the
              management of your notifications in a way that reduce their
              destructive disturbing effects.
            </p>
          </div>
        </IonSlide>
        <IonSlide>
          <div className="slider-container">
            <img src="images/focus.svg" className="slider-img" alt="logo"></img>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>You want to be more focused?</h2>
            <p className="text-left">
              This application lets you being more focused by keeping the
              unwanted notifications away!
            </p>
          </div>
        </IonSlide>
        <IonSlide>
          <div className="slider-container">
            <img src="images/study.svg" className="slider-img" alt="logo"></img>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>You are disturb while studying?</h2>
            <p className="text-left">
              By using LessNotify just define what are the most important
              contact and groups and just notify when they message you and get
              ride of other disturbing notifications.
            </p>
          </div>
        </IonSlide>
        <IonSlide>
          <div className="slider-container">
            <img
              src="images/nature.svg"
              className="slider-img"
              alt="logo"
            ></img>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>You are afraid losing important notifications?</h2>
            <p className="text-left">
              There is no problem, you can tell LessNotify what are the
              important keywords and it will scan your notifications and if they
              contains any of those you will be notified immediately
            </p>
            <br />
            <br />
            <IonButton onClick={()=>onHideSlider()} color="warning" expand="block">
              Got it
            </IonButton>
          </div>
        </IonSlide>
      </IonSlides>
    );
  }

  function renderMainPage() {
    return (
      <IonPage id="main">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonNote>
            You can change the settings from the applications menu.
          </IonNote>
          <div className="section">
            <span className="section-title">Turn Of Notifications</span>
            <IonBadge
              color="warning"
              className="section-badge"
              onClick={() => {
                router.push("/help");
              }}
            >
              ?
            </IonBadge>
            Apply your defined striction on selected application and ignoring
            their notification for the selected time and days.
            <IonItem>
              <IonLabel>Turn On/Off</IonLabel>
              <IonToggle
                onIonChange={(e) => {
                  onToggle(e, "Turn Off Notifications");
                  setTurnOff(e.detail.checked);
                }}
                slot="end"
                checked={turnOff}
              ></IonToggle>
            </IonItem>
          </div>
          <div className="section">
            <span className="section-title">Prioritizing Notifications</span>
            <IonBadge
              color="warning"
              className="section-badge"
              onClick={() => {
                router.push("/help");
              }}
            >
              ?
            </IonBadge>
            Prioritize your notification based on the applications and contacts
            or groups
            <IonItem>
              <IonLabel>Turn On/Off</IonLabel>
              <IonToggle
                onIonChange={(e) => {
                  onToggle(e, "Prioritizing Notifications");
                  setPrioritizing(e.detail.checked);
                }}
                slot="end"
                checked={prioritizing}
              ></IonToggle>
            </IonItem>
          </div>

          <div className="section">
            <span className="section-title">Content Filtering</span>
            <IonBadge
              color="warning"
              className="section-badge"
              onClick={() => {
                router.push("/help");
              }}
            >
              ?
            </IonBadge>
            Filter the notifications based on keywords.
            <IonItem>
              <IonLabel>Turn On/Off</IonLabel>
              <IonToggle
                onIonChange={(e) => {
                  onToggle(e, "Content Filtering");
                  setContentFiltering(e.detail.checked);
                }}
                slot="end"
                checked={contentFiltering}
              ></IonToggle>
            </IonItem>
          </div>
        </IonContent>
      </IonPage>
    );
  }
  return showSlider ? renderSlider() : renderMainPage();
};

export default MainPage;
