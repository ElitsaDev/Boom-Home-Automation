import { Container, Grid, Avatar, Typography } from "@mui/material";
import styles from "./User.module.scss";
import classNames from "classnames";

export default function User({
    avatar = '/images/avatar.png',
    name = 'Jhone Doe',
    size,
    headingSize, 
    hasWelcome = false
}) {
    return (
        <div className={classNames(styles["user-container"])}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={6}>
                        <Avatar style={{ width: size, height: size }}>
                            <img src={avatar}
                                alt="avatar"
                                className={styles.image}
                                style={{ width: "100%", height: "100%" }}
                            />
                        </Avatar>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography className={styles.userName} variant={headingSize}>
                            {hasWelcome && "Welcome back,"}
                            {name}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}