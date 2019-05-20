import React from 'react'
import DatePicker from "react-datepicker";
import * as moment from "moment";
import {Link} from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";
class AboutWorker extends React.Component{

constructor(props){
    super(props);
     this.state={
      DateOne: new Date(),
      DateTwo: new Date(),


    };
    this.onChangeDateOne=this.onChangeDateOne.bind(this);
    this.onChangeDateTwo=this.onChangeDateTwo.bind(this);
    this.Restrct=this.Restrct.bind(this);
}
    index= this.props.mainPage.findIndex((a)=>{

    console.log(parseInt(this.props.match.params.id));
    return a.id===parseInt(this.props.match.params.id)
});



onChangeDateOne(date){
    this.setState({
        DateOne:date
    })
}
    calculateDaysLeft(startDate, endDate) {
        if (!moment.isMoment(startDate)) startDate = moment(startDate);
        if (!moment.isMoment(endDate)) endDate = moment(endDate);
        console.log(endDate.diff(startDate, "days"));
        return endDate.diff(startDate, "days");
    }
     Restrct(date){if(this.calculateDaysLeft( this.state.DateOne,date)>this.props.mainPage[this.index].numberHolidays)
     {return this.state.DateOne }return date}
onChangeDateTwo(date){
    let Date=this.Restrct(date);
    this.setState({
        DateTwo: Date
    })
}
render(){
  return(
      <div>
          <h1>{this.props.mainPage[this.index].name}</h1> <h1>{this.props.mainPage[this.index].surname}</h1> <h1> Днів залишелось: {this.props.mainPage[this.index].numberHolidays}</h1>
          <form>Початок<DatePicker
              selected={this.state.DateOne}
              onChange={this.onChangeDateOne}
          />Кінець<DatePicker
              selected={this.state.DateTwo}
              onChange={this.onChangeDateTwo}
          />

          <button>Затвердити</button>
          <Link to='/'> <button>Back</button></Link>

          </form>
      </div>
  )}
};
export default AboutWorker;
