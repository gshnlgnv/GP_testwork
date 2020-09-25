import React, {Component} from 'react';
import './mainStyle.css';
import {BrowserRouter, Router, Route, Link, Switch} from "react-router-dom";
import {News1} from './Components/News1';
import {News2} from './Components/News2';
import {News3} from './Components/News3';
import {News1details} from './Components/News1details';
import {News2details} from './Components/News2details';
import {News3details} from './Components/News3details';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {news1details, news2details, news3details} from './actions';
import {NEWS1, NEWS2, NEWS3} from './consts';

class Main extends Component {

    newsPrinting = () => {
        console.log("this.props.news", this.props.news);

        switch (this.props.news) {
            case NEWS1:
                return <div><News1details/></div>;
            case NEWS2:
                return <div><News2details/></div>;
            case NEWS3:
                return <div><News3details/></div>;
            default:
                return <BrowserRouter>
                    <div>
                        <div onClick={() => this.props.news1details()}>
                            <News1/>
                        </div>

                        <div onClick={() => this.props.news2details()}>
                            <News2/>
                        </div>

                        <div onClick={() => this.props.news3details()}>
                            <News3/>
                        </div>

                        <Switch>
                            <Route path="/News1details" component={News1details}/>
                            <Route path="/News2details" component={News2details}/>
                            <Route path="/News3details" component={News3details}/>
                            {/*<Redirect from='/' to='/items'/>*/}
                        </Switch>

                    </div>
                    </BrowserRouter>

        }
    };

    render() {
        return (
            <BrowserRouter>
                <div className="main__wrapper">

                    {this.newsPrinting()}



                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.changeNewsReducer.news,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({news1details, news2details , news3details}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
