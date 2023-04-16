import { Grid } from "@mui/material";
import CardComponent from "../card/Card";
import styles from "./Devices.module.scss";



export default function Devices({ devices = [
    {
        title: "on",
        iconUrl: "/images/bulb.svg",
    },
    {
        title: "off",
        iconUrl: "/images/bulb.svg",
    },
    {
        title: "off",
        iconUrl: "/images/plug.svg",
    },
    {
        title: "offline",
        iconUrl: "/images/plug.svg",
    },
    {
        title: "",
        iconUrl: "/images/plus.svg",
    },
]
}) {

    const variant = {
        on: 'on',
        off: 'off',
        offline: 'offline'
    };

    return (
        <div className={styles['devices-wrapper']}>
            <Grid container gap={1}>
                {devices.map((device, index) => (
                    <Grid item xs={4} key={index} className={styles.item}>
                        <CardComponent iconUrl={device.iconUrl} title={device.title} variant={variant} />
                    </Grid>
                ))}

            </Grid>
        </div>
    );
}
