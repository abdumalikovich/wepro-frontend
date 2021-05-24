<template>
    <footer>
        <div class="screen-map">
            <iframe
                allowfullscreen=""
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d872.8027196347981!2d66.92308655195943!3d39.64656884099486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d192aed22c9b3%3A0xa86ef894a370a710!2sWepro!5e0!3m2!1sru!2s!4v1621791017588!5m2!1sru!2s"
                style="border:0;"></iframe>
        </div>
        <div class="screen-form black">
            <div class="margin-small"></div>

            <div class="def-block-small">
                <div class="heading">
                    <span class="h2">Остались вопросы?</span>
                    <p>Мы перезвоним тебе и ответим на все оставшиеся вопросы.</p>
                </div>
                <div class="wrapper">
                    <form @submit="Add({ service: 'GetPresentation' })">
                        <input :value="new Date().toLocaleTimeString()" hidden name="time" type="text">
                        <input :value="new Date().toLocaleDateString()" hidden name="date" type="text">

                        <input name="name" placeholder="Имя и фамилия" type="text">
                        <input name="phone" placeholder="Номер телефона" type="text">
                        <select name="course">
                            <option value="Программирование">Программирование</option>
                            <option value="Дизайн">Дизайн</option>
                            <option value="Маркетинг">Маркетинг</option>
                        </select>
                        <button>Записаться</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="screen-footer black">
            <div class="margin-small"></div>

            <div class="wrapper def-block-small">
                <div class="top side">
                    <div class="left-side bolder">
                        <div class="row">
                            <a href="https://madad.studio" target="_blank" @click="CloseForms()">Студия Madad</a>
                            <a href="/#courses" @click="CloseForms()">Курсы</a>
                            <a href="/#reviews" @click="CloseForms()">Видеоотзывы</a>
                            <a href="#" @click="CloseForms(), OpenForm('Application')">Начать учиться</a>
                            <a href="https://t.me/weprouz_bot" target="_blank" @click="CloseForms()">Телеграм-блог</a>
                            <a href="/job" @click="CloseForms()">Работа в Wepro</a>
                            <a href="/test" @click="CloseForms()">Пройти тест</a>
                            <a href="/contacts" @click="CloseForms()">Контакты</a>
                        </div>
                        <div class="row">
                            <a v-for="item of courses" :key="item.key" href="#">{{ item.title }}</a>
                        </div>
                        <div class="row">
                            <a href="https://www.instagram.com/wepro.uz/" target="_blank">Instagram</a>
                            <a href="https://t.me/weprouz" target="_blank">Telegram</a>
                            <a href="https://www.tiktok.com/" target="_blank">TikTok</a>
                            <a href="https://www.youtube.com/channel/UCF2_hjZ9xENm01x4gPoLakg" target="_blank">YouTube</a>
                            <a href="https://www.facebook.com/wepro.uz" target="_blank">Facebook</a>
                        </div>
                    </div>
                </div>
                <div class="bottom side">
                    <span class="note">© 2021 «Wepro | Самарканд»</span>
                    <span class="note">v5.0</span>
                </div>
            </div>

        </div>
    </footer>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters('courses', {findCoursesInStore: 'find'}),

        courses() {
            return this.findCoursesInStore({}).data
        }
    },
    methods: {
        ...mapActions([
            'OpenForm',
            'GetData',
            'Add',
        ])
    }
}
</script>

<style>

</style>