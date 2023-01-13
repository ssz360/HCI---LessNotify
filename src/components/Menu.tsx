import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  cafeOutline,
  cafeSharp,
  funnelOutline,
  funnelSharp,
  heartOutline,
  heartSharp,
  helpCircleOutline,
  helpCircleSharp,
  helpOutline,
  helpSharp,
  homeOutline,
  homeSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from "ionicons/icons";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/home",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
  {
    title: "Turn Off",
    url: "/turn-off",
    iosIcon: cafeOutline,
    mdIcon: cafeSharp,
  },
  {
    title: "Prioritizing",
    url: "/prioritizing",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "Content Filtering",
    url: "/filter-content",
    iosIcon: funnelOutline,
    mdIcon: funnelSharp,
  },
  {
    title: "Help",
    url: "/help",
    iosIcon: helpCircleOutline,
    mdIcon: helpCircleSharp,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <div className="menu-logo">
            <img src="images/notification.png" alt="logo"></img>
          </div>
          <IonListHeader>LessNotify</IonListHeader>
          <IonNote>Less notification, More concentration</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
