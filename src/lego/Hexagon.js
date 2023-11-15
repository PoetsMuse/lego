import { Shape } from './Shape';

export const Hexagon = ({ color, size, ...props} ) => {
  const specificCss = {
    width: `${size}px`,
    height: `${size}px`,
    position: 'relative',
    backgroundColor: color,
    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
    margin: 0,
    padding: 0,
  };

  return (
    <Shape {...props}>
      <div style={specificCss}></div>
    </Shape>
  )
}
