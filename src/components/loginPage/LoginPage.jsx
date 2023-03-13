import * as React from 'react';
import { Container, Paper, Link,Grid, Typography } from "@mui/material";
import styles from "./LoginPage.module.scss";
import classNames from "classnames";
import Login from '../login/Login';

export default function LoginPage() {
    return (
        <div className={classNames(styles.wrapper)}>
            <Container className={classNames(styles.container)} maxWidth="xl">
                <Paper className={classNames(styles.paper)}>
                    <Login />
                </Paper>
            </Container>
            <Container>
            <Grid container>
              <Grid item xs>
                <Typography className={classNames(styles.text)}>
                  Don’t have an account?
                </Typography>
              </Grid>
              <Grid item>
                <Link href="pages/login/index.jsx" variant="body2">
                  Register today!
                </Link>
              </Grid>
            </Grid>
            </Container>
        </div>
    );
}