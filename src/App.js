import React from 'react';
import firebase from "./firebase";
import {validateEmail,validateMobile} from "./validate";
import DataTable from "./DataTable";
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={user:[],userfield:{name:"",address:"",fname:"",phno:"",dob:"",adno:"",email:""}}
  }
  onchange=(e)=>
  {
    //debugger;
    const { userfield } = this.state;
    userfield[e.target.name] = e.target.value;
    this.setState({
      userfield,
    });
  }
  componentDidMount()
  {
    const { userfield } = this.state;
    userfield.adno =Math.floor(100000000000 + Math.random() * 900000000000);
    this.setState({
      userfield,
    });
    const db=firebase.firestore();
    //db.collection("User").get();
   /* console.log(db.collection("User").onSnapshot(function(collection) {
      console.log("Current data: ", collection.data());
  }));*/
   // db.collection("User").onSnapshot((collection)=>{this.setState({docid:collection.docs},()=>console.log(this.state.docid))});
   // db.collection("User").doc("7DDiTYAbP855F36SAcTn").onSnapshot((doc)=>{console.log(doc.data())})
   db.collection("User").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        this.setState({user:doc.data()},()=>console.log(this.state.user));
    });
});
  }
  addUser=()=>
  {
    const db = firebase.firestore();
    !validateEmail(this.state.userfield.email) && alert("Invalid email ID");
    !validateMobile(this.state.userfield.phno) && alert("Invalid phone number");
      db.collection("User").add({
      address: this.state.userfield.address,
      AdharNo: this.state.userfield.adno,
      DOB:this.state.userfield.dob,
      Name:this.state.userfield.name,
      fname:this.state.userfield.fname,
      number:this.state.userfield.phno,
      emailID:this.state.userfield.email
    });
    const { userfield } = this.state;
    userfield.adno ="";
    userfield.name="";
    userfield.phno="";
    userfield.fname="";
    userfield.address="";
    userfield.dob="";
    userfield.email="";
    this.setState({
      userfield,
    });
  }
  render()
  {
    return(
      <div>
        <form>
          <label>
            Name:
            <input type="text" value={this.state.userfield.name} name="name" onChange={this.onchange}/>
          </label><br/>
          <label>
            Address:
            <input type="text" value={this.state.userfield.address} name="address" onChange={this.onchange}/>
          </label><br/>
          <label>
            Father's Name:
            <input type="text" value={this.state.userfield.fname} name="fname" onChange={this.onchange}/>
          </label><br/>
          <label>
            Phone Number:
            <input type="text" value={this.state.userfield.phno} name="phno" onChange={this.onchange}/>
          </label><br/>
          <label>
            Date Of Birth:
            <input type="text" value={this.state.userfield.dob} name="dob" onChange={this.onchange} />
          </label><br/>
          <label>
            Email ID:
            <input type="text" value={this.state.userfield.email} name="email" onChange={this.onchange} />
          </label><br/>
          <label>
            Addhar Number:
            <input type="disabled" value={this.state.userfield.adno} name="adno" onChange={this.onchange} />
          </label><br/>
          <input type="button" value="submit" onClick={this.addUser}/>
        </form>
        <div>
        <DataTable user={this.state.user}/>
        </div>
      </div>
    );
  }
}

export default App;
