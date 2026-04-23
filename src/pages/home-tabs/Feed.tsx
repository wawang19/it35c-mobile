import React from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonList, IonItem, IonLabel, IonCard, IonCardTitle, IonButton, IonIcon, IonGrid, IonCardContent, IonCardSubtitle, IonCardHeader, IonCol, IonRow, IonSearchbar } from "@ionic/react";
import { chatboxEllipsesOutline, search, shareOutline, thumbsUp, thumbsUpOutline } from "ionicons/icons";


const Feed: React.FC = () => {

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
                <IonTitle>Feed</IonTitle>
            </IonButtons>
        </IonHeader>
        <IonContent className="ion-padding">

            <IonList>
                    {games.map(( item, index) => (
                        <IonCard key={index}>
                            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                            <IonCardHeader>
                                <IonCardTitle>{item.name}</IonCardTitle>
                                <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
                            <IonGrid>
                                <IonRow>
                                    <IonCol>
                                        <IonButton fill="clear" expand ='full'>
                                            <IonIcon icon={thumbsUpOutline}></IonIcon>
                                            <IonLabel style={{ marginLeft: '5px' }}>Like</IonLabel>
                                        </IonButton>
                                    </IonCol>
                                    <IonCol>
                                        <IonButton fill="clear" expand ='full'>
                                            <IonIcon icon={chatboxEllipsesOutline}></IonIcon>
                                            <IonLabel style={{ marginLeft: '5px' }}>Comment</IonLabel>
                                        </IonButton>
                                    </IonCol>
                                    <IonCol>
                                        <IonButton fill="clear" expand ='full'>
                                            <IonIcon icon={shareOutline}></IonIcon>
                                            <IonLabel style={{ marginLeft: '5px' }}>Share</IonLabel>
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCard>
                    ))}
                </IonList>
        </IonContent>
    </IonPage>
  
  
  );
};
export default Feed;