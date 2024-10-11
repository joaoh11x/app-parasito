import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

export const COLORS = {
    primary: "#fff",
    secondary: '#f29031',
    accent: '#f29031',
    
    success: '#00C851',
    error: '#ff4444',

    black: "#000",
    white: "#FFFFFF",
    background: "#fff"
}


export const SIZES = {
    base: 10,
    width,
    height
}