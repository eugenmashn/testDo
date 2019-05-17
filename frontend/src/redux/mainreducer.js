export const NEW_PERSON='NEWPERSON';
let initialState=[{
    id:0,
    name:'Eugen',
    surname:'Mashniskuy',
    numberHolidays:25
},{
    id:1,
    name:'Pavel',
    surname:'Mashniskuy',
    numberHolidays:20
},{
    id:2,
    name:'Dmitry',
    surname:'Velikiy',
    numberHolidays:15
},{
    id:3,
    name:'Oleks',
    surname:'Petrenko',
    numberHolidays:10
}];
const ListReducer=(state=initialState,action)=>{
    switch (action.type) {
        case NEW_PERSON:
            return [...state,action.user];
        default:
            return state;
    }};
export const addNewPersonAction=(user)=>({
    type:NEW_PERSON,
    user
});
export default ListReducer;