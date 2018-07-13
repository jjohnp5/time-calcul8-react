// import React from "react";
// import { withRouter } from "react-router";
// import user from "../util/user";

// class ManagerView extends React.Component {
//   state = {
//     employees: []
//   };

//   componentDidMount() {
//     //blank state
//     let usersList = [];

//     //map through array of data
//     this.showAllEmployees().then(
//       users =>
//         (usersList = users.map(employee => {
//           return employee;
//         }))
//     );
//     this.setState({ employees: usersList });
//   }

//   //calling to DB to render employees
//   showAllEmployees = () => {
//     user
//       .loadUsers()
//       .then(res => {
//         console.log(res);
//       })
//       .catch(err => console.log(err));
//   };

//   handleEnrollRedirect = () => {
//     this.props.history.push(" # "); //register route
//   };

//   handleTimeCardSelection = () => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleTimeCardSelectionSubmit = () => {};

//   render() {

//     let list = this.state.employees;
//     let selectionsList = list.map(selection => <option key={selection.id}>Name: {selection.firstName} {selection.lastName}, Employee ID: {selection.id} </option> )


//     return (
//       <React.Fragment>
//         {/* direct to enroll */}
//         <Button onSubmit={this.handleEnrollRedirect}>Enroll</Button>

//         {/* drop down selection for timecards */}

//         <div className="selections" >
//           <Input>
          
//           {selectionsList}
//           </Input>

          

//         </div>
        
//       </React.Fragment>
//     );
//   }
// }

// export default withRouter(ManagerView);
