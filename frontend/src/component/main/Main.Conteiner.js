import React from 'react'
import './mainPage.css';
import {connect} from "react-redux";
import mainPage from "./mainPage";
let mapStateToProps=(state)=>{
    return{
        mainPage:state.mainPage
        }
};
let mapDispatchTooProps=(dispatch)=>{
    return {

    }
};
let MainConstruct=connect(mapStateToProps,mapDispatchTooProps )(mainPage)

export default MainConstruct;
