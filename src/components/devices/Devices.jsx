import { Grid } from "@mui/material";
import CardComponent from "../card/Card";
import styles from "./Devices.module.scss";



export default function Devices({ devices = [{
    title: '',
    iconUrl: '',
   } ]
}) {

    

    return (
        <div className={styles['devices-wrapper']}>
            <Grid container gap={1}>
                {Array.from(devices[0]).map(device => (
                    <Grid item xs={4} key={device.id} className={styles.item} >
                        <CardComponent iconUrl={device.iconUrl} title={device.title} variant={variant} />
                    </Grid>
                ))}

            </Grid>
        </div>
    );
}

/*

*/