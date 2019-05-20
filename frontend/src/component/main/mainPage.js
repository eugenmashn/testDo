import React from 'react'
import './mainPage.css';
import {Route, Router, Switch} from "react-router";
import AboutWorker from "../AboutWorker/aboutWorker";
import {Link} from "react-router-dom";
import AddnewPersanContainer from "../AddnewPerson/addContainer";


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

        <Route  path='/add' render={()=> < AddnewPersanContainer/>}/>
        <Route path='/:id'  render={(props)=> <AboutWorker  mainPage={this.props.mainPage} {...props} />}/>
      </Switch>
    </div>
  }

}

export default MainPage;
