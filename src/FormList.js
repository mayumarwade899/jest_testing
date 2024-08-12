import React from 'react'

const FormList = ({users}) => {
const renderedUsers = users.map((user) => {
    return (
        <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>
    )
})

  return (
    <tabel>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {renderedUsers}
        </tbody>
    </tabel>
  )
}

export default FormList