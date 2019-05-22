import React from 'react'
import './mainPage.css';
import {Route, Router, Switch} from "react-router";
import {Link} from "react-router-dom";
import AddnewPersanContainer from "../AddnewPerson/addContainer";
import ChoiceElem from "../AboutWorker/aboutContainer";


class MainPage extends React.Component{
  constructor(props){
    super(props);
    this.onClickTs=this.onClickTs.bind(this);
    this.onClickTe=this.onClickTe.bind(this);
    this.onClickTO=this.onClickTO.bind(this);
  }
  onClickTs(){
    this.props.FilterYear(2019);
  }
  onClickTe(){
    this.props.FilterYear(2018);
  }
  onClickTO(){
    this.props.dntFilter();
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
      <button onClick={this.onClickTs}>2019</button>
      <button onClick={this.onClickTe}>2018</button>
      <button onClick={this.onClickTO}>2018-2019</button>

      <Switch>

        <Route  path='/add' render={()=> < AddnewPersanContainer/>}/>
        <Route path='/:id'  render={(props)=> <ChoiceElem {...props} />}/>
      </Switch>
    </div>
  }

}

export default MainPage;
