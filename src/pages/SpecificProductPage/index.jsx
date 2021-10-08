import React, {useState , useEffect} from 'react'
import {commerce} from '../../lib/commerce'
import Box from '@material-ui/core/Box';
import { Button, Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import StarIcon from '@material-ui/icons/Star';
import Product from '../../components/Products/Product/Product';
import ReProduct from '../../components/Products/Product/ReProduct';
import Zoom from 'react-img-zoom'
import ZoomImage from '../../components/Image/ZoomImage';
// import {globalTheme} from '../../ulti/theme';

const itemPath = "/product/";

export default function SpecificProductPage ({cart, id , onSetCart}) {
    const classes = useStyles();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const [currentImg, setCurrentImg] = useState("");
    const [currentImgIdx, setCurrentImgIdx] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const limitProduct = 8;
    

    const handleAddProduct = async () => {
        const item = await commerce.cart.add(product.id, quantity);
        onSetCart(item.cart);
    }

    const handleInputQuantity = (event) => {
        if (event.target.value != "" && !isNaN(event.target.value && !isNaN(parseInt(event.target.value)))){
            console.log(event.target.value)
            setQuantity(event.target.value)
        }else {
            setQuantity(0)
        }
    }


    const fetchProduct = async () =>{  
        commerce.products.retrieve(id)
        .then((prd) => {
            prd.rating = '4';
            setProduct(prd);
            setCurrentImg(prd.media.source);
            
        })
    }

    const handleChangeImage = (idx , url) => {
        setCurrentImgIdx(idx);
        setCurrentImg(url);
    }

    useEffect(() => {
        fetchProduct();
    }, [window.location.href])

    if (!product) {
        return (
            <Container maxWidth={false} disableGutters style={{height: "80vh"}} className={classes.container}>
                <Container className={classes.container2} maxWidth="xl">

                </Container>
            </Container>
        )
    }
   
    return (
        <Container maxWidth={false} disableGutters className={classes.container}>
            <Container className={classes.container2} maxWidth="xl">
                <Grid container className={classes.productContainer} spacing={0}>
                    <Grid item lg={4} xl={4}> 
                        <ZoomImage url={currentImg} alt="Product image"></ZoomImage>
                        <Box display="flex" className={classes.productImage}>
                            {product.assets.map((item, idx) => (
                                <img className={currentImgIdx == idx ? "active" : ""} src={item.url} onClick={() => {handleChangeImage(idx , item.url)}}></img>
                            ))}
                        </Box>
                    </Grid>
                    <Grid className={classes.productContent} item lg={8} xl={8}> 
                        <Typography variant="h4" gutterBottom component="h4">
                            {product.name}
                        </Typography>
                        <Box display="flex" style={{fontSize: "95%"}}>  
                            <Box display="flex">
                                {Array.from({length: 5} , (v,i) => (
                                    <span>{parseInt(product.rating) > i ? <StarIcon style={{color: "#F7CA18"}}/> : <StarIcon />}</span>
                                ))}
                            </Box>
                            <Link to={'/product/' + product.id + '/review'}>(See 341 Review)</Link>
                        </Box>
                        
                        <div className={classes.productContent_price}>
                            <span><span className={classes.price}>{product.price.formatted_with_code}</span><span style={{textDecorationLine: "line-through"}}>400.000₫</span>  -52%</span>
                            <Box display="flex">
                                <img src="https://salt.tikicdn.com/ts/upload/21/b3/00/bab4964906fcb6c56d57d9d69a6b2995.png" style={{width: "80px", marginRight: ".5rem"}}></img>
                                <span> FreeShip for bill which is bigger than 1 milion</span>
                            </Box>
                        </div>
                        
                        
                        <Box className={classes.topLine}>
                            <Typography variant="h6"  gutterBottom >
                                Description: 
                            </Typography> 
                            <Typography dangerouslySetInnerHTML={{ __html: product.description }} gutterBottom className={classes.desc} variant="body2" color="textSecondary"></Typography>
                        </Box>

                        <Box className={classes.topLine}>
                            <Typography variant="h6"  gutterBottom >
                                Quantity: Available({product.inventory.available})
                            </Typography>

                            <Box display="flex"  className={classes.productQuantity}>
                                <AddIcon onClick={() => {setQuantity(quantity + 1)}}/>
                                <input type="number" 
                                onKeyDown={(event) => {if (event.keyCode == 69) event.preventDefault()}} 
                                onChange= {(event) => {handleInputQuantity(event)}}
                                value={quantity}/>
                                <RemoveIcon onClick={() => {setQuantity(quantity - 1)}}/>
                            </Box>
                            <Button variant="contained" color="secondary" style={{marginTop: "1rem"}} onClick={() => {handleAddProduct()}}>
                                Add To Cart
                            </Button>
                        </Box>

                    </Grid>
                </Grid>
                <Grid className={classes.relativeProductContainer}>
                    <Typography variant="h5" gutterBottom>
                        Relative Products
                    </Typography>
                    <Grid container>
                        {product["related_products"].map((item, idx) => {
                                return (
                                    <Grid item md={4} lg={2} xl={2} style={{display: "flex"}}>
                                        <Link to={itemPath + item.id} style={{width : "100%"}}>
                                            <ReProduct key={item.id} product={item}></ReProduct>
                                        </Link>
                                    </Grid>
                                )
                            })}    
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}