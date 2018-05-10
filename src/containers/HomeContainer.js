import React from 'react';
import ExpenseContainer from "./ExpenseContainer";

class HomeContainer extends React.Component{
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <ExpenseContainer />
            </div>
        )
    }
}
export default HomeContainer;