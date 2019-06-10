import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Logo from '../Logo';
import Text from '../Text';
import Plan from '../Plan';
import ContainerButtons from '../ContainerButtons';
import background_services from './img/background-services.png';
import background_data from './img/background-data.png';

const images = [ background_services, background_data];

const Container = styled.section`
    position: relative;
    height: 424px;
    background: linear-gradient(90deg, #333333 10.8%, rgba(51, 51, 51, 0) 70.13%), url(${ props => props.src });
    background-repeat: no-repeat; 
    background-position: top right;
`

class ContainerTop extends Component {

    render() {
        
        let index = this.props.image.index;
     
        return (
            <Container 
                src={ images[index] } >

                <Logo />
                <Text />
                <Plan />
                <ContainerButtons />
                
            </Container> 
        
        )
    }

}

const mapStateToProps = state => ({
  image: state.page
});

export default connect(mapStateToProps)(ContainerTop);