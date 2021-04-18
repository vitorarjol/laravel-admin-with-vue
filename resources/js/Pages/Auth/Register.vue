<template>
    <teleport to="head">
        <title>{{ setPageTitle('Crie sua conta') }}</title>
    </teleport>
    <form class="card card-md" @submit.prevent="registerUser">
        <div class="card-body">
            <h2 class="card-title text-center mb-4">Cadastre-se para utilizar o sistema</h2>
            <div class="mb-3">
                <label class="form-label">Nome</label>
                <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': errors.name !== undefined }"
                    placeholder="Digite seu nome completo"
                    v-model="form.name"
                />
                <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
            </div>
            <div class="mb-3">
                <label class="form-label">E-mail</label>
                <input
                    type="email"
                    class="form-control"
                    :class="{ 'is-invalid': errors.email !== undefined }"
                    placeholder="Digite seu e-mail"
                    v-model="form.email"
                />
                <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
            </div>
            <div class="mb-2">
                <label class="form-label">Senha</label>
                <div class="input-group input-group-flat">
                    <input
                        :type="showPassword ? 'text' : 'password'"
                        class="form-control"
                        :class="{ 'is-invalid': errors.password !== undefined }"
                        placeholder="Senha"
                        autocomplete="off"
                        v-model="form.password"
                    />
                    <span
                        class="input-group-text"
                        :style="{ borderColor: errors.password !== undefined ? '#d63939' : '#dadcde' }"
                        @click="togglePasswordVisibility"
                    >
                        <a
                            class="link-secondary"
                            title="Exibir"
                            data-bs-toggle="tooltip"
                            v-if="showPassword"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <circle cx="12" cy="12" r="2" />
                                <path
                                    d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"
                                />
                            </svg>
                        </a>
                        <a v-else class="link-secondary" title="Esconder" data-bs-toggle="tooltip">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-eye-off"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="3" y1="3" x2="21" y2="21" />
                                <path d="M10.584 10.587a2 2 0 0 0 2.828 2.83" />
                                <path
                                    d="M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341"
                                />
                            </svg>
                        </a>
                    </span>
                    <div v-if="errors.password" class="invalid-feedback">{{ errors.password }}</div>
                </div>
            </div>
            <div class="form-footer">
                <button
                    type="submit"
                    class="btn btn-primary w-100"
                    :disabled="form.processing"
                >Concluir cadastro</button>
            </div>
        </div>
    </form>
    <div class="text-center text-muted mt-3">
        Já possui uma conta?
        <inertia-link :href="route('login.show')" tabindex="-1">Acesse</inertia-link>
    </div>
</template>

<script name="Register" lang="ts" setup>
import { ref, defineProps } from "vue";
import { useForm } from '@inertiajs/inertia-vue3'

const props = defineProps({
    errors: {
        type: Object,
        required: true
    }
})

const form = useForm({
    name: '',
    email: '',
    password: '',
})
const showPassword = ref(false)

const registerUser: () => void = () => {
    form.clearErrors()
    form.post(route('register'), {
        preserveScroll: true,
        onFinish: () => form.reset('password'),
    })
}

const togglePasswordVisibility: () => void = () => {
    showPassword.value = !showPassword.value
}
</script>