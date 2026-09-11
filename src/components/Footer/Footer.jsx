import { Link } from 'react-router-dom';

import '@/components/Footer/Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer__copyright">&copy; {currentYear} Supersite, desenvolvido pela News API</p>

            <div className="footer__links">
                <a className="footer__link" href="#">Início</a>
                <a className="footer__link" href="https://tripleten.com.br/" target="_blank" rel="noopener noreferrer">
                    Tripleten
                </a>
                <a className="footer__icon-link footer__icon-link_type-github" href="https://github.com/flpzht/news-explorer-frontend" target="_blank" rel="noopener noreferrer" aria-label='GitHub'></a>
                <a className="footer__icon-link footer__icon-link_type-linkedin" href="https://www.linkedin.com/in/felipecarvalhodesouzabarros/" target="_blank" rel="noopener noreferrer" aria-label='LinkedIn'></a>
            </div>
        </footer>
    );
}

export default Footer;