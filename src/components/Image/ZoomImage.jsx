import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      display: "block",
      width: "100%",
      backgroundRepeat: "none",
      "&:hover img": {
        opacity: "0 !important",
      }
    },
  });

const ZoomImage = ({url ,alt}) => {
    const classes = useStyles();
    const [bgPosition, setbgPosition] = useState('');

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100;
        const y = (e.pageY - top) / height * 100;
        setbgPosition(`${x}% ${y}%`);
    }

    return <div className={classes.root} onMouseMove={(e) => {handleMouseMove(e)}} style={{backgroundImage: `url(${url})`, backgroundPosition: bgPosition}}>
        <img src={url} alt={alt}></img>
    </div>
}

export default ZoomImage;
