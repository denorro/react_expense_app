import React, {Component} from 'react';
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from '../components/ExpenseList';
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';
import {addExpense, removeExpense} from "../actions/expenses";

class ExpenseContainer extends Component {
    constructor(props){
        super(props);
        this.submitExpense = this.submitExpense.bind(this);
        this.removeExpense = this.removeExpense.bind(this);
    }

    submitExpense(expense){
        this.props.addExpense(expense);
    }

    removeExpense(expense){
        this.props.removeExpense(expense);
    }

    toggleNewOrEditForm(){
        if(undefined !== this.props.location && this.props.location.pathname.contains('/expense/edit')){
            return <ExpenseForm id={this.props.match.params.id}/> ;
        }
        else {
            return <div>
                <div className="card card-body bg-well">
                    <ExpenseForm submitExpense={this.submitExpense} />
                </div>
                <hr/>
                <br/>
                <ExpenseList expenseList={this.props.expenseList} deleteExpense={this.removeExpense} />
            </div>;
        }
    }

    render(){
        return (
            <div>
                {this.toggleNewOrEditForm()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        expenseList: state.expenses.expenseList
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addExpense: addExpense,
        removeExpense: removeExpense
    }, dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseContainer);