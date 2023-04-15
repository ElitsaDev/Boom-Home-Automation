import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CardComponent from '../src/components/card/Card';
import Cameras from '../src/components/cameras/Cameras';
import Energy from '../src/components/energy/Energy';
import Scenes from '../src/components/scenes/Scenes';
import Rooms from '../src/components/rooms/Rooms';
import cards from '../data/cards.json';
export default function Index() {
  
  return (
    <>
     {/* <Energy data={data}/> */}
     <Scenes cards={Object.values(cards)} />
    </>
  );
}
