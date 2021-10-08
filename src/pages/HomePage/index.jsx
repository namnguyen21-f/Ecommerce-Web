import React, {useState , useEffect, Suspense} from 'react'
import {commerce} from '../../lib/commerce'
    
import { Button, Container, AppBar, Typography ,Tabs, Tab , Box, Grid } from '@material-ui/core';
import useStyles from './styles';
import Banner from '../../assets/banner.png';
import { Link } from 'react-router-dom';
import DiscountCard from '../../components/Card/DcCard/Card';

// import {globalTheme} from '../../ulti/theme';



const categoryQ = ['Laptop', 'Headphone'];



function TabPanel(props) {
    const { children, value, id, aria, index, ...other } = props;
    console.log(other)
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={id + "-" + index}
        aria-labelledby={aria + "-" + index}
        {...other}
      >
        {value === index && (
          children
        )}
      </div>
    );
}

function a11yProps(id, aria, index) {
    return {
      id: id + "-" + index,
      'aria-controls': aria + "-" + index,
    };
}

const bannerContentData = {
    highlight: "5% Discount on all product",
    title: "Laptop/Smartphone Collection",
    sub: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    to : "/product/news"
}

const Products = React.lazy(() => import('../../components/Products/Products'));

export default function Homepage ({cart , onSetCart}) {
    const classes = useStyles();
    const [productsArr, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(0)
    const limitProduct = 8;

    const handleAddProduct = async (productId, quanity) => {
        const item = await commerce.cart.add(productId, quanity);
        onSetCart(item.cart);
    }

    const fetchProducts = async () =>{
        for (let i=0 ;i < categoryQ.length ;i++){
            await commerce.products.list({
                category_slug: categoryQ[i],
                limit: limitProduct
            }).then((products) => {       
                productsArr.push({
                    data: products.data,
                    title: categoryQ[i]
                });
            }).catch((error) => {
                console.log("There was an error fetching product in commerce")
            })
        }   
        
        setProducts(productsArr)
        setLoading(false);
    }
    

    useEffect(() => {
        if (productsArr.length == 0){
            fetchProducts();
        }
    }, [])

    const discountTabSc = [
        {
            label: "TV",
            spc: "Up to 49%",
        },
        {
            label: "Smart Phone",
            spc: "Up to 49%",
        },
        {
            label: "Lego",
            spc: "Up to 49%",     
        },
        {
            label: "Heartttt",
            spc: "Up to 49%",      
        },
    ]

    const discountItem = [
        {
            line_Items: ['','','',''],
            bgUrl: "https://lh3.googleusercontent.com/coXimZPS-mTfFp36S-VgKcqFRnSczPQUWWW7bxF2eCoJgdpLj288lXL1dfybQiWLrZgUGIX0DdA_rVhgRMyXUKzmEZdeuFbx=w1232",
        },
        {
            line_Items: ['','','',''],
            bgUrl: "https://lh3.googleusercontent.com/Z5Kee8tw3C9FqdUrVuIK_EucDVF4qlt6FV0hSb8CJchXjgdN83Qo-rfEDRKk_QwxCdAqjnN5kdDtNkBJPqqBSiVlmnvMkdc=w1232",
        },
        {
            line_Items: ['','','',''],
            bgUrl: "https://lh3.googleusercontent.com/v2qVG6kYVAc4rPiFswQnAnBvj3-O_V89h-u72gc-suPWOWNHO5f3_su4UdUiLOx9A_DKGAXc0F40Vzi2t1vGJ6bxLwmJzfGU=w1232",
        },
        {
            line_Items: ['','','',''],
            bgUrl: "https://lh3.googleusercontent.com/coXimZPS-mTfFp36S-VgKcqFRnSczPQUWWW7bxF2eCoJgdpLj288lXL1dfybQiWLrZgUGIX0DdA_rVhgRMyXUKzmEZdeuFbx=w1232",
        },
    ]
    
    return (
        
        <Container maxWidth={false} disableGutters className={classes.container}>
            <div className={classes.banner}>
                <img src={Banner} alt="banner"></img>
                <div className={classes.bannerContent}>
                    <Typography component="span" className={classes.bannerCaption}>{bannerContentData.highlight}</Typography>
                    <Typography variant="h2" gutterBottom >{bannerContentData.title}</Typography>
                    <Typography variant="body2" gutterBottom >{bannerContentData.sub}</Typography>
                    <Button component={Link} variant="contained" color="secondary" style={{marginTop:"1rem"}} to={bannerContentData.to}><span style={{color:"#ffffff"}}>Watch News</span></Button>
                </div>
            </div>
            <Container className={classes.container2} maxWidth="xl">
                <div className={classes.tabSection}>
                    <AppBar position="static">
                        <Tabs value={value} className={classes.tabSc_title} onChange={(e, newIdx) => {setValue(newIdx)}} aria-label="simple tabs example">
                            {discountTabSc.map((item, idx) => (
                                <Tab
                                    key={idx}
                                    className={idx == value ? "active" : ""}
                                    label={
                                        <Typography className={classes.tab_label} variant="body1">{item.label}<Typography className={classes.tab_spc} variant="body2">{item.spc}</Typography></Typography>
                                    } 
                                    {...a11yProps(idx)} />
                            ))}
                        </Tabs>
                    </AppBar>
                    {discountItem.map((item, idx) => (
                        <TabPanel 
                            key={idx}
                            value={value} 
                            index={idx} 
                            style={{
                                backgroundImage: `url(${item.bgUrl})`,
                            }}
                            className = {classes.tab_panel}>
                            <Box display={"flex"} alignItems="center">
                                <div className = {classes.tab_panel_time}>
                                    {/* <Typography className={classes.tab_label_time} variant="body1">"End in 1 day"</Typography> */}
                                </div>
                                <div className = {classes.tab_panel_content}>
                                    <Link className={classes.link} to={"/"}>SEE MORE &#8594;</Link>
                                    <Grid container spacing={4}>
                                        {item.line_Items.map( ( ele, idx ) => {
                                            return (
                                                <Grid item lg={3}>
                                                    <Link to={"/product/" + ele.id}>
                                                        <DiscountCard 
                                                            title={"Smart Tivi QLED Samsung 8K 65 inch QA65Q950TSKXXV"}
                                                            price={"50.000.000"}
                                                            dcprice={"40.000.000"}
                                                            per={"-20%"}
                                                            imgHeigh="220px"
                                                            imgTitle="Smart Tivi QLED Samsung 8K 65"
                                                            sub={"Only one left"}
                                                            />
                                                    </Link>
                                                </Grid>
                                            )
                                        })}
                                        
                                    </Grid>
                                </div>
                            </Box>
                        </TabPanel>
                    ))}
                    
                </div>
                <Suspense fallback={<h2>Products are loading...</h2>}>
                    <div className={classes.productSection}>
                        {!loading && productsArr.map((item) => {
                            return (
                                <Products key={item.title} path={"/products/" + item.title} itemPath={'/product/'} products={item.data} title={item.title} onAddToCart={handleAddProduct}></Products>
                            )
                        })}     
                    </div>
                </Suspense>
            </Container>
        </Container>
       
    )
}