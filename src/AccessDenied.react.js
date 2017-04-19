/* global window:true, document:true */
import React, {PropTypes} from 'react';
import {merge} from 'ramda';
import * as styles from './styles/styles.js';
import * as constants from './constants/constants.js';

function AccessDenied(props) {
    const {configRequest} = props;
    const fid = configRequest.content.fid;
    const owner_username = fid.split(':')[0];
    return (
        <div style={merge(styles.base.html, styles.base.container)}>

            <div style={styles.base.h2}>
                {"Access Denied"}
            </div>

            <div style={styles.base.h4}>
                {"Uh oh! You don't have access to this Dash app."}
            </div>

            <div>
                {`This app is owned by ${owner_username}. `}
                {`Reach out to ${owner_username} to grant you access
                  to this app and then try refreshing the app.`}
            </div>

            <br/>

            <a style={styles.base.a} onClick={() => {
                document.cookie = (
                    `${constants.OAUTH_COOKIE_NAME}=; `+
                    'expires=Thu, 01 Jan 1970 00:00:01 GMT;'
                );
                window.location.reload(true);
            }}>
                {'Log out of session'}
            </a>
        </div>
    )
}
AccessDenied.propTypes = {
    configRequest: PropTypes.object
}
export default AccessDenied;