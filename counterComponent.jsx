import React, { Component } from 'react';
class Counter extends Component {
    // state = {
    //     count: this.props.counter.value,
    //     tags: ['tag1', 'tag2', 'tag3']
    // } 
    product = {id: 1}

    // renderTags() {
    //     if(this.state.tags.length === 0) return <p>There are no tags</p>
    //     return <ul>{this.state.tags.map(tag => <li key ={tag}>{tag}</li>)}</ul>
    // }
    // constructor() {
    //     super();
    //     console.log('this', this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement = (product) => {
    //     console.log('handle event', this);
    //     this.setState({count: this.state.count + 1})
    // }
    render() { 
        //let classes = this.getBadgeClasses();
        console.log('props', this.props);
        return (<div>
            {this.props.children}
                    <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
                   
                    <button
                     onClick= {() => this.props.onIncrement(this.props.counter)} 
                     className = "btn btn-secondary btn-sm">Increment
                     </button>
                    <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className="btn btn-danger btn-sm m-2">Delete</button>
                    {/* {this.state.tags.length === 0 && 'Please add a tag'} */}
                    {/* {this.renderTags()} */}
                </div>
               
        );
    }
   // function to call class
    getBadgeClasses() {
        let classes = "badge m-2 "
        classes += (this.props.counter.value === 0)? "badge-warning": "badge-primary" 
        return classes; 
    }

    //founction for count
    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? <h1>Zero</h1>: value;
    }
}
 
export default Counter;