import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CardComponent from '../src/components/card/Card';
import Cameras from '../src/components/cameras/Cameras';
import Energy from '../src/components/energy/Energy';
export default function Index() {
  const data = [
    { energy: 25, hour: 12 },
    { energy: 13, hour: 13 },
    { energy: 14, hour: 14 },
    { energy: 15, hour: 15 },
    { energy: 15, hour: 16 },
    { energy: 10, hour: 17 },
]
  return (
    <>
     <Energy data={data}/>
    </>
  );
}
