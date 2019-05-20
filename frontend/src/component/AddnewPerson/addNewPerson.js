import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {Link} from "react-router-dom";

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

export class AddnewPersan extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: true,
            name:'name',
            surname:'surname',
            day:0,
            newElem:{
                name:'',
                surname:'',
                day:0
            }
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.onChangeSurname=this.onChangeSurname.bind(this);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeDay=this.onChangeDay.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    onChangeName(e){
        this.setState({
            name:e.target.value,

        });
    }
    onChangeSurname(e){
        this.setState({
            surname:e.target.value,

        });
    }
    onChangeDay(e){
        this.setState({
            day:e.target.value,

        });
    }


    closeModal() {

        this.props.addNewPersonAction({
            id:new Date().valueOf(),
            name:this.state.name,
            surname:this.state.surname,
            numberHolidays:this.state.day,
        });
        this.setState({modalIsOpen: false});

    }

    render() {

        return (
            <div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >


                    <form>
                        <input name='name' onChange={this.onChangeName} type='text' value={this.state.name}/>
                        <input name='surname' type='text'onChange={this.onChangeSurname} value={this.state.surname}/>
                        <input name='day' type='number'onChange={this.onChangeDay} value={this.state.day}/>
                        <Link to="/"><button onClick={this.closeModal}>Add</button></Link>
                    </form>
                </Modal>
            </div>
        );
    }
}