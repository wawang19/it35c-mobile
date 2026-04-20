import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle } from "@ionic/react";


const Favorite: React.FC = () => {
  return (
    <IonPage>
        <IonHeader>
            <IonButtons>
                <IonMenuButton></IonMenuButton>
                <IonTitle>Favorite</IonTitle>
            </IonButtons>
        </IonHeader>
        <IonContent className="ion-padding">
            <h1>Favorite</h1>
        </IonContent>
    </IonPage>
  )
};

export default Favorite;