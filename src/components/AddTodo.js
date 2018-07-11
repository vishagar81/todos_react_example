import React, { Component } from 'react';
import TodoItems from './TodoItems'
class AddTodo extends Component {

    constructor(props){
        super(props)
        this.state = {
            items:[]
        }
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    addItem(event){
        if (this._inputElement.value !== "") {
            var newItem = {
              text: this._inputElement.value,
              key: Date.now()
            };

            this.setState((prevState) => {
                return {
                  items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }
        event.preventDefault()
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
          return (item.key !== key);
        });

        this.setState({
          items: filteredItems
        });
      }

    render() {
        return (
        <div className="App">
            <form onSubmit={this.addItem}>
            <input type='text' placeholder='enter task' ref={(a) => this._inputElement = a} />
            <button type="submit">Add Todo</button>
            </form>
            <TodoItems entries={this.state.items} delete={this.deleteItem}/>
        </div>
        );
    }
}

export default AddTodo;