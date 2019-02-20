import React, { Component } from 'react';
import Counter from './counterComponent';

class Counters extends Component {
    state = { 
        counters: [
            {id: 0, value: 4},
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
        ]
     }
     handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counters};
        counters[index].value++;     
        this.setState({counters});  
        console.log('state', this.state.counters[index]); 
     };
     handleDelete = (counterId) => {
         const counters= this.state.counters.filter(c => c.id != counterId);
         this.setState({ counters});
         console.log('event hadndle', counterId);
     };
     handleReset =(counterId)=>{
          const counters= this.state.counters.map(c =>{
            c.value = 0;
            return c;
          });
          this.setState({counters});
     }
    render() { 
        
         return (<div>
            <button onClick= {this.props.handleReset} className="btn-primary btn-sm">Reset</button>
             {this.state.counters.map(counter => 
             <Counter key={counter.id}  
                    onDelete={this.handleDelete} 
                    onIncrement={this.handleIncrement}
                    counter={counter}>
                          <h4>title {counter.id}</h4>  
             </Counter>)}
         </div>)
        }

    
}
 
export default Counters;