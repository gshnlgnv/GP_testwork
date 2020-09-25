import React, {Component} from 'react';
import news1__pic from './pics/news__1.png';
import news2__pic from './pics/news__2.jpg';
import news3__pic from './pics/news__3.jpg';
import './mainStyle.css';

class Main extends Component{
    render() {
        return(
            <div className="main__wrapper">
                <div className="main__inner_wrapper">
                    <img className="news__pic" src={news1__pic} alt="news1__pic"/>
                    <div className="news__text">
                        <h3>Reading 1 </h3>
                        <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                </div>

                <div className="main__inner_wrapper">
                    <img className="news__pic" src={news2__pic} alt="news2__pic"/>
                    <div className="news__text">
                        <h3>Reading 2 </h3>
                        <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                </div>

                <div className="main__inner_wrapper">
                    <img className="news__pic" src={news3__pic} alt="news3__pic"/>
                    <div className="news__text">
                        <h3>Reading 3 </h3>
                        <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;