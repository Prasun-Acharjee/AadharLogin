import React from "react";
import "./App.css"
class DataTable extends React.Component
{
    render()
    {
        return(
    <div>
        <table className="table">
            <tbody>
                <tr>
                    <td>Aadhar Number</td>
                    <td>{this.props.user.AdharNo}</td>
                </tr>
                <tr>
                    <td>Name </td>
                    <td>{this.props.user.Name}&nbsp;</td>
                </tr>
                <tr>
                    <td>Address </td>
                    <td>{this.props.user.address}&nbsp;</td>
                </tr>
                <tr>
                    <td>Father's Name </td>
                    <td>{this.props.user.fname}&nbsp;</td>
                </tr>
                <tr>
                    <td>Phone Number </td>
                    <td>{this.props.user.number}&nbsp;</td> 
                </tr>
                <tr>
                    <td>Email ID </td>
                    <td>{this.props.user.emailID}&nbsp;</td>
                </tr>
            </tbody>
        </table>
    </div>
    )}
}
export default DataTable;