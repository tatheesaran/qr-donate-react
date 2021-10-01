import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';



const Navigation = () => {
    return (
        <nav className={'indigo darken-1 darken-1 z-50'} style={{ position: 'fixed' }}>
            <div className={"nav-wrapper"}>
                <ul className={'left'}>
                    <li>
                        <Link to={'/'}>
                            <a className={'white-text text-4xl mt-3'}>QR-donate</a>
                        </Link>
                    </li>
                </ul>
                <ul className={'right'}>
                    <li>
                        <Link to={'/'}>
                            <a className={'white-text'}>หน้าหลัก</a>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'}>
                            <a className={'white-text'}>เกี่ยวกับ QR-Donate</a>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/howto'}>
                            <a className={'white-text'}>วิธีการใช้งาน</a>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/admin'}>
                            <a className={'white-tex '}><i className={'text-3xl fas fa-user-circle'}></i></a>
                        </Link>
                    </li>

                    {/* testpage */}
                    <li>
                        <Link to={'/remove'}>
                            <a className={'white-text'}>remove</a>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/add'}>
                            <a className={'white-tex '}>add</a>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/sto'}>
                            <a className={'white-tex '}>sto</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

    );
}
export default Navigation;