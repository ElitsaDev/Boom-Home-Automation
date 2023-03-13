import { useEffect, useState } from 'react';
import { Container, Typography } from "@mui/material";
import styles from "./Time.module.scss";
import classNames from "classnames";

export default function Time() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return (
        <div className={classNames(styles["time-wrapper"])}>
            <Container maxWidth="xl">
                <Typography className={styles.header} >
                    Time
                </Typography>
                <Typography className={styles.time} >
                {`${date.getHours()}:${date.getMinutes()}`}
                </Typography>
            </Container>
        </div>
    );
}