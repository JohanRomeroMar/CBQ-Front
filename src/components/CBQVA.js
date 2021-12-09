import axios from 'axios';//peticiones
import React, { Component, useEffect, useState, useContext } from 'react';
import { usecontext } from '../Hooks/useContext';
import { useParams } from 'react-router';
import { Link, NavLink } from "react-router-dom";

const CBQVA = () => {
    //preguntas numericas
    const [CBQV1, setCBQV1] = useState()
    const [CBQV2, setCBQV2] = useState()
    const [CBQV3, setCBQV3] = useState()
    const [CBQV4, setCBQV4] = useState()
    const [CBQV5, setCBQV5] = useState()
    const [CBQV6, setCBQV6] = useState()
    const [CBQV7, setCBQV7] = useState()
    const [CBQV8, setCBQV8] = useState()
    const [CBQV9, setCBQV9] = useState()
    const [CBQV10, setCBQV10] = useState()
    const [CBQV11, setCBQV11] = useState()

    //preguntas abiertas
    const [CBQVO3, setCBQVO3] = useState()
    const [CBQVO6, setCBQVO6] = useState()

    const [CBQVA, setCBQVA] = useState()    

    const {id} = useParams();

    const getUser = async (id) => {
        return axios.get(`http://localhost:4000/api/auth/user/${id}`);
    }

    useEffect(() => {//solo ejecuta cuando entra
        getUser(id).then(result => {
            setCBQVA(result.data.CBQVA);
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
                <div  class="main-CBQ">
                    <div class="container-CBQ">
                        <div className="button">
                            <NavLink className="delete-b" to={`/actualizar/${id}`}>volver</NavLink>
                        </div>
                        <div class="title-CBQ">CBQ-V</div>

                        <div class="question-container">
                            <div class="question-title">1. Enviarme mensajes amenazantes o insultantes por email</div>
                            <div class="question">
                                {CBQVA &&

                                    <div>{CBQATransform(CBQVA[0])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">2. Enviarme mensajes amenazantes o insultantes por teléfono móvil </div>
                            <div class="question">
                                {CBQVA &&

                                    <div>{CBQATransform(CBQVA[1])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">3. Colgar imágenes mías en internet que pueden ser humillantes (por ejemplo, vistiéndome en el vestuario del gimnasio). En caso afirmativo describe que tipo de imágenes</div>
                            <div class="question">
                                {CBQVA &&

                                    <div>{CBQATransform(CBQVA[11])}</div> 
                                }
                            </div>
                            <div class="question">
                                {CBQVA &&

                                    <div>{CBQATransform(CBQVA[2])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">4. Escribir en internet bromas, rumores, chismes o comentarios que me ponían en ridículo</div>
                            <div class="question">
                                {CBQVA &&

                                    <div>{CBQATransform(CBQVA[3])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">5. Conseguir mi contraseña (nicks, claves, etc.) y enviar mensajes en mi nombre por e-mail para dejarme mal ante los demás o crearme problemas con mis conocidos.</div>
                            <div class="question">
                                {CBQVA &&

                                    <div>{CBQATransform(CBQVA[4])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">6. Grabarme en video o sacarme fotografías con el móvil mientras un grupo se ríe y me obliga a hacer algo humillante o ridículo. En caso afirmativo describe que tipo de imágenes</div>
                            <div class="question">
                                {CBQVA &&

                                    <div>{CBQATransform(CBQVA[12])}</div> 
                                }
                            </div>
                            <div class="question">
                                {CBQVA &&

                                    <div>{CBQATransform(CBQVA[5])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">7. Grabarme en video o sacarme fotografías con el móvil mientras alguien me golpea o me hace daño.</div>
                            <div class="question">
                                {CBQVA &&

                                    <div>{CBQATransform(CBQVA[6])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">8. Difundir on line secretos, información comprometida o imágenes sobre mí</div>
                            <div class="question">
                                {CBQVA &&

                                    <div>{CBQATransform(CBQVA[7])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">9. Apartarme de modo intencional de un grupo online (chats, listas de amigos, foros temáticos, etc.).</div>
                            <div class="question">
                                {CBQVA &&

                                    <div>{CBQATransform(CBQVA[8])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">10. Enviarme mensajes insistentemente (de forma repetida) que incluyen amenazas o son muy intimidatorios</div>
                            <div class="question">
                                {CBQVA &&

                                    <div>{CBQATransform(CBQVA[9])}</div> 
                                }
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">11. Grabarme en video o sacarme fotografías con el móvil en algún tipo de comportamiento de índole sexual</div>
                            <div class="question">
                                {CBQVA &&

                                    <div>{CBQATransform(CBQVA[10])}</div> 
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )

}

export default CBQVA;