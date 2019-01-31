import React from "react";

import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCompass from "@fortawesome/fontawesome-free-solid/faCompass";
import faPhone from "@fortawesome/fontawesome-free-solid/faPhone";
import faClock from "@fortawesome/fontawesome-free-solid/faClock";
import faEnvelope from "@fortawesome/fontawesome-free-solid/faEnvelope";

const Footer = () => {
    return (
        <footer className="bck_b_dark">
            <div className="container">
                <div className="logo">Waves</div>
                <div className="wrapper">
                    <div className="left">
                        <h2>Informações de Contato</h2>
                        <div className="business_nfo">
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faCompass}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Endereço</div>
                                    <div>Avenida 123, nº 456</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Telefone</div>
                                    <div>+55 51 998331155</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faClock}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Atendimento</div>
                                    <div>Seg-Sex / 9h-18h</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="icon"
                                />
                                <div className="nfo">
                                    <div>Contato</div>
                                    <div>leonardoredin@outlook.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left">
                        <h2>Acompanhe as novidades!</h2>
                        <div>
                            <div>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Iste eius minus deleniti modi
                                necessitatibus aut, officia veritatis? Libero
                                modi dolorem eligendi qui reiciendis blanditiis
                                et facilis asperiores, beatae molestiae tempora!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
