import React from 'react'
import './mainPage.css';
import {connect} from "react-redux";
import mainPage from "./mainPage";
import {dntFilter, FilterYear} from "../../redux/mainreducer";
let mapStateToProps=(state)=>{
    return{
        mainPage:state.mainPage
        }
};
let mapDispatchTooProps=(dispatch)=>{
    return {
        FilterYear:(year)=>{
            dispatch(FilterYear(year))
        },
        dntFilter:()=>{
            dispatch(dntFilter())
        }
    }
};
let MainConstruct=connect(mapStateToProps,mapDispatchTooProps )(mainPage);

export default MainConstruct;
