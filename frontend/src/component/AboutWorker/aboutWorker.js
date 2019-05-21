import React from 'react'
import DatePicker from "react-datepicker";
import * as moment from "moment";
import {Link} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import './aboutworcker.css'
class AboutWorker extends React.Component{

constructor(props){

    super(props);
     this.state={
      DateOne: new Date(),
      DateTwo: new Date(),
      Chackmini:true,
    };
    this.onChangeDateOne=this.onChangeDateOne.bind(this);
    this.onChangeDateTwo=this.onChangeDateTwo.bind(this);
    this.Restrct=this.Restrct.bind(this);
    this.onClickBtn=this.onClickBtn.bind(this);
    this.Cover=this.Cover.bind(this);
    // this.FormFunc=this.FormFunc.bind(this);
    // this.DontHaveForm=this.DontHaveForm.bind(this);
}
    index= this.props.mainPage.findIndex((a)=>{

    console.log(this.props);
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
     Restrct(date){if(this.calculateDaysLeft( this.state.DateOne-1,date)>this.props.mainPage[this.index].numberHolidays)
     {return this.state.DateOne }return date}
onChangeDateTwo(date){
    let Date=this.Restrct(date);
    this.setState({
        DateTwo: Date
    })
}
onClickBtn(){

   this.props.DATECHOIC(
       {
           id:this.index,
           name:this.props.mainPage[this.index].name,
           surname:this.props.mainPage[this.index].surname,
           numberHolidays:this.props.mainPage[this.index].numberHolidays-this.calculateDaysLeft(this.state.DateOne,this.state.DateTwo),
           RegistArry:[...this.props.mainPage[this.index].RegistArry,{
               dateStart:this.state.DateOne,
               dateFinish:this.state.DateTwo,
               chack:this.props.mainPage[this.index].chack
           }],
           year:2019}
       );

}


Cover(){
    debugger;
    if(this.props.mainPage[this.index].numberHolidays>0){

        return (
            <div>

                <form>Початок<DatePicker
                    selected={this.state.DateOne}
                    onChange={this.onChangeDateOne}
                />Кінець<DatePicker
                    selected={this.state.DateTwo}
                    onChange={this.onChangeDateTwo}
                />

                    <Link to='/'><button onClick={this.onClickBtn}>Затвердити</button></Link>
                    <Link to='/'> <button>Back</button></Link>

                </form>
            </div>
        );
    }



}

render(){
  return(
      <div>
          <h1>{this.props.mainPage[this.index].name}</h1>
          <h1>{this.props.mainPage[this.index].surname}</h1>
          <h1> Днів залишелось: {this.props.mainPage[this.index].numberHolidays}</h1>
          <h1>Рік {this.props.mainPage[this.index].year}</h1>
          <ul>{this.props.mainPage[this.index].RegistArry.map((i)=>{
          return (
              <li className={(this.state.Chackmini?'lineTrue' :'' )}>Початок : {i.dateStart.toLocaleDateString()} Кінець:{i.dateFinish.toLocaleDateString()}
                  <input type='checkbox'/> </li>)
      })} </ul>
          {this.Cover()}

          <Link to='/'> <button>Back</button></Link>
      </div>
  )}
};
export default AboutWorker;
