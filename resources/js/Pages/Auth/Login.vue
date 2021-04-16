<template>
    <div class="page page-center">
        <teleport to="head">
            <title>{{ setPageTitle('Login') }}</title>
        </teleport>
        <div class="container-tight py-4">
            <form class="card card-md" action="." method="get" autocomplete="off">
                <div class="card-body">
                    <h2 class="card-title text-center mb-4">Acesse sua conta</h2>
                    <div class="mb-3">
                        <label class="form-label">E-mail</label>
                        <input
                            type="email"
                            class="form-control"
                            placeholder="Digite seu e-mail"
                            v-model="email"
                        />
                    </div>
                    <div class="mb-2">
                        <label class="form-label">
                            Senha
                            <span class="form-label-description">
                                <a href="#">Esqueci minha senha</a>
                            </span>
                        </label>
                        <div class="input-group input-group-flat">
                            <input
                                :type="showPassword ? 'text' : 'password'"
                                class="form-control"
                                placeholder="Senha"
                                autocomplete="off"
                                v-model="password"
                            />
                            <span class="input-group-text" @click="togglePasswordVisibility">
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
                                <a
                                    v-else
                                    class="link-secondary"
                                    title="Esconder"
                                    data-bs-toggle="tooltip"
                                >
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
                        </div>
                    </div>
                    <div class="mb-2">
                        <label class="form-check">
                            <input type="checkbox" class="form-check-input" v-model="rememberMe" />
                            <span class="form-check-label">Continuar conectado</span>
                        </label>
                    </div>
                    <div class="form-footer">
                        <button type="submit" class="btn btn-primary w-100">Acessar</button>
                    </div>
                </div>
            </form>
            <div class="text-center text-muted mt-3">
                Não possui uma conta?
                <a href="#" tabindex="-1">Cadastre-se</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
type LoginComponentData = {
    email: string,
    password: string,
    rememberMe: boolean,
    showPassword: boolean
}
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Login',
    data: (): LoginComponentData => {
        return {
            email: '',
            password: '',
            rememberMe: false,
            showPassword: false
        }
    },
    methods: {
        togglePasswordVisibility(): void {
            this.showPassword = !this.showPassword
        }
    }
})
</script>