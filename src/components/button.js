import { Button as styledButton } from 'react-bootstrap';

const Button = ({label, height='40px', width='40px', color='white', background='gray', buttonType}) => {
    return ( <button style={{height, width, color, background}}>{label}</button> );
}
 
export default Button;