import React, { useEffect, useState } from "react";
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonList, IonItem, IonLabel, IonCard, IonCardTitle, IonButton, IonIcon, IonGrid, IonCardContent, IonCardSubtitle, IonCardHeader, IonCol, IonRow, IonSearchbar, IonToolbar } from "@ionic/react";
import { chatboxEllipsesOutline, shareOutline, thumbsUp, thumbsUpOutline } from "ionicons/icons";


const Search: React.FC = () => {

  const games = [
    {name: 'Pokemon Yellow'},
    {name: 'Mega man X '},
    {name: 'The legend of zelda'},
    {name: 'Pacman  '},
    {name: 'Super Mario World  '},
    {name: 'Bomberman'},
  ]

  const [searchText, setSearchText] = useState('');
    const [filtered, setFilteredGames] = useState(games);

    useEffect(() => {
        const debounce = setTimeout(() => {
            const filteredGames = games.filter(game =>
                game.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredGames(filteredGames);
        }, 400);

        return () => clearTimeout(debounce);
    },[searchText]);



  return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton></IonMenuButton>
                    <IonTitle>
                        Search
                    </IonTitle>
                </IonButtons>
            </IonToolbar>
        </IonHeader>

        <IonContent className='ion-padding'>

            <IonSearchbar
                placeholder="Search for games..."
                value={searchText}
                debounce={0}
                onIonInput={e => setSearchText(e.detail.value!)}
            />

            <IonList>
                                {filtered.map(( item, index) => (
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

export default Search;