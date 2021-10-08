import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    paddingTop: '4rem',
  },
  container2:{
    margin: "0 auto",
    "@media (max-width: 768px)": {
      margin: "0 !important", 
      padding: "0 !important", 
    },
  },
  checkoutSection:{
    padding: "3rem 0 6rem 0",
    minHeight: "80vh",
    "@media (max-width: 768px)": {
      padding: "2rem 0",
    },
  }

}));