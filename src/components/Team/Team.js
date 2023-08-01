import Employee from '../Employee'
import './Team.css'

export const Team = (props) => {

    return (
        props.employee.length > 0 && <section className='team' style={{backgroundColor: props.secondaryColor}}>
            <h3 style={{borderBottomColor: props.primaryColor}}>{props.name}</h3>
            <div>
                {
                    props.employee.map((employee) => {
                        return <Employee 
                            name={employee.name} 
                            key={Math.random()} 
                            position={employee.position} 
                            img={employee.image}
                            primaryColor={props.primaryColor}
                        />
                    })
                }
            </div>
            
        </section>
    )
}