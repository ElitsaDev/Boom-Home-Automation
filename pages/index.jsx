import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Container, Grid, Box } from "@mui/material";
import { Fragment } from "react";
import rooms from '../data/rooms.json';
import cards from '../data/cards.json';

import Navigation from '../src/components/navigation/Navigation';
import Header from "../src/components/header/Header";
import Weather from "../src/components/weather/Weather";
import Time from "../src/components/time/Time";
import User from "../src/components/user/User";
import Thermostat from "../src/components/thermostat/Thermostat";
import Cameras from "../src/components/cameras/Cameras";
import Energy from "../src/components/energy/Energy";
import Rooms from "../src/components/rooms/Rooms";
import Scenes from "../src/components/scenes/Scenes";

import Devices from '../src/components/devices/Devices';

import classNames from "classnames";
import styles from "./Dashboard.module.scss";

export default function Index() {
  const data = [
    { temperature: 25, hour: 12 },
    { temperature: 13, hour: 13 },
    { temperature: 14, hour: 14 },
    { temperature: 15, hour: 15 },
    { temperature: 15, hour: 16 },
    { temperature: 10, hour: 17 },
  ]

  const dataEnergy = [
    { energy: 25, hour: 12 },
    { energy: 13, hour: 13 },
    { energy: 14, hour: 14 },
    { energy: 15, hour: 15 },
    { energy: 15, hour: 16 },
    { energy: 10, hour: 17 },
  ]
  return (

    <div className={classNames(styles.wrapper)}>
     <Devices />
      {/* <Container className={classNames(styles.container)} maxWidth="xl">
         
        <Grid container spacing={5}>
          <Navigation />
          <Grid item xs={12}>
            <Header left={<User />}
              right={<Fragment>
                <Weather />
                <Time />
              </Fragment>}
            />
          </Grid>
          <Box
            sx={{
              display: 'grid',
              rowGap: 15,
              columnGap: 3,
              gridTemplateColumns: 'repeat(2, 1fr)',
              margin: 'auto',
              marginLeft: 30,
            }}
          >
            <Thermostat data={data} />
            <Scenes cards={Object.values(cards)} />
            <Cameras />
            <Energy data={dataEnergy} />

          </Box>
          <Grid item xs={12} sx={{ marginLeft: 30 }}>

          </Grid>
          <Rooms rooms={Object.values(rooms)} />
        </Grid>
      </Container> */}
    </div>
  );
}
