import React, { Component } from 'react';
import moment from 'moment';

class ExpenseForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: 'General Expense',
            name: '',
            cost: '',
            description: '',
            notes: '',
            date:''
        }
        this.onAddExpenseFormSubmit = this.onAddExpenseFormSubmit.bind(this);
    }

    onAddExpenseFormSubmit(e){
        e.preventDefault();
        if(this.state.name.length < 0 || !this.state.cost ){
            alert('Provide a name and cost of the expense!');
            return;
        }
        if(isNaN(parseInt(this.state.cost))){
            alert('The cost must be in a number format!');
            return;
        }
        let newExpense = {
            category: this.state.category,
            name: this.state.name,
            cost: this.state.cost,
            description: this.state.description,
            notes: this.state.notes,
            date: this.state.date,
            created: moment().format('MMM Do YYYY, h:mm:ss a'),
            updated: moment().format('MMM Do YYYY, h:mm:ss a')
        }
        this.props.submitExpense(newExpense);
        this.setState({
            category: 'General Expense',
            name: '',
            cost: '',
            description: '',
            notes: '',
            date:''
        });
    }

    render(){
        return (
            <div>
                <form onSubmit={this.onAddExpenseFormSubmit}>
                    <fieldset>
                        <legend>Add Expense</legend>
                        <div className="form-group">
                            <select className="form-control">
                                <option value="General Expense">General Expense</option>
                                <option value="Food Expense">Food Expense</option>
                                <option value="Travel Expense">Travel Expense</option>
                                <option value="Home Expense">Home Expense</option>
                                <option value="Auto Expense">Auto Expense</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Expense Name..." value={this.state.name} onChange={e => this.setState({name: e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <input type="number" min="0" value="0.0" step="any" className="form-control" placeholder="Expense Cost..." value={this.state.cost} onChange={e => this.setState({cost: e.target.value})} required/>
                        </div>
                        <div className="form-group">
                            <input type="date" className="form-control" placeholder="Date of Expense"  value={this.state.date} onChange={e => this.setState({date: e.target.value})} />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Expense Description..." rows="3" value={this.state.description} onChange={e => this.setState({description: e.target.value})} ></textarea>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" placeholder="Expense Notes..." rows="3" value={this.state.notes} onChange={e => this.setState({notes: e.target.value})} ></textarea>
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btn btn-dark btn-block" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
export default ExpenseForm;