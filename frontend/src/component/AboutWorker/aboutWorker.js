import React from 'react'


class AboutWorker extends React.Component{

constructor(props){
    super(props);
     this.state={
      DateOne: new Date().toISOString().substring(0, 10),
      DateTwo: new Date().toISOString().substring(0, 10),

    };

}



 index=this.props.mainPage.findIndex((a)=>{
        return a.id===Number(this.props.number)
    });
render(){
  return(
      <div>
          <h1>{this.props.mainPage[this.index].name}</h1> <h1>{this.props.mainPage[this.index].surname}</h1> <h1> Днів залишелось: {this.props.mainPage[this.index].numberHolidays}</h1>
          <form><input type='date'name='OneTime' value={this.state.DateOne}/><input type='date'value={this.state.DateTwo}name='TwoTime'/></form>
      </div>
  )}
};
export default AboutWorker;
