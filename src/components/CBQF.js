import axios from 'axios';//peticiones
import React, { Component, useEffect, useState, useContext } from 'react';
import { usecontext } from '../Hooks/useContext';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";

const CBQF = () => {
    const [CBQ1, setCBQ1] = useState()
    const [CBQ2, setCBQ2] = useState()
    const [CBQ3, setCBQ3] = useState()
    const [CBQ4, setCBQ4] = useState()
    const [CBQ5, setCBQ5] = useState()
    const [CBQ6, setCBQ6] = useState()
    const [CBQ7, setCBQ7] = useState()
    const [CBQ8, setCBQ8] = useState()
    const [CBQ9, setCBQ9] = useState()
    const [CBQ10, setCBQ10] = useState()
    const [CBQ11, setCBQ11] = useState()
    const [CBQ12, setCBQ12] = useState()
    const [CBQ13, setCBQ13] = useState()
    const [CBQ14, setCBQ14] = useState()
    const [CBQ15, setCBQ15] = useState()
    const [CBQ16, setCBQ16] = useState()
    const [CBQ17, setCBQ17] = useState()

    const history = useHistory()

    const [CBQA, setCBQA] = useState(null)

    const { datos, setDatos } = useContext(usecontext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = [CBQ1, CBQ2, CBQ3, CBQ4, CBQ5, CBQ6, CBQ7, CBQ8]
        setCBQA({ ...datos, CBQA: data })

    }
    useEffect(() => {
        console.log(CBQA);
        if (CBQA) {
            setDatos(CBQA);
            history.replace('/CBQV')
        }
    }, [CBQA])
    useEffect(() => {
        console.log(datos);
    }, [datos])


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div class="main-CBQ">
                    <div class="container-CBQ">
                        <div class="title-CBQ">CBQ</div>

                        <div class="question-container">
                            <div class="question-title">1. Mantener peleas y discusiones “online”, empleando insultos, etc. por medio de
                                mensajes electrónicos.
                            </div>
                            <div class="question">
                                <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQ1(e.target.value) }} required>
                                    <option selected>Seleccione una opcion</option>
                                    <option value="1">Nunca</option>
                                    <option value="2">Alguna vez</option>
                                    <option value="3">A menudo</option>
                                </select>
                            </div>
                        </div>
                        <div class="question-container">
                            <div class="question-title">2. Enviar mensajes amenazantes o insultantes por e-mail</div>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQ2(e.target.value) }} required>
                                <option selected>Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">3. Enviar mensajes amenazantes o insultantes por teléfono móvil</div>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQ3(e.target.value) }} required>
                                <option selected>Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">4. Colgar imágenes en internet de un conocido/a o compañero/a que pueden ser
                                humillantes (por ejemplo,
                                de
                                cuando se estávistiendo en el vestuario del gimnasio). En caso afirmativo describe que tipo de imágenes
                            </div>
                            <textarea class="question-text-area"></textarea>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQ4(e.target.value) }} required>
                                <option selected>Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">5. Enviar enlaces de imágenes humillantes a otras personas para que las puedan
                                ver. En caso afirmativo
                                describe: </div>
                            <textarea class="question-text-area"></textarea>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQ5(e.target.value) }} required>
                                <option selected>Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">6. Escribir bromas, rumores, chismes o comentarios que ponían en ridículo a un
                                compañero/a en internet
                            </div>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQ6(e.target.value) }} required>
                                <option selected>Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">7. Enviar enlaces donde aparecían rumores, chismes etc. de un compañero/a o
                                conocido/a a otras personas
                                para
                                que las leyeran. </div>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQ7(e.target.value) }} required>
                                <option selected>Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">8. Conseguir la contraseña (nicks, claves, etc.) de otra persona y enviar
                                mensajes con su nombre por
                                e-mail
                                que le podían hacer quedar mal ante los demás o crearle problemas con sus conocidos. </div>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => { setCBQ8(e.target.value) }} required>
                                <option selected>Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">9.Grabar video o tomar fotografías con el móvil mientras un grupo se ríe y
                                obliga a otra persona a
                                hacer
                                algo humillante o ridículo En caso afirmativo describe: </div>
                            <textarea class="question-text-area"></textarea>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">10.Enviar esas imágenes a otras personas </div>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">11.Grabar video o tomar fotografías con el móvil mientras alguien golpea o hace
                                daño a otra persona En
                                caso
                                afirmativo describe: </div>
                            <textarea class="question-text-area"></textarea>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">13.Difundir online secretos, información comprometida o imágenes de alguien.
                            </div>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">14.Apartar a alguien de modo intencional de un grupo online (chats, listas de
                                amigos, foros temáticos,
                                etc.).</div>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">15.Enviar insistentemente (de forma repetida) mensajes que incluyen amenazas o
                                que son muy
                                intimidatorios.
                            </div>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">16.Grabar video o tomar fotografías a algún compañero/a con móvil en algún tipo
                                de comportamiento de
                                índole
                                sexual </div>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="question-container">
                            <div class="question-title">17.Enviar esas imágenes a otras personas </div>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Seleccione una opcion</option>
                                <option value="1">Nunca</option>
                                <option value="2">Alguna vez</option>
                                <option value="3">A menudo</option>
                            </select>
                        </div>
                        <div class="button-container-CBQ">
                            <input type="submit" value="Siguiente" class="button-CBQ" onSubmit={handleSubmit}></input>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )

}

export default CBQF;