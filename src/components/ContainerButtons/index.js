import React from 'react';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { buttonService, buttonData } from '../../Actions/pageAction';

const ContainerButtons = props => {
    
    let index = props.page.index;
 
    return (
        
        <div className="container-buttons">
           <div className={ index == 0 ? 'button active' : 'button' } id="button-service" onClick={props.buttonService}>Serviços</div>
           <div className={ index == 1 ? 'button active' : 'button' } id="button-data" onClick={props.buttonData} >Dados</div>
        </div>
    )
}
  
const mapStateToProps = state => ({
    page: state.page
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ buttonService, buttonData }, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(ContainerButtons);



