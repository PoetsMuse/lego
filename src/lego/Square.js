export const Square = ({color="black", size=100, place=[0, 0]}) => {

    const css = {
        position: "absolute",

        backgroundColor: color,
        width: `${size}px`,    
        height: `${size}px`,
        top: `${place[0]}px`,
        left: `${place[1]}px`    
    }
    
    return (
        <div style={css}>
        
        </div>
    )
}