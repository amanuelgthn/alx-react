import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.ico';
import { getLatestNotification }from './utils';

export default function Notification() {
    return (
        <div className='Notifications'>
            <div className='section'>
                <p>Here is the list of notifications</p>
                <ul className='new-list'>
                    <li className='first-li'>New course available</li>
                    <li>New resume available</li>
                    <li dangerouslySetInnerHTML={getLatestNotification()}></li>
                </ul>
            </div>
            <InlineNotification />
        </div>
    )
}
function InlineNotification() {
    return (
        <div className='inlinenoty' aria-label='close' onClick={
            console.log('Close button has been clicked')
        }>
            <button className='InlineButton'>
                <img className='imageicon' src={closeIcon} alt='Close' width='20px'/>
            </button>
        </div>
    )
}
