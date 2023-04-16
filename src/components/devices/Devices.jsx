
import CardComponent from "../card/Card";
import styles from "./Devices.module.scss";

import { Grid, Paper } from "@mui/material";

export default function Devices({ devices }) {

    const variant = {
        on: 'on',
        off: 'off',
        offline: 'offline'
    };

    return (
        <div className={styles['devices-wrapper']}>
            <Grid container gap={1}>
                {Array.from(devices[0]).map(device => (
                    <Grid item xs={4} key={device.id} className={styles.item} >
                        {(device.id == 1) &&
                            <CardComponent iconUrl={device.iconUrl} title={'on'} variant={variant.on} />
                        }
                        {(device.id == (devices[0].length)) &&
                            <CardComponent iconUrl={device.iconUrl} title={'offline'} variant={variant.offline} />
                        }
                        {(device.id > 1 && device.id < (devices[0].length)) &&
                            <CardComponent iconUrl={device.iconUrl} title={'off'} variant={variant.off} />
                        }

                    </Grid>
                ))}

            </Grid>
        </div>
    );
}