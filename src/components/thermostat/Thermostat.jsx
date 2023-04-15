import { useState } from "react";
import styles from "./Thermostat.module.scss";
import classNames from "classnames";
import {  Paper, Button, CircularProgress, Typography, Grid } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Line, XAxis, YAxis, ComposedChart } from "recharts";

export default function Thermostat({ data }) {
    const [temperature, setTemperature] = useState(15);

    const incrementHandler = () => {
        if (temperature < 50) {
            setTemperature(temperature => temperature + 1);
        }
    };

    const decrementHandler = () => {
        if (temperature > 15) {
            setTemperature(temperature => temperature - 1);
        }
    };

    return (
        <div className={classNames(styles.container)}>
            <Typography variant="h4" className={styles.title}>Thermostat</Typography>
            <Paper className={classNames(styles.paper)}>
                <div className='circular'>
                    <Button className={classNames(styles.progressLeft)} onClick={decrementHandler} >
                        <RemoveCircleOutlineIcon style={{ color: "white" }} fontSize="large" />
                    </Button>
                    <div className={styles["temperature-text"]}>{temperature}&deg;</div>
                    <CircularProgress
                        size={433}
                        thickness={2}
                        variant="determinate"
                        value={100}
                        style={{ position: "relative", color: "rgba(0, 0, 0, 0.1)" }}
                    />
                    <CircularProgress
                        size={433}
                        thickness={2}
                        variant="determinate"
                        value={temperature}
                        style={{ position: "relative", color: "white", transform: "rotate(180deg)" }}
                    />
                    <Button className={classNames(styles.progressRight)} onClick={incrementHandler}>
                        <AddCircleOutlineIcon style={{ color: "white" }} fontSize="large" />
                    </Button>
                </div>
            </Paper>
            <div className={classNames(styles.chartContainer)}>
                <Typography className={classNames(styles["chart-text"])}>temperature graph </Typography>
                <ComposedChart width={803}  height={170}  data={data}>
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Line type="monotone" dataKey="temperature" stroke="#fff" />
                </ComposedChart>
            </div>
        </div>
    );
}
