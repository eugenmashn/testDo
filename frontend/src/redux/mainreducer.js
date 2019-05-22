export const NEW_PERSON='NEWPERSON';
export const DATE_CHOICE='DATECHOICE';
export const USING_WEEK='USINGWEEK';
export const FILTER_YEAR='FILTERYEAR';
export const DNT_FITER='DONTFILTER';
let initialState=[{
    id:0,
    name:'Eugen',
    surname:'Mashniskuy',
    numberHolidays:3,
    dateStart:new Date(),
    dateFinish:new Date(),
    RegistArry:[],
    year:2019
},{
    id:1,
    name:'Pavel',
    surname:'Mashniskuy',
    numberHolidays:5,
    dateStart:new Date(),
    dateFinish:new Date(),
    RegistArry:[]
    ,
    year:2019
},{
    id:2,
    name:'Dmitry',
    surname:'Velikiy',
    numberHolidays:6,
    dateStart:new Date(),
    dateFinish:new Date(),
    RegistArry:[],

    year:2019
},{id:3,
    name:'Oleks',
    surname:'Petrenko',
    numberHolidays:10,

    RegistArry:[],
    year:2019
},
    {id:4,
    name:'Nasta',
    surname:'Kudry',
    numberHolidays:2,

    RegistArry:[],
    year:2018
}];
const ListReducer=(state=initialState,action)=>{
    let PromState=[];
    switch (action.type) {
        case NEW_PERSON:
            return [...state,action.user];
        case DATE_CHOICE:
            let index=0;
            debugger;
            index=state.findIndex((elem)=>{

                return elem.id===action.user.id
            });
            let newState=[...state.slice(0,index),action.user,...state.slice(index+1)];

            return newState;
        case USING_WEEK:{
            let index=state.findIndex((elem)=>{

                return elem.id===action.user.id
            });
            return [...state.slice(0,index),action.user,...state.slice(index+1)]    }
        case FILTER_YEAR:{
            initialState=[...state];
            return state.filter((i)=>{return i.year===action.year})
        }
        case DNT_FITER:{
          return  initialState;
        }
        default:
            return state;
    }};
export const addNewPersonAction=(user)=>({
    type:NEW_PERSON,
    user
});
export const  DATECHOIC=(user)=>({
    type :DATE_CHOICE,
    user
});
export const UsingWeek=user=>({
   type:USING_WEEK,
   user
});
export const FilterYear=(year)=>({
    type:FILTER_YEAR,
    year
});
export  const dntFilter=()=>({
    type:DNT_FITER
});
export default ListReducer;