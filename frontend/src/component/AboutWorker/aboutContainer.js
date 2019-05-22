import {DATECHOIC, USING_WEEK, UsingWeek} from "../../redux/mainreducer";
import AboutWorker from "./aboutWorker";
import connect from "react-redux/es/connect/connect";

let mapStateToProps=(state)=>{

    return{
        mainPage:state.mainPage,

    }
};
let mapDispatchTooProps=(dispatch)=>{

    return {
        DATECHOIC:(newElem)=>{

            dispatch(DATECHOIC(newElem))
        },
        USING_WEEK:(newElem)=>{
            dispatch(UsingWeek(newElem))
        }
    }
};
const ChoiceElem=connect(mapStateToProps,mapDispatchTooProps)(AboutWorker);
export default ChoiceElem;