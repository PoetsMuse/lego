import { Shape } from "./Shape"

export const Triangle = ({color, size, ...props}) => {

    const specificCss = {
        width: 0,    
        height: 0,
        border: `${color} solid ${size / 2}px`,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomWidth: `${size}px`,
        borderTopWidth: 0 
    }
    
    return (
        <Shape {...props}>
             <div style={specificCss}></div>
        </Shape>
    )
}