<template>
    <teleport to="head">
        <title>{{ setPageTitle('Recuperação de senha') }}</title>
    </teleport>
    <form class="card card-md" @submit.prevent="requestResetPasswordToken">
        <div class="card-body">
            <h2 class="card-title text-center mb-4">Quase lá! Confirme seu e-mail para continuar</h2>
            <p
                v-if="status === null"
                class="text-muted mb-2"
            >Bem-vindo ao nosso sistema. Antes de começar a utilizá-lo, precisamos que você clique no link de confirmação enviado em seu e-mail.</p>
            <p
                v-if="status === null"
                class="text-muted"
            >Caso você não tenha recebido nenhum e-mail, verifique sua caixa de spam ou clique no botão abaixo para reenviarmos a confirmação.</p>

            <div
                class="mb-4 text-success"
                v-if="verificationLinkWasSent"
            >Sucesso! Um novo e-mail de verificação foi enviado para o e-mail utilizado em seu cadastro.</div>

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
                    Reenviar link para confirmação da conta
                </button>
            </div>
        </div>
    </form>
    <div class="text-center text-muted mt-3">
        <inertia-link
            :href="route('logout')"
            as="button"
            method="post"
            class="btn btn-small"
            tabindex="-1"
        >Sair do sistema</inertia-link>
    </div>
</template>

<script name="VerifyEmail" lang="ts" setup>
import { defineProps, computed } from "vue";
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

const verificationLinkWasSent = computed(() => props.status === 'verification-link-sent')

const requestResetPasswordToken: () => void = () => {
    form.clearErrors()
    form.post(route('verification.send'))
}
</script>