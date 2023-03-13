import { Fragment } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from "../src/components/header/Header";
import User from "../src/components/user/User";
import Weather from "../src/components/weather/Weather";
import Time from "../src/components/time/Time";


export default function Index() {

  return (
    <Header left={<User />}
            right={<Fragment>
                      <Weather />
                      <Time />
                  </Fragment>} 
    />
  );
}
