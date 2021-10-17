<template>
    <div class="widget">
        <div style="z-index: 1!important;" class="widget-def widget-application">
            <form class="vertical" @submit.prevent="AdminLogin()">
                <div class="heading">
                    <span class="h2">Войти в админ-панель</span>
                </div>

                <label>Логин<input v-model="user.login" name="login" class="white" type="text" placeholder="Введите логин"></label>
                <label>Пароль<input v-model="user.password" name="password" class="white" type="password" placeholder="Введите логин"></label>

                <div class="doc">
                    <button>Погнали</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'

export default {
    data() {
        return {
            user: {
                login: '',
                password: '',
            }
        }
    },
	methods: {
        ...mapActions([
            'AdminLogin'
        ]),
        // async handleSubmit() {
        //     const response = axios.post('/api/jwt', this.user)
        //         // .then()
        //         // .catch()

        //     console.log(response);
        // }
    },
    created() {
        // localStorage.clear()
        // console.log('Cleared');
    }
}
</script>

<style>

</style>