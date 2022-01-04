import React from 'react';
import './App.css';
import Profile from './components/Profile';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      profiles: [
        {
          id: 1,
          name: "Alex",
          age: "35",
          country: "USA",
          skills: ["Client service", "Management", "Presentation"],
          photo: "https://upload.wikimedia.org/wikipedia/commons/d/da/Ricky_Martin_in_store_appearance%2C_Sydney_Australia_%281%29.jpg"
        },
        {
          id: 2,
          name: "Sarah",
          age: "24",
          country: "US",
          skills: ["Design", "User experience", "Illustrations"],
          photo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Martha_Stewart_2011_Shankbone.JPG"
        },
        {
          id: 3,
          name: "Martin",
          age: "27",
          country: "Canada",
          skills: ["Accounting", "Calculations", "Mathematical analysis"],
          photo: "https://www.film.ru/sites/default/files/people/1458805-1449076.jpg"
        },
        {
          id: 4,
          name: "Martha",
          age: "27",
          country: "UK",
          skills: ["Content making", "Web-Design", "SMM"],
          photo: "https://www.film.ru/sites/default/files/people/_tmdb/xVS8OqKUmTb0G5EWAqX5gqWWD15.jpg"
        }
      ],
      id: 0
    }
  }

  getProfile() {
    var num = Math.floor(this.state.profiles.length * Math.random());
    if (this.state.id !== num) {
      this.setState({
        id: num
      });
    } 
    else {
      this.getProfile();
    }
  }

  render() {
    return (
      <div className="App">
        Random profile - React application
        <React.Fragment>
          <Profile person={this.state.profiles[this.state.id]}/>
        </React.Fragment>
        <button class="btn" onClick={() => this.getProfile()}>Random Profile</button>
      </div>
    )
  }
}


// const profiles: Profile[] = [
  // {
  //   id: 1,
  //   name: "Alex",
  //   age: "35",
  //   country: "USA",
  //   skills: ["Client service", "Management", "Presentation"],
  //   photo: ""
  // },
  // {
  //   id: 2,
  //   name: "Sarah",
  //   age: "24",
  //   country: "US",
  //   skills: ["Design", "User experience", "Illustrations"],
  //   photo: ""
  // },
  // {
  //   id: 3,
  //   name: "Martin",
  //   age: "27",
  //   country: "Canada",
  //   skills: ["Accounting", "Calculations", "Mathematical analysis"],
  //   photo: ""
  // },
  // {
  //   id: 4,
  //   name: "Martha",
  //   age: "27",
  //   country: "UK",
  //   skills: ["Content making", "Web-Design", "SMM"],
  //   photo: ""
  // }
// ]



// function App() {


//   return (
//     <React.Fragment>
//       <div className={styles.App}>
//         <div>

//         </div>

//       </div>
//     </React.Fragment>
//   );
// }