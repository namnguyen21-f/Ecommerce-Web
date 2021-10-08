import React from 'react'
import {Card, CardMedia, CardContent , CardActions, Typography , IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons';

import useStyles from './style.js';

const ReProduct = ({product, onAddToCart}) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.root} style={{paddingBottom : 0}}>
            <CardMedia className={classes.media} title={product.name} image={product.media.source}></CardMedia>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography className={classes.title} variant="body2" style={{fontWeight: "550"}} gutterBottom>
                        {product.name}
                    </Typography>
                </div>
                <Typography  variant="body2" className={classes.price}>
                    {product.price.formatted_with_code} 
                </Typography>
                <Typography  variant="body2" style={{textDecoration: "line-through"}}>
                    {(parseInt(product.price.raw) + 500).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&,').replace(/\.\d+/g, '') + " VND"} 
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ReProduct
