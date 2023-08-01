import TextField from '../TextField'; //the react enter this folder and search by an achive called index by yourself.
import DropDown from '../DropDown';
import './Form.css';
import Button from '../Button';
import {useState} from 'react'


// Functions starting with "use" are called Hooks. useState is a built-in Hook provided by React. 
// You can also write your own Hooks by combining the existing ones. Hooks are more restrictive than other functions. 
// You can only call Hooks at the top of your components (or other Hooks). 
// If you want to use useState in a condition or a loop, extract a new component and put it there.


export const Form = (props) =>{
    
    // const [currentState, funcToUpdateTheState] => You can give them any names, but the convention is to write [something, setSomething].
    // When you use "useState" it returns an variable to read and other to write, e.g. name and setName respectivally
    
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    
    const whenSaving = (event) => {
        event.preventDefault() // prevent the browser reload the page. The event is treated by react instead. The react don't render the page in this case.
        props.whenRegisteringEmployee({
            name, 
            position, 
            image,            
            team
        })

        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }

    return (
        <section className ='form-card'>
            <form onSubmit={whenSaving}>
                <h2>Fill the employee's data to create a card</h2>
                <TextField 
                    required={true} 
                    label="Name" 
                    placeholder="Type your name"  
                    value={name} 
                    upState={(value) => setName(value)}
                />
                <TextField 
                    required={true} 
                    label="Position" 
                    placeholder="Type your position in the company" 
                    value={position} 
                    upState={(value) => setPosition(value)}
                />
                <TextField 
                    label="Image" 
                    placeholder="Put the path for your profile image. Ex: https://github.com/lucas-adelmo.png" 
                    value={image} 
                    upState={(value) => setImage(value)}
                />
                <DropDown 
                    label="Team" 
                    itens = {props.teams}
                    value={team} 
                    upState={(value) => setTeam(value)}
                />
                <Button type="submit">
                    Create Card
                </Button>
            </form>
        </section>
    )
}