import styles from "./Scenes.module.scss";
import { useState } from "react";
import classNames from "classnames";
import { Grid } from "@mui/material";
import CardComponent from "../card/Card";

export default function Scenes({ cards, selected }) {

    const onClick = () => {
        selected = true;
    }

    return (
        <div className={classNames(styles["scenes-container"])}>
            <Grid container spacing={35} >
                {cards.map(card => {
                    <Grid item xs={4} key={card.iconUrl} >
                        {<CardComponent iconUrl={card.iconUrl} outlined={card.outlined} onClick={onClick} />}
                    </Grid>
                })}

            </Grid>
        </div>
    );
}