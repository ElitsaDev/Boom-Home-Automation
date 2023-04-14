import * as React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import rooms from '../../data/rooms.json';

import Navigation from '../../src/components/navigation/Navigation';
import Header from "../../src/components/header/Header";
import Weather from "../../src/components/weather/Weather";
import Time from "../../src/components/time/Time";
import User from "../../src/components/user/User";
import Thermostat from "../../src/components/thermostat/Thermostat";
import Cameras from "../../src/components/cameras/Cameras";
import Energy from "../../src/components/energy/Energy";
import Rooms from "../../src/components/rooms/Rooms";

export default function Dashboard() {
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
            <Navigation />
            <Header left={<User />}
                right={<Fragment>
                    <Weather />
                    <Time />
                </Fragment>}
            />

            <Thermostat data={data} />
            <Cameras />
            <Energy data={data} />
            <Rooms rooms={Object.values(rooms)} />
        </>
    );

}