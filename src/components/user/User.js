import React from 'react';

export default function User(props) {
  return (
    <div className="userWrapper">
        {/* <button onClick={props.nevigateToAddUser} type="button" className="btn btn-secondary">Secondary</button> */}
      <div className="addUserButton" ><i onClick={props.nevigateToAddUser} class="fa fa-plus addIcon" aria-hidden="true"></i></div>
      <div className="tableBody">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">email</th>
              <th scope="col">address</th>
              <th scope="col">phone</th>
              <th scope="col">website</th>
              <th scope="col">company</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {getEachRow(props)}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const getEachRow = (props) => {
  return props.allUserData.map(row => (
    <tr key= {row.id}>
      <td>{row.name}</td>
      <td>{row.username}</td>
      <td>{row.email}</td>
      <td>{getAddress(row.address)}</td>
      <td>{row.phone}</td>
      <td>{row.website}</td>
      <td>{row.company.name}</td>
      <td className="action" >
        <span className="edit" onClick={() => props.editUserDetail(row.id)} ><i className= "fa fa-pencil"></i></span>
        <span className="delete" onClick={() => props.deleteUserDetail(row.id)}><i className= "fa fa-trash"></i></span>
        {/* <a onClick={() => props.editUserDetail(row.id)} className="icon"  href="javascript:void(0)" ><i className= "fa fa-pencil"></i></a>
        <a onClick={() => props.deleteUserDetail(row.id)} className="icon"  href="javascript:void(0)" ><i class="fa fa-trash"></i></a> */}
      </td>
    </tr>
  ))
} 

const getAddress = (address) => {
  return [address].map(add => `${add.street}, ${add.suite}, ${add.city}, ${add.zipcode},`)
}
