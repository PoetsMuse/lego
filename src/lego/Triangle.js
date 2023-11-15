export const Triangle = ({color="black", size=100, place=[0, 0]}) => {

    const css = {
        position: "absolute",

        width: 0,    
        height: 0,
        top: `${place[0]}px`,
        left: `${place[1]}px`,  
        
        border: `${color} solid ${size / 2}px`,
        borderTopColor: "transparent",
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomWidth: `${size}px`,
        borderTopWidth: 0
        
    }
    
    return (
        <div style={css}>
        
        </div>
    )
}