import './Button.css';

export const Button = (props) =>{
    return(
        <button className="button" type={props.type}>{props.children}</button>
    )
}