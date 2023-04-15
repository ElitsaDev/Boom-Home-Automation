import styles from "./Scenes.module.scss";
import { useState } from "react";
import classNames from "classnames";
import { Grid, Typography } from "@mui/material";
import CardComponent from "../card/Card";

export default function Scenes({ cards, selected = false }) {
    const [outlined, setOutlined] = useState(selected);
    const onClick = () => {
        setOutlined(true);
        selected = true;
    }

    console.log(cards)

    return (
        <div className={classNames(styles["scenes-container"])}>
            <Typography variant="h4" className={styles.title}>Scenes</Typography>
            <Grid container spacing={2} >
                {cards.map(card => (
                    <Grid item xs={4} key={card.id} >
                        {<CardComponent iconUrl={card.iconUrl} outlined={outlined} onClick={onClick} />}
                    </Grid>
                ))}

            </Grid>
        </div>
    );
}