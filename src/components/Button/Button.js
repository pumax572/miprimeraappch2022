import './Button.css'
//POR EL MOMENTO NO VAMOS A UTILIZAR ESTE COMPONENTE!!!
const Button = ({ handleClick, color, children}) => {
    return (
        <button onClick={handleClick} style={{color: color}}>
            {children}
        </button>
    )
}

export default Button;