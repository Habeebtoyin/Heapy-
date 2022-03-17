import React from 'react';
import Header from './Components/Header';

function Stake() {
    return (
        <div className='Stake'>
            <Header />
            <main>
                <h1>
                    Total HEAP Staked <br/>
                    &#36;1,500,000,000
                </h1>
                <div className='StakeTable'>
                    <div>
                        <strong>Manual HEAP</strong> <br/>
                        <span>Earn HEAP, Stake HEAP</span>
                    </div>
                    <div>
                        <strong>HEAP Earned</strong><br/>
                        0.0 <br/>
                        0 USB
                    </div>
                    <div>
                        <strong>HEAP Staked</strong> <br/>
                        0.0 <br/>
                        0 USB
                    </div>
                    <div>
                        APR <br/>
                        <b>46.96%</b>
                    </div>
                    <div>
                        Total Staked <br/>
                        <b>46.96228</b>
                    </div>
                    <div>
                        Details
                    </div>
                </div>

                <div className='StakeDetails'>
                    <div className='CakeEarnedDetails'>
                        CAKE EARNED <br/>
                        <div>
                            <span>0</span>
                            <button>Collect</button>
                        </div>
                    </div>
                    <div className='StartStakingDetails'>
                        START STAKING <br/>
                        <button>Connect Wallet</button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Stake;