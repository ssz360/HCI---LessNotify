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
  IonTextarea
} from "@ionic/react";
import { informationCircle, star, chevronBackOutline,trashOutline,addCircleOutline } from "ionicons/icons";
import { createBrowserHistory } from "history";
import "./AddKeywordsPage.css"



const AddKeywords: React.FC=()=>{
    const history = createBrowserHistory();
    return(

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
              <IonTitle class="ion-text-start">
              Add New Keyword:
            </IonTitle>
            <br/>
            <br/>
            <IonItem>
             <IonTextarea
            placeholder="New Keyword ..."
  
            ></IonTextarea>
            
            </IonItem>



              </IonContent>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              
              
              <IonFooter>
          
            <IonItem>
              <div slot="end">
                <IonButton routerLink="/" size="default" className="plr-10">
                  Done
                </IonButton>
              </div>
            </IonItem>
          
            </IonFooter>
              
              </IonPage>
    )
 }
    export default AddKeywords