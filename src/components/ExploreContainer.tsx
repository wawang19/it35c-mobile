import './ExploreContainer.css';
import { useState } from 'react';
import { IonButton, IonAlert } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  return (
    <div id="container">
      <IonButton onClick={() => setIsAlertOpen(true)}>Click Me</IonButton>
      <IonAlert
        isOpen={isAlertOpen}
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={[{ text: 'OK', handler: () => setIsAlertOpen(false) }]}
        onDidDismiss={() => setIsAlertOpen(false)}
      />
    </div>
  );
};

export default ExploreContainer;
