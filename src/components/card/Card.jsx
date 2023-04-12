
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import classNames from "classnames";
import styles from "./Card.module.scss";

export default function ActionAreaCard({ iconUrl, outlined }) {
    return (
        <Card className={classNames(styles.card, outlined == true && styles.border)} >
            <CardActionArea>
                <CardContent>
                    {iconUrl !== '' &&
                        <CardMedia
                            component="img"
                            image={iconUrl}
                            alt="card image"
                        />
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    );
}