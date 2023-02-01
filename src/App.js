
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      lists: ["Học JavaScript", "Học Java", "Học ReactJS","không làm mà đòi ăn"],
      itemCurrent:""
    }
  }
  handleSubmit=(currentUD, newCurrent)=>{
    let arr = [];
    this.state.lists.forEach((current)=>{
      if(current === currentUD){
        arr.push(newCurrent)
      }else{
        arr.push(current)
      }
    })
    this.setState({
      lists: arr,
      itemCurrent:""
    })
  }
  handleEdit=(current)=>{
    this.setState({
      itemCurrent: current
    })
  }
  handleDelete=(index)=>{
    if(window.confirm("Bạn có chăc schawns muốn xoá không!")){
          let newArr = this.state.lists.filter((current, i)   => i !== index
    )
    this.setState({
      lists: newArr
    })
  }
  }
  recieveData = (data)=>{

    this.setState({
      lists: [...this.state.lists,data]
    })
  }
  render(){
  return (
    <div className="App">
      <Form recieveData={this.recieveData} editItem={this.state.itemCurrent} handleSubmit={this.handleSubmit}/>
      <List handleEdit={this.handleEdit} lists = {this.state.lists} handleDelete={this.handleDelete}/>
    </div>
  );
  }
}

export default App;
