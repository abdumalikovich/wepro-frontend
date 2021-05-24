<template>
    <header :class="{ dark }">
        <div class="side side-left">
            <router-link v-if="dark" :to="'/'" class="logo"><img src="@/assets/img/vector/logo-w.svg"></router-link>
            <a v-else class="logo" href="#"><img src="@/assets/img/vector/logo-b.svg"></a>
            <div class="links element-pc">
                <a href="#">Курсы</a>
                <a href="#">Преподаватели</a>
                <a class="new" href="/studends" target="_blank">Работы студентов<span>Beta</span></a>
                <!-- <a href="#" class="new">Вакансии<span>Beta</span></a> -->
            </div>
        </div>
        <div class="side side-right">
            <div class="links">
                <a href="tel:+998 90 197-71-00">+998 90 197-71-00</a>
            </div>
            <a class="open-menu" href="#menu" @click="OpenForm('Menu')"></a>
        </div>
    </header>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    methods: {
        ...mapActions([
            'OpenForm',
            'GetData',
            'Add'
        ])
    },
    props: ['dark']
}
</script>
