import React from 'react'

export default class GrandChild extends React.Component{
  render(){
    return (
            <div>
            	{this.props.message}
            </div>
    )
  }
}