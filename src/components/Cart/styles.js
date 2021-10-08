import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: {
    ...theme.mixins.toolbar,
    minHeight: "unset !important",
    color: theme.colors.lightblue,
    background: theme.colors.bgLightblue,
    borderRadius: ".25rem",
    "& p":{
      padding: "1rem",
    }
  },
  title: {
    marginTop: '2rem',
    marginBottom: '1rem',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  cartHandle: {
    margin: '1rem 0 1rem auto',
    width: 'fit-content',
    "& button" :{
      padding: '.5rem .875rem',
      marginLeft: '.5rem',
    }
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  cartItem : {
    display: "flex",
    padding: "1rem 0",
    alignItems: "unset",
    "& > img": {
      width: '200px',
      height: "150px",
      display: "block",
      marginRight: ".5rem",
    }
  },
  cartItem_status: {
    color: theme.colors.lightOrange,
  },
  cartItem_name: {
    color: theme.colors.textColor,
    "&:hover" : {
      color: theme.colors.lightblue,
    }
  },
  cartItem_quatity: {
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
  }
}));