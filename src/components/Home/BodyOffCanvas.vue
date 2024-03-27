<template>
<div>
    <div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="d-flex">
            <div class="toast-body">
                Hola!!! Queremos ofrecerte la mejor experiencia,
                por eso puedes enviarnos una foto de tu espacio en el cual deseas implementar con esta tecnología,
                nuestros asesores de orientaran a escoger productos que se ajustan a tus necesidades.
            </div>
        </div>
    </div>
    <div class="my-4">
        <form class="row g-2 needs-validation" novalidate>
            <div class="col-md-6">
                <label for="validationCustom01" class="form-label text-start-label">Nombres</label>
                <input type="text" class="form-control" id="validationCustom01" placeholder="Nombre" required>
                <div class="valid-feedback">
                    ¡Correcto!
                </div>
            </div>
            <div class="col-md-6">
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
                <label for="validationCustom05" class="form-label">Celular</label>
                <input type="text" class="form-control" id="validationCustom05" maxlength="9" required>
                <div class="invalid-feedback">
                    Campo necesario
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" id="liveToastBtn" @click="sendForm" type="submit">Enviar</button>
            </div>
        </form>
    </div>
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <img :src="'../../assets/logoempire.jpg'" class="rounded me-2" alt="logo">
                <strong class="me-auto">DomoEmpire</strong>
                <small>1 mins antes</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                Gracias, en breve nos pondremos en contacto contigo.
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'c-home-BodyOffCanvas',
    data() {
        return {

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
                    } else {
                        this.$emit('mtdHidden')
                    }

                    form.classList.add('was-validated')
                }, false)
            })
        },
        
    }
}
</script>
