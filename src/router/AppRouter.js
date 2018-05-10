import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import TeamContainer from "../containers/TeamContainer";
import HomeContainer from "../containers/HomeContainer";
import ContactUsContainer from "../containers/ContactUsContainer";
import AboutUsContainer from "../containers/AboutUsContainer";
import NotFoundContainer from "../containers/NotFoundContainer";
import ExpenseContainer from "../containers/ExpenseContainer";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class AppRouter extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={HomeContainer} />
                            <Route exact path="/expense/new" component={ExpenseContainer} />
                            <Route path="/expense/edit/:id" component={ExpenseContainer} />
                            <Route exact path="/contact" component={ContactUsContainer} />
                            <Route exact path="/team" component={TeamContainer} />
                            <Route exact path="/about" component={AboutUsContainer} />
                            <Route path="*" component={NotFoundContainer} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}
export default AppRouter;