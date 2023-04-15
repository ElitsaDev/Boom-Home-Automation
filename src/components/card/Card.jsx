
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import classNames from "classnames";
import styles from "./Card.module.scss";

export default function CardComponent({ iconUrl, outlined = false, onClick, title }) {
    
    return (
        <Card className={classNames(styles.card, outlined == true && styles.border)} onClick={onClick}>
            <CardActionArea>
                <CardContent> 
                    {!!iconUrl  &&
                        <CardMedia
                            sx={{ width: 120, height: 100, margin: 'auto' }}
                            image={iconUrl}
                            alt="card image"
                        /> 
                    }
                   {title &&
                    <Typography className={styles.text} sx={{ mb: 1.0 }} color="#7441F3" variant="h5" component="div">{title}</Typography>
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    );
}