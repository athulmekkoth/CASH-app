import React from 'react'
import "./Payments.css"
export const Payments = () => {
    return (
        <div className='pmain'>
            <div className='fp'>
                <div className='text1'>
                    <h1 style={{ color: "rgb(124,216,76)" }}>Payments</h1>
                    <p className='para' style={{ color: "black" }}>Send and receive money with anyone, donate  to an important cause, or tip professionals.
                        Just enter a $cashtag, phone number, or
                        scan their  QR code to pay.</p>
                </div>
                <div>
                    <img className='img' src="/payments-phone 1.png" alt='phone' />
                </div>
                <div>
                    <img src="/payments-pillar-medium (1).png" alt="pa" />
                </div>

            </div>
            <div className='sec'>
                <img src="/payments-pillar-large.png" alt='large' />
                <img src="/payments-column.png" alt='large' />
            </div>
            <div className='tec'>
                <img src="/payments-pillar-medium (1).png" alt="pa" />
               <div>
                 <img src="/payments-pillar-small.png" alt="pa" />
                <img src="/payments-pillar-medium (1).png" alt="pa" />
            </div>
               </div>
            <div className='fec'>
            <img className='pic' src="/payments-column (1).png" alt="pa" />
                <div>
                <img className='spic' src="/payments-pillar-medium (1).png" alt="pa" />
                <img  className='pic' src="/payments-column.png" alt="pa" />
            </div>
                </div>
            
            </div>
           



    )
}
