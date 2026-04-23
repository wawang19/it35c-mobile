import React from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonList, IonItem, IonLabel, IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCardContent, IonGrid, IonRow, IonCol, IonButton, IonIcon } from "@ionic/react";
import { thumbsUp, thumbsUpOutline } from "ionicons/icons";


const Favorite: React.FC = () => {

  const games = [
    {name: 'Pokemon Yellow'},
    {name: 'Mega man X '},
    {name: 'The legend of zelda'},
    {name: 'Pacman  '},
    {name: 'Super Mario World  '},
    {name: 'Bomberman'},
  ]

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


            <IonList>
                {games.map((item, index) => (
                    <IonItem key={index}>
                        <IonLabel>{item.name}</IonLabel>
                    </IonItem>
                ))}
            </IonList>
           <>
      <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
      <IonCardHeader>
        <IonCardTitle>Card Title</IonCardTitle>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
       <IonGrid>  
       <IonRow>
        <IonCol>
            <IonButton fill="clear" expand="full">
            <IonIcon icon={thumbsUpOutline} ></IonIcon>
            <IonLabel style={{marginLeft:'5px'}}>comment</IonLabel>
            </IonButton>
            </IonCol>
           
            <IonCol>
      
       <IonButton fill="clear" expand="full">
            <IonIcon icon={thumbsUpOutline} ></IonIcon>
            <IonLabel style={{marginLeft:'5px'}}>comment</IonLabel>
            </IonButton>
            </IonCol>
    
        
         </IonRow>
       </IonGrid>
    </>
        </IonContent>
    </IonPage>
  )
};


export default Favorite;