import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import styles from "./productCard.module.scss";
import { Button } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function ProductCard(props) {
  const classes = useStyles();

  return (
        <div className="px-2" key={props.key}>
          <div className={styles.product_card_wrap}>
            <Card className={styles.card_wrap}>
              <div className={styles.share_icon}>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </div>
              <div className={styles.media_card_wrap}>
                <CardMedia
                  image={props.productImage}
                  className={styles.media_card}
                ></CardMedia>
              </div>
              <CardContent className={styles.card_content}>
                <Typography variant="h5" className={styles.title}  color="textSecondary">
                  {props.title}
                </Typography>
                <Typography className={styles.description}  variant="body1" color="textSecondary">
                  {props.description}
                </Typography>
                <Typography variant="h5" color="secondary">
                  $ {props.price}
                </Typography>
              </CardContent>
              <CardActions className={styles.favorite_share}>
                <div className={classes.root}>
                  <Rating name="size-medium" defaultValue={2} />
                </div>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
              <CardActions className={styles.cart_details}>
                <Button className={styles.view_btn} variant="outlined">Details</Button>
                <Button className={styles.cart_btn}>Add to cart</Button>
              </CardActions>
            </Card>
          </div>
        </div>
    
  );
}
