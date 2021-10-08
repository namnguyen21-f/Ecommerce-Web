import { makeStyles} from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    paddingTop: '4rem',
    
  },
  container2:{
    margin: "0 auto",
    padding: "2rem 0", 
    "@media (max-width: 768px)": {
      margin: "0 !important", 
      padding: "0 !important", 
    },
    "@media (min-width: 1280px)": {
      maxWidth: "1480px", 
      
    }
  },
  link: {
    color: "#FFFFFF",
    cursor: "pointer",
    "&:hover" :{
        color: "#C7511F",
    },
    display: "block",
    marginRight: ".25rem",
    marginLeft: "auto",
    width: "fit-content",
    padding: "1rem 0",
  },
  productSection:{
    padding: ".5rem 0 3rem 0",
    minHeight: "80vh",
  },
  banner: {
    width : "100%",
    "& img":{
      width : "100%",
      height: "auto",
    },
    position: "relative",
    "@media (max-width: 960px)": {
      display: "none",
    },
  },
  bannerContent: {
    position: "absolute",
    top: "40%",
    left: "5%",
    transform: "translateY(-50%)",
    maxWidth: "30%",
    "& *": {
      color: "#333333",
    },
    "@media (max-width: 1280px)": {
      "& h2":{
        fontSize: "2.5rem",
      }
    },
  },
  bannerCaption:{
    color: theme.colors.lightOrange,
    fontWeight: "600",
  },
  tabSection: {
    boderRadious: "4px",
    overflow: "hidden"
  },
  tab_label: {
    color: "rgb(51, 51, 51)",
    fontWeight: 600,
  },
  tab_spc: {
    color: "rgb(132, 135, 136)",
  },
  tabSc_title: {
    background: "#ffffff",
    "& .active": {
      background: "#333",
      "& *": {
        color: "#fff"
      }
    }
  },
  tab_panel: {
    minHeight: "450px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "0 -70px",
    padding: "0 1rem 2rem 1rem",
  
  },
  tab_panel_time: {
    width: "300px",
    height: "fit-content",
  },
  tab_panel_content: {
    flex: "1 1",
    
  }

}));