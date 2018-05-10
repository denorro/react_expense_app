import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';

const customStyles = {
    content : {
        width                 : '75%',
        height                : '75%',
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

let selectedExpense = {
    id: '',
    name:'',
    cost:'',
    category: '',
    description:'',
    date:'',
    created:'',
    updated:''
}

class ExpenseList extends Component {
    constructor(props){
        super(props);
        this.state={
            modalIsOpen: false,
            modalFormDisabled: true
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.truncateLongText = this.truncateLongText.bind(this);
        this.deleteExpense = this.deleteExpense.bind(this);
    }

    componentDidMount(){
        Modal.setAppElement('body');
    }

    deleteExpense(expense){
        this.props.removeExpense(expense);
    }

    openModal(expense) {
        this.setState({modalIsOpen:true});
        selectedExpense = {
            id: expense.id,
            name: expense.name,
            cost: expense.cost,
            category: expense.category,
            description: expense.description,
            created: expense.created,
            updated: expense.updated,
            notes: expense.notes,
            date: expense.date
        }
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
            selectedExpense: {}
        });
    }

    truncateLongText(text){
        return (!text) ? '' : text.slice(0, 25) + '...';
    }

    renderExpenseList(){
        if(this.props.expenseList.length < 1){
            return <h1 className="text-center">No Expenses Listed</h1>
        }
        const list = this.props.expenseList.map( expense =>
            <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>${expense.cost}</td>
                <td>{expense.category}</td>
                <td>{this.truncateLongText(expense.description)}</td>
                <td>{this.truncateLongText(expense.notes)}</td>
                <td>{expense.date}</td>
                <td>{expense.created}</td>
                <td>{expense.updated}</td>
                <td>
                    <div className="row">
                        <div className="col-xs-8 offset-lg-2 offset-xl-0 col-xl-3">
                            <button onClick={() => this.openModal(expense)} className="btn btn-link" title="Go To Expense">
                                <i className="ion-eye"></i>
                            </button>
                        </div>
                        <div className="col-xs-8 offset-lg-2 offset-xl-0 col-xl-3">
                            <Link to={`/expense/edit/${expense.id}`} className="btn btn-link" title="Edit Expense">
                                <i className="ion-edit"></i>
                            </Link>
                        </div>
                        <div className="col-xs-8 offset-lg-2 offset-xl-0 col-xl-3">
                            <button onClick={() => this.props.deleteExpense(expense)} className="btn btn-link" title="Delete Expense">
                                <i className="ion-trash-a"></i>
                            </button>
                        </div>
                    </div>
                </td>
            </tr>
        );
        return (
            <div>
                <div className="text-center">
                    <h1>Expense List</h1>
                </div>
                <div>
                    <table className="table table-hover table-bordered table-sm">
                        <thead>
                        <tr>
                            <th>Expense Name</th>
                            <th>Cost</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Notes</th>
                            <th>Date of Expense</th>
                            <th>Creation Date</th>
                            <th>Last Modified Date</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    render(){
        return (
            <div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal">
                    <h2>{selectedExpense.name}</h2>
                    <p>{`Expense ID: ${selectedExpense.id}`}</p>
                    <hr />
                    <form>
                        <div className="form-group">
                            <label>Cost</label>
                            <input type="text" className="form-control" value={selectedExpense.cost} disabled={true}/>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea className="form-control" value={selectedExpense.description} disabled={true}></textarea>
                        </div>
                        <div className="form-group">
                            <label>Notes</label>
                            <textarea className="form-control" value={selectedExpense.notes} disabled={true}></textarea>
                        </div>
                        <div className="form-group">
                            <label>Expense Date</label>
                            <input type="date" className="form-control" value={selectedExpense.date} disabled={true} />
                        </div>
                        <div className="form-group">
                            <label>Creation Date</label>
                            <input type="text" className="form-control" value={selectedExpense.created} disabled={true} />
                        </div>
                        <div className="form-group">
                            <label>Last Modified Date</label>
                            <input type="text" className="form-control" value={selectedExpense.updated} disabled={true} />
                        </div>
                    </form>
                    <Link to={`/expense/edit/${selectedExpense.id}`} className="btn btn-warning btn-block" onClick={this.closeModal}>Edit</Link>
                    <button
                        className="btn btn-danger btn-block"
                        onClick={() => {
                            this.props.deleteExpense(selectedExpense);
                            this.closeModal();
                        }}>
                        Delete
                    </button>
                    <button className="btn btn-dark btn-block" onClick={this.closeModal}>Close</button>
                </Modal>
                {this.renderExpenseList()}
            </div>
        )
    }
}
export default ExpenseList;