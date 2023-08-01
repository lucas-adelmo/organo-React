import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team'

function App(props) {

  const teams = [
    {
      name:'Development',
      primaryColor: '#57C278',
      secondaryColor:'#D9F7E9'
    },
    {
      name:'Front-end',
      primaryColor: '#82CFFA',
      secondaryColor:'#E8F8FF'
    },
    {
      name:'Data Science',
      primaryColor: '#A6D157',
      secondaryColor:'#F0F8E2'
    },
    {
      name:'DevOps',
      primaryColor: '#E06B69',
      secondaryColor:'#FDE7E8'
    },
    {
      name:'UX Design',
      primaryColor: '#DB6EBF',
      secondaryColor:'#FAE9F5'
    },
    {
      name:'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor:'#FFF5D9'
    },
    {
      name:'Innovation',
      primaryColor: '#FF8A29',
      secondaryColor:'#FFEEDF'
    },
  ]

  // Here I create the variables to track the state of my components
  const [employee , setEmployee] = useState([])

  console.log(employee)
  
  return (
    <div className="App">
      <Banner />
      <Form 
        whenRegisteringEmployee = {
          (newEmployee) => {setEmployee([...employee, newEmployee])}
        }
        teams = {teams.map((obj) => obj.name)}
      />

      {
        teams.map((obj) => {
          return <Team 
            key={obj.name} 
            name={obj.name} 
            primaryColor={obj.primaryColor} 
            secondaryColor={obj.secondaryColor}
            employee={employee.filter((employee) => employee.team === obj.name)}
            />     
        })
      }

       
    </div>
  );
}

export default App;
