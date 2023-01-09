import React from 'react';
import About from '../src/components/About';
import Footer from '../src/components/Footer';
import Info from '../src/components/Info';
import Interest from '../src/components/Interest';

export default function App(){
    return(
    <div className='container'>
        <div className='card-container'>
        <Info />
        <div className='card-info'>
        <About />
        <Interest />
        </div>
        <Footer />
        </div>
    </div>
    )
}