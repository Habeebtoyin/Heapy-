import React from 'react';
import Header from './Components/Header';

function Stake() {
    return (
        <div className='Stake'>
            <Header />
            <main className='main'>
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
                            <button className='button-63'>Collect</button>
                        </div>
                    </div>
                    <div className='StartStakingDetails'>
                        START STAKING <br/>
                        <button className='button-63'>Connect Wallet</button>
                    </div>
                </div>

                <div className='Connect'>
                    <div className='Harvest'>
                        ELK EARNED <br/>
                        <div>
                            <span>
                                0.29741 <br />
                                ~0.59 USD
                            </span>
                            <button className='button-63'>Harvest</button>
                        </div>
                    </div>
                    <div className='Staked'>
                        KARMA STAKED <br/>
                        <div>
                            <span>
                                7,500.00000 <br />
                                ~277.14 USD
                            </span>
                            <span>
                                <button className='button-63'>-</button>
                                <button className='button-63'>+</button>
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Stake;