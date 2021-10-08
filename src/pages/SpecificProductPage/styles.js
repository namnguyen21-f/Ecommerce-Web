import { makeStyles} from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    padding: "4rem 0",
  
  },
  container2:{
    margin: "0 auto",
    "@media (max-width: 768px)": {
      margin: "0 !important", 
      padding: "0 !important", 
    },
    "@media (min-width: 1280px)": {
      maxWidth: "1480px", 
      padding: 0,
    }
  },
  productContainer:{
    background: "#fff",
    "& img" : {
      width: "100%",
      height: "auto",
    },
    padding: "1rem 0.375rem",
    paddingBottom: "0.75rem",
    boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.2)",
  },
  productContent : {
    padding: "1.5rem 1.5rem 1.75rem 1rem",
  },
  productContent_price: {
    padding: ".5rem",
    minWidth: "40%",
    backgroundColor: theme.palette.background.default,
    borderRadius: "6px",
    margin: "1.5rem 0",
  },
  price : {
    fontSize: "1.75rem", 
    color: "#333",
    fontWeight: "500",
    marginRight: ".375rem",
  },
  productImg: {
    "& div": {
      height: "150%",
    }
  },
  productImage: {
    marginTop: "2rem",
    "& img" : {
      display: "block",
      marginRight: "1rem",
      width: "100px",
      height: "100px",
    },
    "& img:last-child" : {
      marginRight: "0",
    },
    "& img.active" :{
      border: "1px solid rgb(0, 127, 240)"
    }
  },
  productQuantity: {
    display: "flex",
    alignItems: "center",
    border: '1px solid rgb(200, 200, 200)',
    width: "fit-content",
    "& svg" :{
      width: "2rem",
      height: "2rem",
      padding: ".25rem  .25rem",
      display: "block",
    },
    "& input::-webkit-outer-spin-button,& input::-webkit-inner-spin-button" :{
      margin: 0,
      appearance: "none",
      
    },
    "& input":{
      border: 0,
      width: "32px",
      textAlign: "center",
      outline: "none",
    }
  },
  topLine: {
    borderTop: "1px solid rgb(242, 242, 242)",
    padding : "1rem 0",
  },
  relativeProductContainer: {
    background: "#fff",
    marginTop: "1.5rem",
    padding: "1rem 0.375rem",
    boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.2)",
  }

}));