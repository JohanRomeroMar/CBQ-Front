import axios from 'axios';//peticiones
import React, { Component, useEffect, useState, useContext } from 'react';
import { usecontext } from '../Hooks/useContext';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

const CBQA = () => {

    const [CBQA, setCBQA] = useState()

    const {id} = useParams();

    const getUser = async (id) => {
        return axios.get(`http://localhost:4000/api/auth/user/${id}`);
    }

    useEffect(() => {//solo ejecuta cuando entra
        getUser(id).then(result => {
            setCBQA(result.data.CBQA);
        })
    }, [])

    const CBQATransform = (data) =>{
        if(data === "1"){
            return 'Nunca'
        }
        if(data === "2"){
            return 'Alguna vez'
        }
        if(data === "3"){
            return 'A menudo'
        }
        return data
    }

    return (
        <>
            <form class="body" >
                <div class="main-CBQ">
                    <div class="container-CBQ">
                        <div className="button">
                            <NavLink className="delete-a" to={`/actualizar/${id}`}>volver</NavLink>
                        </div>
                        <div class="title-CBQ">CBQ</div>

                        <div class="question-container">
                            <div class="question-title">1. Mantener peleas y discusiones “online”, empleando insultos, etc. por medio de
                                mensajes electrónicos.
                            </div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[0])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">2. Enviar mensajes amenazantes o insultantes por e-mail</div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[1])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">3. Enviar mensajes amenazantes o insultantes por teléfono móvil</div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[2])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">4. Colgar imágenes en internet de un conocido/a o compañero/a que pueden ser
                                humillantes (por ejemplo,
                                de
                                cuando se estávistiendo en el vestuario del gimnasio). En caso afirmativo describe que tipo de imágenes
                            </div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[17])}</div> 
                                }
                            </div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[3])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">5. Enviar enlaces de imágenes humillantes a otras personas para que las puedan
                                ver. En caso afirmativo
                                describe: </div>
                                <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[18])}</div> 
                                }
                            </div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[4])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">6. Escribir bromas, rumores, chismes o comentarios que ponían en ridículo a un
                                compañero/a en internet
                            </div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[5])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">7. Enviar enlaces donde aparecían rumores, chismes etc. de un compañero/a o
                                conocido/a a otras personas
                                para
                                que las leyeran. </div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[6])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">8. Conseguir la contraseña (nicks, claves, etc.) de otra persona y enviar
                                mensajes con su nombre por
                                e-mail
                                que le podían hacer quedar mal ante los demás o crearle problemas con sus conocidos. </div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[7])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">9.Grabar video o tomar fotografías con el móvil mientras un grupo se ríe y
                                obliga a otra persona a
                                hacer
                                algo humillante o ridículo En caso afirmativo describe: </div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[19])}</div> 
                                }
                            </div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[8])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">10.Enviar esas imágenes a otras personas </div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[9])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">11.Grabar video o tomar fotografías con el móvil mientras alguien golpea o hace
                                daño a otra persona En
                                caso
                                afirmativo describe: </div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[20])}</div> 
                                }
                            </div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[10])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">12. Enviar esas imágenes grabadas a otras personas </div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[11])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">13. Difundir online secretos, información comprometida o imágenes de alguien.
                            </div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[12])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">14. Apartar a alguien de modo intencional de un grupo online (chats, listas de
                                amigos, foros temáticos,
                                etc.).</div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[13])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">15. Enviar insistentemente (de forma repetida) mensajes que incluyen amenazas o
                                que son muy
                                intimidatorios.
                            </div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[14])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">16. Grabar video o tomar fotografías a algún compañero/a con móvil en algún tipo
                                de comportamiento de
                                índole
                                sexual </div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[15])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">17. Enviar esas imágenes a otras personas </div>
                            <div class="question">
                                {CBQA &&

                                    <div>{CBQATransform(CBQA[16])}</div> 
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )

}

export default CBQA;