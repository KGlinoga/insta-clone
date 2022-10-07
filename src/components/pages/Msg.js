import React from 'react';
import './Msg.css';

export default function Msg() {
    return (
        <div className="">
            <h1>Messenger</h1>
            {/* will populate with Msg-relevant components */}
            <div className="container">
                <h2>inbox</h2>
                <h2>sent</h2>
                <h2>msg, etc.</h2>
            </div>

        </div>
    )
}