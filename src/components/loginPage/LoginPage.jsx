import * as React from 'react';
import { Container, Paper, Link, Typography } from "@mui/material";
import styles from "./LoginPage.module.scss";
import classNames from "classnames";
import Login from '../login/Login';

export default function LoginPage() {
    return (
        <>
            <div className={classNames(styles.wrapper)}>
                <Container className={classNames(styles.container)} maxWidth="xl">
                    <Paper className={classNames(styles.paper)}>
                        <Login />

                    </Paper>
                </Container>
            </div>
            <Typography className={classNames(styles.text)}>
                Don’t have an account? 
                <span>
                    <Link href="pages/login/index.jsx"> Register today!</Link>
                </span>
            </Typography>
        </>
    );
}