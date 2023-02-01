import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            newWork:"",
            updateWork:""
        }
    }
    handleChange=(e)=>{
        this.setState({
            newWork: e.target.value
        })
    }
    sendData=()=>{
        if (this.state.newWork.trim()!=="") {
            this.props.recieveData(this.state.newWork)
            this.setState({
                newWork:""
            })
        }
    }
    updateData=()=>{
        this.props.handleSubmit(this.props.editItem,this.state.updateWork)
    }
    handleUpdate = (e)=>{
        this.setState({
            updateWork : e.target.value
        })
    }
    
  render() {
    let btn;
    let inputText
    if(this.props.editItem === ""){
        btn = <button className='btnAdd' onClick={this.sendData}>Add</button>
        inputText = this.state.newWork;
    }else{
        btn = <><input type='text' onChange={this.handleUpdate}></input><button className='btnAdd' onClick={this.updateData}>Update</button></>
        inputText = this.props.editItem
    }
    return (
      <div>
        <input type='text' value={inputText} onChange={this.handleChange}/>
        {btn}
      </div>
    )
  }
}
