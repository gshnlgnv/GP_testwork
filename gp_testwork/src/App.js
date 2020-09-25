import React, {Component} from 'react';
import loader from './pics/loader.png'
import logo_pic from './pics/enter_logo_pic.png';
import './App.css';
import {connect} from "react-redux";
import {checkingLogin} from './actions';
import {bindActionCreators} from "redux";
import Main from "./Main.js";

class App extends Component {

    passwordRef = React.createRef();
    loginRef = React.createRef();

    showError = () => {
        if (this.props.auth || this.props.auth === null) {
            return null
        } else {
            return <div className="login__error">Неправильный логин или пароль!</div>
        }
    };

    loginCheck = () => {
        if (this.props.auth) {
            return <Main/>
        } else {
            return <div className="App">
                <header className="App-header">
                    <img src={loader} className="App-logo" alt="loader"/>
                    <img src={logo_pic} className="header__pic_logo" alt="logo"/>

                    <div>
                        <div>
                            <input type="text" placeholder="Введите логин" ref={this.loginRef}/>
                        </div>
                        <div>
                            <input type="password" placeholder="Введите пароль" ref={this.passwordRef}/>
                        </div>

                        <div>
                            <button
                                className="login__button"
                                onClick={() => this.props.checkingLogin(this.loginRef.current.value, this.passwordRef.current.value,)}>Войти
                            </button>
                        </div>
                        {this.showError()}
                    </div>

                </header>
            </div>;
        }
    };

    render() {
        return (
            <div>
                {this.loginCheck()}

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.loginReducer.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({checkingLogin}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
