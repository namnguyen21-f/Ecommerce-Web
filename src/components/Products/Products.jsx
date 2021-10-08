import React from 'react'
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const productsArr = [
    {id: 1, name: "Shoes", price : "1000$", description: "Running Shoes", image: "https://cdn.tgdd.vn/Products/Images/44/231246/apple-macbook-air-2020-mgnd3saa-600x600.jpg"},
    {id: 2, name: "Macbook", price : "1000$", description: "Mordern Laptop made by Apple" , image: "https://cdn.tgdd.vn/Products/Images/44/231246/apple-macbook-air-2020-mgnd3saa-600x600.jpg"},
]

const useStyles = makeStyles((theme) => ({
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '.5rem 0px',
        ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      
    },
    item: {
        alignSelf: "stretch",
    },
    root: {
      flexGrow: 1,
    },
    link: {
        color: "#007185",
        cursor: "pointer",
        "&:hover" :{
            color: "#C7511F",
        }
    }
}));

const Products = ({title, path , products, itemPath , onAddToCart }) =>{
    const classes = useStyles();
    if (!products.length) return <p>Loading...</p>;

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}>
                <Typography variant="h5" gutterBottom >{title}</Typography>
                <Link className={classes.link} to={path}>SEE MORE &#8594;</Link>
            </div>
            <Grid container spacing={4}>
                {products.map((product) => {
                    return (
                        <Grid className={classes.item}  item key={product.id} xs={12} sm={6} md={4} lg={3} xl={3}>
                            <Link to={itemPath + product.id}>
                                <Product product={product} onAddToCart={onAddToCart}/>
                            </Link>
                        </Grid>
                    )
                })}
            </Grid>
        </main>
    )
}

export default Products;