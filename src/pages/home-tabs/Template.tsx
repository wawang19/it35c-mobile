import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle } from "@ionic/react";


const Template: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonButtons>
                <IonMenuButton></IonMenuButton>
                <IonTitle>Template</IonTitle>
            </IonButtons>
        </IonHeader>
        <IonContent className="ion-padding">
            <h1>Template</h1>
        </IonContent>
    </IonPage>
  )
};

export default Template;