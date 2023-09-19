import React from 'react'
import "./Footer.css"
export const Footer = (props) => {

    return (
        <div className='footer'>
            <div className={props.color ? "black" : "white"}>
                <div className='bt' >
                    <img src="/play.png" alt='gplay' />
                    <p className='b'>GOOGLE PLAY</p>
                </div>
                <div className='bt'>
                    <img src="apple.png" alt='apple' />
                    <p>APP STORE</p>
                </div>
            </div>

            <div className='m2'>
                <div className='text'>
                    <p>Brokerage services by Cash App Investing LLC, member FINRA / SIPC.
                        See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is
                        not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</p>
                </div>
                <div className='ic'>
                    <img src="/twitch.png" alt='apple' />
                    <img src="/twitter.png" alt='apple' />
                    <img src="/icons8-instagram-50.png" alt='apple' />
                </div>
            </div>

        </div>
    )
}
