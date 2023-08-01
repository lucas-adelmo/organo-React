import './DropDown.css'

export const DropDown = (props) => {

    const handleChange = (event) =>{
        props.upState(event.target.value)    
    }

    return (
        <div className='drop-down'>
            <label>{props.label}</label>
            <select onChange={handleChange} value={props.value}>
                <option value=''></option>
                {props.itens.map( item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}