<template>
<div class="container">
    <div>
        <div class="row mt-5 bg-light cont-comprar">
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
                                <label for="validationCustom04" class="form-label">Ciudad</label>
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
                    <div class="row">
                        <div class="col-auto my-2">
                        <button class="btn btn-primary btn-sm" @click="retroceder">
                            <i class="fas fa-arrow-circle-left"></i>
                        </button>
                    </div>
                    </div>
                    <div class="text-start">Registre su medio de pago.. </div>
                    <div class="fw-bold text-start">Finalizar venta</div>
                    <div class="my-4 border-2">
                        <form class="row g-3 needs-validation1" novalidate>
                            <div class="col-md-4">
                                <label for="validationCustom04" class="form-label">Tipo de Documento</label>
                                <select class="form-select" id="validationCustom04" required>
                                    <option selected disabled value="">Selecciona...</option>
                                    <option>DNI</option>
                                    <option>Carnet</option>
                                    <option>Pasaporte</option>
                                </select>
                                <div class="invalid-feedback">
                                    Please selecciona una opcion
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom02" class="form-label text-start-label">Número de Documento</label>
                                <input type="text" class="form-control" id="validationCustom02" placeholder="75560943" required>
                                <div class="valid-feedback">
                                    ¡Correcto!
                                </div>
                            </div>
                            <div class="col-md-4">
                                <label for="validationCustom02" class="form-label text-start-label">Numero de Celular</label>
                                <input type="text" class="form-control" id="validationCustom02" placeholder="906193223" maxlength="9" required>
                                <div class="valid-feedback">
                                    ¡Correcto!
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="payment-options">
                                    <h4>Seleccione un método de pago</h4>
                                    <div>
                                        <input type="radio" id="izipay" name="payment-method" class="form-check-input" value="izipay" @change="selectPaymentMethod">
                                        <img class="payment-icons-img" src="@/assets/izipaylogo.jpg" alt="izipay">

                                    </div>
                                    <div class="my-3">
                                        <input type="radio" id="paypal" name="payment-method" class="form-check-input" value="paypal" @change="selectPaymentMethod">
                                        <img class="payment-icons-img" src="@/assets/paypal.jpg" alt="PayPal">
                                    </div>
                                    <div class="qr-code mb-2">
                                        <img v-if="selectedMethod === 'izipay'" class="img-qr" src="@/assets/izipay_qr_code.jpg" alt="Código QR Visa">
                                        <img v-else-if="selectedMethod === 'paypal'" class="img-qr" src="@/assets/paypal_qr_code.png" alt="Código QR Mastercard">
                                    </div>
                                    <div>
                                        <h2>Total: S/. {{ total }}</h2>
                                    </div>
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
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                                    <label class="form-check-label text-start-label text-primary" for="invalidCheck">
                                        No se aceptan devoluciones
                                    </label>
                                    <div class="invalid-feedback">
                                        Campo Necesario
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary" @click="sendFormPay" type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
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
                    <div class="mt-2">
                        <button class="btn btn-success w-100">Total: S/. {{ total }}</button>
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
    data() {
        return {
            numPage: 1,
            selectedMethod: null
        }
    },
    props: {
        dataShow: {
            type: Array
        }
    },
    computed: {
        total() {
            let total = 0;
            this.dataShow.forEach(item => {
                total += item.price * item.quantity;
            });
            return total.toFixed(2);;
        },
    },
    methods: {
        selectPaymentMethod(event) {
            this.selectedMethod = event.target.value;
        },
        sendForm: function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.needs-validation');

            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
                form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    } else {
                        this.numPage = 2;
                    }

                    form.classList.add('was-validated')
                }, false)
            })
        },
        sendFormPay: function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.needs-validation1');

            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
                form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    } else {
                        Swal.fire({
                            icon: "success",
                            title: "Pago registrado",
                            showConfirmButton: false,
                            timer: 2000,
                        });
                    }

                    form.classList.add('was-validated')
                }, false)
            })
        },
        retroceder: function () {
            this.numPage = 1;
        },
        mtdbackhome: function () {
            this.$emit('mtdbackhome');
        }
    }
}
</script>

<style>
.cont-comprar {
    height: 60em !important;
}
.text-start-label {
    text-align: start !important;
}

.payment-options {
    text-align: center;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.payment-options h2 {
    margin-bottom: 10px;
    font-size: 1.5em;
}

.payment-icons {
    display: flex;
    justify-content: center;
    align-items: center;
}

.payment-icons-img {
    width: 80px;
    margin: 0 10px;
}
.img-qr {
    width: 120px;
    margin: 0 10px;
}
</style>
