<template>
<div class="container">
    <div>
        <div class="row mt-5 bg-light cont-shopping">
            <div class="col-md-8 mt-3">
                <div class="card-resumen p-3" v-if="numPage == 1">
                    <div class="text-start">Ya esta a pocos pasos de terminar su compra.. </div>
                    <div class="fw-bold text-start">Completa la siguiente informacion </div>
                    <div class="my-4 border-2">
                        <form class="row g-3 needs-validation" novalidate>
                            <div class="col-md-4">
                                <label for="validationCustom01" class="form-label text-start-label">Nombres</label>
                                <input type="text" class="form-control" id="validationCustom01" placeholder="Nombre" required>
                                <div class="valid-feedback">
                                    ¡Correcto!
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom02" class="form-label text-start-label">Apellidos</label>
                                <input type="text" class="form-control" id="validationCustom02" placeholder="Apellido" required>
                                <div class="valid-feedback">
                                    ¡Correcto!
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustomUsername" class="form-label text-start-label">Correo</label>
                                <div class="input-group has-validation">
                                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                                    <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
                                    <div class="invalid-feedback">
                                        Por favor escriba un correo
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="validationCustom03" class="form-label">Direccion</label>
                                <input type="text" class="form-control" id="validationCustom03" required>
                                <div class="invalid-feedback">
                                    Por favor complete este campo
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom04" class="form-label">Cuidad</label>
                                <select class="form-select" id="validationCustom04" required>
                                    <option selected disabled value="">Selecciona...</option>
                                    <option>Chiclayo</option>
                                    <option>Lambayeque</option>
                                    <option>Ferreñafe</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please select a una cuidad
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationCustom05" class="form-label">Celular</label>
                                <input type="text" class="form-control" id="validationCustom05" maxlength="9" required>
                                <div class="invalid-feedback">
                                    Campo necesario
                                </div>
                            </div>
                            <div class="col-auto">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                                    <label class="form-check-label text-start-label text-primary" for="invalidCheck">
                                        Acepto los terminos y condiciones
                                    </label>
                                    <div class="invalid-feedback">
                                        Necesario
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" @click="sendForm" type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="card-resumen p-3" v-else>
                    <div class="text-start">Registre su medio de pago.. </div>
                </div>
            </div>
            <div class="col-md-4 mt-3">
                <div class="card-resumen p-3">
                    <blockquote class="blockquote">
                        <p>Resumen de tu compra</p>
                    </blockquote>
                    <hr>
                    <div>
                        <ol class="list-group list-group-numbered">
                            <li class="list-group-item d-flex justify-content-between align-items-start" v-for="(item) in dataShow">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">{{ item.name }}</div>
                                    Sub Total: S/. {{ item.subtotal }}.00
                                </div>
                                <span class="badge text-bg-primary rounded-pill">{{item.quantity}}</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'c-ShoppingCart-comprar',
    data(){
        return {
          numPage : 1
        }
    },
    props: {
        dataShow: {
            type: Array
        }
    },
    methods: {
        sendForm: function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.needs-validation');

            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
                form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }else{
                        this.numPage = 2;
                    }

                    form.classList.add('was-validated')
                }, false)
            })
        }
    }
}
</script>

<style>
.text-start-label {
    text-align: start !important;
}
</style>
