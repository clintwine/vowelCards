import React from 'react' ;


class Letter extends React.Component {
  constructor(props){
    super(props);
    

  }

  


  render() {

    let letterStyle = {
      fontSize : 60,
      backgroundColor : this.props.bgcolor,
      padding : 40,
      margin : 50,
      position : 'relative',
      display : 'inline-block',
      boxShadow : '0 10px 10px -5px',
      width : 50,
      textAlign : 'center'
    };


    return(
      <div style={letterStyle}>
        {this.props.children}
      </div>

    );
  }
}

export default Letter ;
