import { Link } from 'react-router-dom';

import '@/components/Footer/Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>&copy; {currentYear} Supersite, desenvolvido pela News API</p>

            <div className="footer__links">
                <Link to="/" className="footer__link">Início</Link>
                <a href="https://tripleten.com.br/" className="footer__link" target="_blank" rel="noopener noreferrer">
                    Tripleten
                </a>
                <a href="https://github.com/flpzht/news-explorer-frontend" className="footer__icon-link footer__icon-link_type-github" target="_blank" rel="noopener noreferrer" aria-label='GitHub'>
                    {/* Ícone direto no style */}
                </a>
                <a href="https://www.linkedin.com/in/felipecarvalhodesouzabarros/" className="footer__icon-link footer__icon-link_type-linkedin" target="_blank" rel="noopener noreferrer" aria-label='LinkedIn'>
                    {/* Ícone direto no style */}
                </a>
            </div>
        </footer>
    );
}

export default Footer;