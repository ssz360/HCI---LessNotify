import { IonButton, IonCol, IonGrid, IonRow } from "@ionic/react";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonButton routerLink="/main-page">Main Page</IonButton>
        </IonCol>
        <IonCol>
          <IonButton routerLink="/turn-off">Turn Off Page</IonButton>
        </IonCol>
        <IonCol>
          <IonButton routerLink="/prioritizing">Prioritizing Page</IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonButton routerLink="/settime">Set Time Page</IonButton>
        </IonCol>
        <IonCol>
          <IonButton routerLink="/repeat">Repeat Page</IonButton>
        </IonCol>
        <IonCol>
          <IonButton routerLink="/filter-content">Content Filtering</IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default ExploreContainer;
