export const NEW_PERSON='NEWPERSON';
export const DATE_CHOICE='DATECHOICE';
let initialState=[{
    id:0,
    name:'Eugen',
    surname:'Mashniskuy',
    numberHolidays:25,
    dateStart:new Date(),
    dateFinish:new Date(),
    year:2019
},{
    id:1,
    name:'Pavel',
    surname:'Mashniskuy',
    numberHolidays:20,
    dateStart:new Date(),
    dateFinish:new Date(),
    year:2019
},{
    id:2,
    name:'Dmitry',
    surname:'Velikiy',
    numberHolidays:15,
    dateStart:new Date(),
    dateFinish:new Date(),
    year:2019
},{id:3,
    name:'Oleks',
    surname:'Petrenko',
    numberHolidays:10,
    dateStart:new Date(),
    dateFinish:new Date(),
    year:2019
}];
const ListReducer=(state=initialState,action)=>{
    switch (action.type) {
        case NEW_PERSON:
            return [...state,action.user];
        case DATE_CHOICE:
            let index=0;

            state.findIndex((elem)=>{
                index++;
                return elem.id===action.id
            });
            let newState=state.splice(index-1,1,action.user);

            return newState;
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
export default ListReducer;