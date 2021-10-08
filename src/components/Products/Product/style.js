import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    width: '100%',
    height: '100%',
    position: 'relative',
    paddingBottom: "3.375rem",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  desc:{
    marginTop: ".5rem",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipse",
    wordBreak: "break-all",
  },
  title: {
    
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipse",
    wordBreak: "break-all",
  },
  price: {
    fontWeight: "bolder",
    lineHeight: 1.5,
    fontSize: "1rem",
    color: "#333",
  }
}));