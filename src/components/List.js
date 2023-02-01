import React, { Component } from 'react'

export default class List extends Component {
  render() {
    return (
      <ol className='list'>
        {
        this.props.lists.map((current,index)=>{
        return <li key={index}>
            {current}
            <div>
            <button className='edit' onClick={()=>{this.props.handleEdit(current)}}>E</button>
            <button className='delete'  onClick={()=>{this.props.handleDelete(index)}}>D</button></div>
        </li>
    })
        }
      </ol>
    )
  }
}
