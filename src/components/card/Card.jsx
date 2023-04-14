
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import classNames from "classnames";
import styles from "./Card.module.scss";

export default function CardComponent({ iconUrl, outlined = false, onClick, title }) {

    return (
        <Card className={classNames(styles.card, outlined == true && styles.border)} onClick={onClick}>
            <CardActionArea>
                
                    {!!iconUrl  &&
                        <CardMedia
                            component="video"
                            image={iconUrl}
                            alt="card image"
                        />
                    }
                <CardContent>    
                    <Typography gutterBottom variant="h5" component="div">{title}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}