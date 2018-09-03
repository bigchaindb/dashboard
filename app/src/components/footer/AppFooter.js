import React, { Component }  from 'react'
import './AppFooter.css';

export default class AppFooter extends Component {
    render() {
        return(
            <div className="footer__copyright appfooter">
                <div> 
                    <a className="menu__link" rel="noopener noreferrer" target="_blank" href="https://www.bigchaindb.com/">© 2018 BigchainDB GmbH</a>
                    <a className="menu__link" rel="noopener noreferrer" target="_blank" href="https://www.bigchaindb.com/terms/">Terms</a>
                    <a className="menu__link" rel="noopener noreferrer" target="_blank" href="https://www.bigchaindb.com/privacy/">Privacy</a>
                </div>
            </div>
        )
    }
}