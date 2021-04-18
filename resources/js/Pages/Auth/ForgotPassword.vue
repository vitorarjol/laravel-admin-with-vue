<template>
    <teleport to="head">
        <title>{{ setPageTitle('Recuperação de senha') }}</title>
    </teleport>
    <form class="card card-md" @submit.prevent="requestResetPasswordToken">
        <div class="card-body">
            <h2 class="card-title text-center mb-4">Recuperação de senha</h2>
            <p
                v-if="status === null"
                class="text-muted mb-4"
            >Digite abaixo o e-mail que você utiliza para acessar nossa plataforma para recuperar sua senha.</p>

            <div v-if="status" class="text-success mb-4" v-text="status"></div>

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
            <div class="form-footer">
                <button type="submit" class="btn btn-primary w-100" :disabled="form.processing">
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
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                    </svg>
                    Enviar nova senha por e-mail
                </button>
            </div>
        </div>
    </form>
    <div class="text-center text-muted mt-3">
        <inertia-link :href="route('login.show')" tabindex="-1">Clique aqui</inertia-link>&nbsp;para acessar o sistema.
    </div>
</template>

<script name="ForgotPassword" lang="ts" setup>
import { defineProps } from "vue";
import { useForm } from '@inertiajs/inertia-vue3'

const props = defineProps({
    errors: {
        type: Object,
        required: true
    },
    status: {
        type: String,
        required: false
    }
})

const form = useForm({
    email: '',
})

const requestResetPasswordToken: () => void = () => {
    form.clearErrors()
    form.post(route('password.email'))
}
</script>