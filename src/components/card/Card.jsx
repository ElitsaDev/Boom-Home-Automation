
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import classNames from "classnames";
import styles from "./Card.module.scss";

export default function CardComponent({ iconUrl, outlined = false, onClick }) {

    return (
        <Card className={classNames(styles.card, outlined == true && styles.border)} onClick={onClick}>
            <CardActionArea>
                <CardContent>
                    {!!iconUrl  &&
                        <CardMedia
                            component="video"
                            image={iconUrl}
                            alt="card image"
                        />
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    );
}