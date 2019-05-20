import { DATECHOIC} from "../../redux/mainreducer";
import AboutWorker from "./aboutWorker";
import connect from "react-redux/es/connect/connect";

let mapStateToProps=(state)=>{

    return{
        mainPage:state

    }
};
let mapDispatchTooProps=(dispatch)=>{
    return {
        DATECHOIC:(newElem)=>{
            dispatch(DATECHOIC(newElem))
        }
    }
};
const ChoiceElem=connect(mapStateToProps,mapDispatchTooProps)(AboutWorker);
export default ChoiceElem;