import { IonIcon } from '@ionic/react';
import { copy } from 'ionicons/icons';

import './ExploreContainer.css';

interface ContainerProps {
  token: string | null;
}

const ExploreContainer: React.FC<ContainerProps> = ({ token }) => {
  const copyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Texte copié dans le presse-papiers !');
    } catch (err) {
      console.error('Erreur lors de la copie :', err);
    }
  };

  return (
    <div id="container">
      <div>
      <p>Token:</p>

      {token ? (
        <p>
          <span><IonIcon onClick={() => copyText(token)} icon={copy} color="dark" /></span> 
            {token}
          </p>
      ) : "Token not found"}
      </div>
    </div>
  );
};

export default ExploreContainer;
