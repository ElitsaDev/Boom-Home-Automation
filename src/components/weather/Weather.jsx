import * as React from 'react';
import { Container, Grid, Typography } from "@mui/material";
import styles from "./Weather.module.scss";
import classNames from "classnames";

export default function Weather({
    degrees,
    type = "sunny",
}) {
    return (
        <div className={classNames(styles["weather-wrapper"])}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={6}>
                        <img src={`images/${type}` +".svg"}
                            alt="weather image"
                            className={styles.image}
                    />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className={styles.header} >
                            Weather
                        </Typography>
                        <Typography className={styles.degrees} >
                            {degrees}&deg;
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

