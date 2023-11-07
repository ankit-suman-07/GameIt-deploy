import React from 'react';
import "./PassPlans.css";

const PassPlans = () => {
    return (
        <div className='pass-plans' >
            <div className='pass-header' >
                GAME PASS
            </div>
            <div className='pass-price' >
                <div className='pass-box' >
                    <div className='pass-box-head' >
                        Weekly
                    </div>
                    <div className='pass-box-desc' >
                        <span>Access 1 game per week</span>
                        <span>Free access to 1 event</span>
                        <span>Free partipication in 1 competetion</span>
                    </div>
                    <div className='pass-box-price' >
                        $ 4.99
                    </div>
                </div>
                <div className='pass-box' >
                    <div className='pass-box-head' >
                        Monthly
                    </div>
                    <div className='pass-box-desc' >
                        <span>Access 1 game per week</span>
                        <span>Free access to 1 event</span>
                        <span>Free partipication in 1 competetion</span>
                    </div>
                    <div className='pass-box-price' >
                        $ 4.99
                    </div>
                </div>
                <div className='pass-box' >
                    <div className='pass-box-head' >
                        Yearly
                    </div>
                    <div className='pass-box-desc' >
                        <span>Access 1 game per week</span>
                        <span>Free access to 1 event</span>
                        <span>Free partipication in 1 competetion</span>
                    </div>
                    <div className='pass-box-price' >
                        $ 4.99
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PassPlans