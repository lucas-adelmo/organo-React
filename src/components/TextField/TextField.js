import './TextField.css'

export const TextField = (props) =>{
    
    const handleChange = (event) =>{
        props.upState(event.target.value)    
    }
    
    return (
        <div className='text-field'>
            <label>{props.label}</label>
            <input onChange={handleChange} value={props.value} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

// When you change the input (type something), React will call your component function. 
// If you render the same component multiple times, each will get its own state.