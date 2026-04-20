import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle } from "@ionic/react";


const Feed: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonButtons>
                <IonMenuButton></IonMenuButton>
                <IonTitle>Feed</IonTitle>
            </IonButtons>
        </IonHeader>
        <IonContent className="ion-padding">
            <h1>Feed</h1>
        </IonContent>
    </IonPage>
  )
};

export default Feed;