import Header from '../../Componentes/Header';
import Banner from '../../Componentes/Banner';
import Content from '../../Componentes/content';
import ContentFinal from '../../Componentes/content-final';
import Footer from '../../Componentes/Footer';

import './style-page1.css';

export default function Page1 () {
    return (
        <body>
            <Header/>
                <Banner />
                <Content/>;
                <ContentFinal/>
                
            <Footer/>
        </body>
    )
}