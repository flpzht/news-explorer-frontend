import AboutAnimation from '@/components/AboutAnimation/AboutAnimation';

import '@/components/About/About.css';

function About() {
    return (
        <section className="about">
            <div className="about__container">                
                <div className="about__photo">
                    <AboutAnimation />
                </div>
                <div className="about__content">
                    <h2 className="about__title">Sobre o autor</h2>
                    <p className="about__text">
                        Economista de formação, construí minha trajetória profissional analisando dados,
                        otimizando processos em FP&A/Controladoria e gerando inteligência de negócios (BI).
                        Essa vivência me deu uma base sólida para resolver problemas complexos e entender o impacto real da tecnologia no negócio.
                    </p>
                    <p className="about__text">
                        Hoje, canalizo essa capacidade analítica para a engenharia de software, construindo soluções completas no ecossistema Web.
                        O que estou construindo e estudando:
                    </p>
                        <ul className="about__list">
                            <li><strong>Front-end:</strong> Interfaces modernas, responsivas e acessíveis com React, JavaScript (ES6+) e CSS3.</li>
                            <li><strong>Back-end:</strong> APIs e serviços com Node.js e arquitetura limpa.</li>
                            <li><strong>Boas práticas:</strong> Clean Code, versionamento estruturado com Git e código escalável.</li>
                        </ul>

                </div>
            </div>
        </section>
    );
}

export default About;