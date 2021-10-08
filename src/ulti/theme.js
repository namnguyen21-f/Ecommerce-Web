import { createTheme} from '@material-ui/core/styles';


const darkBg = '#212529';
const lightBg = '#f8f9fa';

export const globalTheme = createTheme({
    colors: {
        light: {
            primary: darkBg,
            secondary: lightBg,
            link: '#74c0fc',
            paper: '#FFF',
        },
        dark: {
            primary: lightBg,
            secondary: darkBg,
            link: '#74c0fc',
            paper: '#000',
        },
        lightblue: "rgb(13, 92, 182)",
        bgLightblue: "rgb(232, 246, 255)",
        lightOrange: "rgb(253, 130, 8)",
        textColor: "rgb(36, 36, 36)",
    }
});