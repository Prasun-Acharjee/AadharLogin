import React from "react";
import  "./App.css";
export const Table=(props)=>
{
    return( <table className="table">
    <tr>
        <td>Aadhar Number</td>
        <td>Name</td>
        <td>Father's Name</td>
        <td>Phone Number</td>
        <td>Date of Birth</td>
        <td>Email ID</td>
        <td>Address</td>
    </tr>
    {props.user.map((user)=>
       
            <tr>
            <td>{user.AdharNo}</td>
            <td>{user.Name}</td>
            <td>{user.fname}</td>
            <td>{user.number}</td>
            <td>{user.DOB}</td>
            <td>{user.emailID}</td>
            <td>{user.address}</td>
            </tr>
        
    )}
    </table>)
}