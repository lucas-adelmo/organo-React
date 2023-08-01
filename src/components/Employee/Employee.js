import './Employee.css'

export const Employee = (props) => {

    return (
        <div className='employee'>
            <div className='header' style={{backgroundColor: props.primaryColor}}>
                <img src={props.img} alt={props.img}/>
            </div>
            <div className='footer'>
                <h4>{props.name}</h4>
                <h5>{props.position}</h5>
            </div>
        </div>
    )

}