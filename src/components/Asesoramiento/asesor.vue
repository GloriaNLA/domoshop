<template>
<div>
    <div class="container p-5 bg-light">
        <div class="align-items-center border-0">
            <div class="row d-flex justify-content-start card-description">
                <div class="p-4 mx-2">
                    Hola!!! Queremos ofrecerte la mejor experiencia,
                    por eso puedes enviarnos una foto de tu espacio en el cual deseas implementar con esta tecnología,
                    nuestros asesores de orientaran a escoger productos que se ajustan a tus necesidades.
                </div>
            </div>
        </div>
        <div class="my-4">
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-6">
                    <label for="validationCustom01" class="form-label text-start">Nombres</label>
                    <input type="text" class="form-control" id="validationCustom01" placeholder="Nombre" v-model="form.name" required>
                    <div class="invalid-feedback">
                        Por favor ingrese su nombre.
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustomUsername" class="form-label text-start">Correo electrónico</label>
                    <div class="input-group">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" v-model="form.email" required>
                        <div class="invalid-feedback">
                            Por favor ingrese un correo electrónico válido.
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom05" class="form-label text-start">Celular</label>
                    <input type="text" class="form-control" id="validationCustom05" maxlength="9" v-model="form.phone" required>
                    <div class="invalid-feedback">
                        Por favor ingrese un número de teléfono válido.
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="floatingTextarea" class="form-label text-start">Comentarios</label>
                    <textarea class="form-control" placeholder="Deje aquí su comentario" id="floatingTextarea" v-model="form.message"></textarea>
                </div>
                <div class="col-md-6">
                    <label class="form-label text-start" for="inputGroupFile01">Imagen</label>
                    <input ref="fileInput" class="form-control" type="file" id="inputGroupFile01">
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit" @click="sendForm">Enviar</button>
                </div>
            </form>

        </div>
    </div>
</div>
</template>

    
<script>
export default {
    name: 'c-home-asesoramiento',
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                message: '',
                pdf: '',
            }
        }
    },
    methods: {
        sendForm: function () {
            Swal.fire({
                icon: "success",
                title: "En breve, nos estaremos comunincando con usted",
                showConfirmButton: false,
                timer: 2000,
            });
            this.$emit('mtdHidden');
            this.form = {
                name: null,
                email: null,
                phone: null,
                message: null
            }
            this.$refs.fileInput.value = '';

        }

    }
}
</script>

    
<style>
.card-description {
    border: 1px solid #13839c;
    border-radius: 10px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>
