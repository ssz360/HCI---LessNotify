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
} from "@ionic/react";

import "./MainPage.css"

const MainPage: React.FC = () => {
  return (
    <IonPage>
      <IonGrid className="text-center mt-10">
        <IonRow>
          <IonCol>
            <h1>LessNotification</h1>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <h3>Less notification, More concentration</h3>
          </IonCol>
        </IonRow>
        <IonCol>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </IonCol>
        <IonRow>
          <IonCol>
          <IonButton expand="block" size="large">Turn Off</IonButton>
          <br />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
          <IonButton expand="block" size="large">Prioritizing</IonButton>
          <br />
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
          <IonButton expand="block" size="large">Content Filtering</IonButton>
          <br />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonPage>
  );
};

export default MainPage;
