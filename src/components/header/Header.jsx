import { Paper, Container, Grid, Typography, Avatar } from "@mui/material";
import styles from "./Header.module.scss";
import classNames from "classnames";

export default function Header({
    left,
    right,
}) {


    return (
        <div className={classNames(styles["header-wrapper"])}>
            <Container className={classNames(styles.container)} maxWidth="xl">
                <Paper className={classNames(styles.paper)}>
                        <div className="left">{left}</div>
                        <div className="right">{right}</div>
                </Paper>
            </Container>
        </div>
    );
}