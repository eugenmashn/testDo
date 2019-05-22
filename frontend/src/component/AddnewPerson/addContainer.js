import React from 'react'

import {connect} from "react-redux";
import {addNewPersonAction, dntFilter} from "../../redux/mainreducer";
import {AddnewPersan} from "./addNewPerson";

let mapStateToProps=(state)=>{

    return{
        state:state

    }
};
let mapDispatchTooProps=(dispatch)=>{
    return {
        addNewPersonAction:(newElem)=>{
            dispatch(addNewPersonAction(newElem))
        },

    }
};


const AddnewPersanContainer =connect(mapStateToProps,mapDispatchTooProps )(AddnewPersan);

export  default AddnewPersanContainer;
