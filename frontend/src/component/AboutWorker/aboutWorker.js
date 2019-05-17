import React from 'react'

const AboutWorker=({number,mainPage})=>{

    let index=mainPage.findIndex((a)=>{
        return a.id===Number(number)
    });
  return(
      <div>
          <h1>{mainPage[index].name}{mainPage[index].surname}{mainPage[index].numberHolidays}</h1>
      </div>
  )
};
export default AboutWorker;
