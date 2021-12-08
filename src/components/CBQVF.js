import axios from 'axios';//peticiones
import React, { Component, useEffect, useState, useContext } from 'react';
import { usecontext } from '../Hooks/useContext';
import { useParams } from 'react-router';

const CBQVF = () => {
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

    const [CBQVA, setCBQVA] = useState(null)    

    const {datos, setDatos} = useContext(usecontext)
    


    const postUsers = async (data) => {
        return axios.post('http://localhost:4000/api/auth/register', data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = [CBQV1, CBQV2, CBQV3, CBQV4, CBQV5, CBQV6, CBQV7, CBQV8, CBQV9, CBQV10, CBQV11, CBQVO3, CBQVO6]
        setCBQVA({...datos,CBQVA:data})
       
    }
    useEffect(() => {
        console.log(CBQVA);
        if(CBQVA){
            postUsers(CBQVA).then(result => {
                console.log('usuario guardado');
            }
        );}
    }, [CBQVA])
    useEffect(() => {
        console.log(datos);
    }, [datos])


    return (
        <>
            <form class="body" onSubmit={handleSubmit}>
                <div  class="main-CBQ">
                    <div class="container-CBQ">
                        <div class="title-CBQ">CBQ-V</div>

                        <div class="question-container">
                            <div class="question-title">1. Enviarme mensajes amenazantes o insultantes por email</div>
                            <div class="question">
                                <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQV1(e.target.value) }} required>
                                    <option selected value="">Seleccione una opcion</option>
                                    <option value="1">Nunca</option>
                                    <option value="2">Alguna vez</option>
                                    <option value="3">A menudo</option>
                                </select>
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">2. Enviarme mensajes amenazantes o insultantes por teléfono móvil </div>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQV2(e.target.value) }} required>
                                <option selected value="">Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">3. Colgar imágenes mías en internet que pueden ser humillantes (por ejemplo, vistiéndome en el vestuario del gimnasio). En caso afirmativo describe que tipo de imágenes</div>
                            <textarea class="question-text-area" onChange={(e) => { setCBQVO3(e.target.value) }}></textarea>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQV3(e.target.value) }} required>
                                <option selected value="">Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">4. Escribir en internet bromas, rumores, chismes o comentarios que me ponían en ridículo</div>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQV4(e.target.value) }} required>
                                <option selected value="">Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">5. Conseguir mi contraseña (nicks, claves, etc.) y enviar mensajes en mi nombre por e-mail para dejarme mal ante los demás o crearme problemas con mis conocidos.</div>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQV5(e.target.value) }} required>
                                <option selected value="">Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">6. Grabarme en video o sacarme fotografías con el móvil mientras un grupo se ríe y me obliga a hacer algo humillante o ridículo. En caso afirmativo describe que tipo de imágenes</div>
                            <textarea class="question-text-area" onChange={(e) => { setCBQVO6(e.target.value) }}></textarea>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQV6(e.target.value) }} required="true">
                                <option selected value="">Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">7. Grabarme en video o sacarme fotografías con el móvil mientras alguien me golpea o me hace daño.</div>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQV7(e.target.value) }} required>
                                <option selected value="">Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">8. Difundir on line secretos, información comprometida o imágenes sobre mí</div>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQV8(e.target.value) }} required>
                                <option selected value="">Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">9. Apartarme de modo intencional de un grupo online (chats, listas de amigos, foros temáticos, etc.).</div>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQV9(e.target.value) }} required>
                                <option selected value="">Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">10. Enviarme mensajes insistentemente (de forma repetida) que incluyen amenazas o son muy intimidatorios</div>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQV10(e.target.value) }} required>
                                <option selected value="">Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">11. Grabarme en video o sacarme fotografías con el móvil en algún tipo de comportamiento de índole sexual</div>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQV11(e.target.value) }} required>
                                <option selected value="">Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="button-container-CBQ">
                                <input type="submit" value="Siguente" class="button-CBQ" onSubmit={handleSubmit}></input>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )

}

export default CBQVF;