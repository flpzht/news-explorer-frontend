import aboutPhoto from '@/images/about-photo.svg';

import '@/components/About/About.css';

function About() {
    return (
        <section className="about">
            <img className="about__photo" src={aboutPhoto} alt="Foto de uma pessoa lendo notícias" />
            <div className="about__content">
                <h2 className="about__title">Sobre o autor</h2>
                <p className="about__text">
                    Esse bloco descreve o autor do projeto. Aqui você deve indicar seu nome,
                    o que você faz e quais tecnologias de desenvolvedor você conhece.
                </p>
                <p className="about__text">
                    Você também pode falar sobre sua experiência com o Practicum, o que
                    aprendeu lá e como pode ajudar clientes em potencial.
                </p>
            </div>
        </section>
    );
}

export default About;