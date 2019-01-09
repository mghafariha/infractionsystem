import React from 'react';
import ReactLoading from 'react-loading';
import '../../styles/style.css';

class Loader extends React.Component{

    render(){
       return( <ReactLoading type='spinningBubbles' color='blue' height={'5%'} width={'10%'}  className='loading'/>)
    }
}
export default Loader