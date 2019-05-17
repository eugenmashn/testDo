import React from 'react'
import './mainPage.css';
import {Route, Router, Switch} from "react-router";
import AboutWorker from "../AboutWorker/aboutWorker";
import {Link} from "react-router-dom";
import {AddnewPersan} from "../AddnewPerson/addNewPerson";
class MainPage extends React.Component{
  constructor(props){
    super(props);

  }
  render() {
    return <div>

      <ul>
      {this.props.mainPage.map((i)=>{
        return (
            <li><Link to={`/${i.id}`} key={i.id}>{i.name} {i.surname}</Link></li>)
      })}

      </ul>
      <Link to='/add'> <button>Додавання до списку </button></Link>
      <Switch>
        <Route exact path='/add' component={AddnewPersan}/>
        <Route path='/:id'  render={(props)=> <AboutWorker number={parseInt(props.match.params.id)} mainPage={this.props.mainPage} {...props} />}/>
      </Switch>
    </div>
  }

}

export default MainPage;
