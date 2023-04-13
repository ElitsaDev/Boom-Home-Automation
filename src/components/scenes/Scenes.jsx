import styles from "./Scenes.module.scss";
import { useState } from "react";
import classNames from "classnames";
import { Grid } from "@mui/material";
import CardComponent from "../card/Card";

export default function Scenes({cards, selected}){

    const onClick = () => {
        selected = true;
    }

    return (
        <Grid container spacing={35} className={classNames(styles["scenes-container"])}>
            {cards.map(card =>{
            <Grid key={card.iconUrl} item xs={4}>
                    {<CardComponent iconUrl={card.iconUrl} outlined={card.outlined} onClick={onClick} />}
            </Grid> 
            })}
            
        </Grid>
    );
}