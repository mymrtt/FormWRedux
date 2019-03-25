import React, { Component } from 'react'
import UserForm from './UserForm';

class User extends Component {
  render() {

    //Lista apenas para mostrar na tela. ~O projeto está enviando dados para API.
    let list = [
      {
        name: 'Yasmin',
        email: 'yasminm@gmail.com'
      },
      {
        name: 'Gabriel',
        email: 'gabriel@gmail.com'
      },
      {
        name: 'Théo',
        email: 'theodoro@gmail.com'
      },
      {
        name:'Gabriela',
        email: 'gabriel@gmail.com'
      }
    ]

    return (
      <div style={{height: '90vh',display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column'}}>
        {/* Component com redux para enviar dados para API */}
        <UserForm />
        {/* Component com redux para enviar dados para API */}
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {list.map((item) => {
            return <tr>
              <td>
                {item.name}
              </td>
              <td>
                {item.email}
              </td>
            </tr>
          })}
        </table>
      </div>
    );
  }
}

export default User;
