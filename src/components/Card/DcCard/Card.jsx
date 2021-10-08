import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
        fontWeight: "550",
    },
    sub:{
        color: "rgb(230, 152, 58)",
        fontSize: "0.95rem",
    },
    price: {
        color: "rgb(20, 53, 195)",
        fontWeight: "550",
    },
    dcprice: {
        textDecoration: "line-through",
        marginRight: "4px",
    },
    

    
}));

export default function DiscountCard ({title, sub, price, dcprice, per , imgHeight , imgTitle}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                style={{height: imgHeight || "200px"}}
                image="https://lh3.googleusercontent.com/OkUGENe-064HA2iyhjKZdL0odq6ybpUYWDMzzjxPK3vxwnqVx-eBUHypgfpkRRCsENpe2lM2uTt4jJ3JKw=rw-w300"
                title={imgTitle}
                />
                <CardContent>
                    <Typography className={classes.title} gutterBottom variant="body1">
                        {title}
                    </Typography>
                    <Typography className={classes.sub} variant="body1">
                        {sub}
                    </Typography>
                    <Typography className={classes.price} variant="body1" color="primary" component="p">
                        {price}
                    </Typography>
                    <Box display={"flex"}>
                        <Typography className={classes.dcprice} variant="body2" color="primary" component="p">
                            {dcprice}
                        </Typography>
                        <Typography className={classes.per} variant="body2" color="secondary" component="span">
                            {per}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}