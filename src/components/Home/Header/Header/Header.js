import React from 'react';
import NavbarHeader from '../../../Shared/NavbarHeader/NavbarHeader';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';

const Header = () => {
    return (
        <section className="header">
            <NavbarHeader></NavbarHeader>
            <HeaderMain></HeaderMain>
        </section>
    );
};

export default Header;