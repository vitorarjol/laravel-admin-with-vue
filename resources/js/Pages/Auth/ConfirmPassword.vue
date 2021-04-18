<template>
    <teleport to="head">
        <title>{{ setPageTitle('Confirmação de senha') }}</title>
    </teleport>
    <form class="card card-md" @submit.prevent="confirmPassword">
        <div class="card-body">
            <h2 class="card-title text-center mb-2">Área segura</h2>
            <p class="text-muted text-center mb-4">Confirme sua senha para acessar essa página.</p>
            <div class="mb-3">
                <label class="form-label">Senha</label>
                <input
                    type="password"
                    class="form-control"
                    :class="{ 'is-invalid': errors.password !== undefined }"
                    placeholder="Confirme sua senha"
                    v-model="form.password"
                />
                <div v-if="errors.password" class="invalid-feedback">{{ errors.password }}</div>
            </div>
            <div class="form-footer">
                <button type="submit" class="btn btn-primary w-100" :disabled="form.processing">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-check"
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
                        <path d="M5 12l5 5l10 -10" />
                    </svg>
                    Confirmar e continuar
                </button>
            </div>
        </div>
    </form>
</template>

<script name="ConfirmPassword" lang="ts" setup>
import { defineProps } from "vue";
import { useForm } from '@inertiajs/inertia-vue3'

const props = defineProps({
    errors: {
        type: Object,
        required: true
    }
})

const form = useForm({
    password: '',
})

const confirmPassword: () => void = () => {
    form.clearErrors()
    form.post(route('password.confirm'), {
        onFinish: () => this.form.reset(),
    })
}
</script>