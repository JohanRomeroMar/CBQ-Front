import React, { Component } from 'react';


class Register extends Component {
    render() {
        return (
            <><div class="body-register">
                <div class="container-register">
                    <div class="title2">Registro</div>
                    <div class="content">
                        <form action="#">
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Nombres</span>
                                    <input type="text" placeholder="Ingresa tus nombres" required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Apellidos</span>
                                    <input type="text" placeholder="Ingresa tus apellidos" required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Tipo de documento</span>
                                    <select required>
                                        <option selected value="">Tipo de documento</option>
                                        <option value="1">Tarjeta de identidad</option>
                                        <option value="2">Cedula de ciudania</option>
                                        <option value="3">Pasaporte</option>
                                    </select>
                                </div>
                                <div class="input-box">
                                    <span class="details">Documento</span>
                                    <input type="text" placeholder="Ingresa tu documento" required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Fecha de nacimiento</span>
                                    <input type="date" required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Correo electrónico</span>
                                    <input type="email" placeholder="Ingresa tu correo electrónico" required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Número de celular</span>
                                    <input type="text" placeholder="Ingresa tu número de celular" required></input>
                                </div>

                                <div class="input-box">
                                    <span class="details">Genero</span>
                                    <select aria-label="Genero" required>
                                        <option selected value="">Genero</option>
                                        <option value="1">Masculino</option>
                                        <option value="2">Femenino</option>
                                        <option value="3">Prefiero no decirlo</option>
                                    </select>
                                </div>
                            </div>
                            <div class="button">
                                <input type="submit" value="Registrar"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Register;