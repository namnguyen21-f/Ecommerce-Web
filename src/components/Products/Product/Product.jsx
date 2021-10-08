import React from 'react'
import {Card, CardMedia, CardContent , CardActions, Typography , IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons';

import useStyles from './style.js';

const Product = ({product, onAddToCart}) => {
    const classes = useStyles();
    const handleAddToCart = (event , id) => {
        event.preventDefault();
        onAddToCart(id , 1);
    };
    return (
        <Card className={classes.root} >
            <CardMedia className={classes.media} title={product.name} image={product.media.source}></CardMedia>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography className={classes.title} variant="body1" style={{fontWeight: "bold"}} gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography  variant="body2" style={{marginTop : "1px"}}>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} className={classes.desc} variant="body2" align="left" color="textSecondary">
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={(event) => {handleAddToCart(event, product.id)}}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
