import { Fragment } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from "../src/components/header/Header";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import Time from "../src/components/time/Time";
import Navigation from "../src/components/navigation/Navigation";
import Thermostat from "../src/components/thermostat/Thermostat";
import ActionAreaCard from "../src/components/card/Card";
import Cameras from "../src/components/cameras/Cameras";
import Energy from "../src/components/energy/Energy";
export default function Index() {
/*  const data = [
    { temperature: 25, hour: 12 },
    { temperature: 13, hour: 13 },
    { temperature: 14, hour: 14 },
    { temperature: 15, hour: 15 },
    { temperature: 15, hour: 16 },
    { temperature: 10, hour: 17 },
]*/

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
    {/* <Header left={<User />}
            right={<Fragment>
                      <Weather />
                      <Time />
                  </Fragment>} 
    /> */}
     {/* <Navigation />  */}
     {/* <Thermostat data={data} />  */}
     {/* <ActionAreaCard /> */}
     <Energy data={data}/>
    </>
  );
}
