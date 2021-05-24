<template>
    <div class="widget">
        <div style="z-index: 1!important;" class="widget-def widget-application">
            <form class="vertical" @submit="AdminLogin()">
                <div class="heading">
                    <span class="h2">Войти в админ-панель</span>
                </div>

                <label>Логин<input name="login" class="white" type="text" placeholder="Введите логин"></label>
                <label>Пароль<input name="password" class="white" type="password" placeholder="Введите логин"></label>

                <div class="doc">
                    <button>Погнали</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	methods: {
        ...mapActions([
            'AdminLogin'
        ])
    },
    created() {
        localStorage.clear()
        // console.log('Cleared');
    }
}
</script>

<style>

</style>