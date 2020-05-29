import React from  "react";

function TableRows(props){
    // console.log(props.employees)
    return (
        <tbody>
        <tr>
            <th>
            <img alt={props.name} src={props.picture} />
            </th>
            <td>
                {props.name}  {props.lastname}
            </td>
            <td onClick={props.hello1}>
                {props.phone}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                {props.dob} 
            </td>
      </tr>
  </tbody>
    )
}

export default TableRows;