<template>
    <div class="widget">
        <transition name="menu-animation">
            <div v-if="Form.Menu" class="menu" @keydown.esc="something_in_your_methods">
                <a class="close-menu" href="#menu" @click="CloseForms()"></a>
                <div class="wrapper menu-links">
                    <a href="https://madad.studio" target="_blank" @click="CloseForms()">Студия Madad</a>
                    <a href="/#courses" @click="CloseForms()">Курсы</a>
                    <a href="/#reviews" @click="CloseForms()">Видеоотзывы</a>
                    <a href="#" @click="CloseForms(), OpenForm('Application')">Начать учиться</a>
                    <a href="https://t.me/weprouz_bot" target="_blank" @click="CloseForms()">Телеграм-блог</a>
                    <!-- <a @click="CloseForms()" href="/job">Работа в Wepro</a> -->
                    <a href="/students" @click="CloseForms()">Работы студентов</a>
                    <!-- <a @click="CloseForms()" href="/contacts">Контакты</a> -->
                </div>
                <div class="footer">
                    <div class="side elements-pc side-left bolder menu-footer">
                        <div class="side-left-left"><span>© 2021 Wepro. Все права защищены.</span></div>
                        <div class="side-left-right">
                            <span><a href="tel:+998 90 197 71-00">+998 90 197 71-00</a> | <a href="mailto:hi@wepro.uz">hi@wepro.uz</a></span>
                        </div>
                    </div>
                    <div class="side right-side t-20 menu-social">
                        <a href="https://www.instagram.com/wepro.uz/" target="_blank">Instagram</a>
                        <a href="https://t.me/weprouz" target="_blank">Telegram</a>
                        <a href="https://www.tiktok.com/" target="_blank">TikTok</a>
                        <a href="https://www.youtube.com/channel/UCF2_hjZ9xENm01x4gPoLakg" target="_blank">YouTube</a>
                        <a href="https://www.facebook.com/wepro.uz" target="_blank">Facebook</a>
                        <!-- <a href="#">Behance</a> -->
                    </div>
                </div>
            </div>
        </transition>
        <transition name="bottom-top">
            <div v-if="Form.Video" class="widget-def widget-video">
                <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen frameborder="0"
                        src="https://www.youtube.com/embed/sffj_Y1arJI?autoplay=1&mute=1&loop=1" title="YouTube video player"></iframe>
            </div>
        </transition>
        <transition name="bottom-top">
            <div v-if="Form.Success" class="widget-def widget-success">
                <div class="close" @click="CloseForms()">
                    <img alt="" src="@/assets/img/vector/close-b.svg">
                </div>
                <div class="heading">
                    <span class="h4">Спасибо. Мы получили заявку и ответим тебе в течение дня!</span>
                </div>
                <div class="wrapper">
                    <p class="t-20 bolder">Что дальше?</p>
                    <ul>
                        <li class="note">Мы позвоним тебе и уточним когда можно будет подойти в центр</li>
                        <li class="note">Ответим на все имеющиеся у тебя вопросы</li>
                        <li class="note">Поговорим о профессии, которая тебя интересует</li>
                        <li class="note">При необходимости - подберем удобный график обучения</li>
                    </ul>
                    <p class="note t-black">Обычно, мы отвечаем в течение дня. До встречи у нас, твой «Wepro» :)</p>

                    <div class="btns">
                        <button @click="CloseForms()">Закрыть</button>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="bottom-top">
            <div v-if="Error.Status" class="widget-def widget-success">
                <div class="close" @click="CloseForms()">
                    <img alt="" src="@/assets/img/vector/close-b.svg">
                </div>
                <div class="heading">
                    <span class="h2">{{ Error.Text }}</span>
                </div>
                <div class="wrapper">
                    <a href="tel:+998 90 197 71-00">
                        <p class="t-20">Пожалуйста, попробуйте еще раз или перезвоните по номеру <b class="blue">+998 90 197 71-00</b></p>
                    </a>

                    <div class="btns">
                        <button @click="CloseForms()">Закрыть</button>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="bottom-top">
            <div v-if="Form.Application" class="widget-def widget-application">
                <div class="close" @click="CloseForms()">
                    <img alt="" src="@/assets/img/vector/close-b.svg">
                </div>
                <form class="vertical">
                    <div class="heading">
                        <span class="h2">Записаться на курс</span>
                    </div>
                    <label>
                        Ваше имя
                        <input v-model.trim="form.name" class="white" name="name" placeholder="Введите свое имя" type="text">
                    </label>
                    <label>
                        Введите номер телефона
                        <input v-model="form.phone" class="white" name="phone" type="phone">
                    </label>
                    <label>
                        Выберите курс
                        <select v-model="form.course" class="white" name="course">
                            <option value="">Программирование</option>
                            <option value="">Дизайн</option>
                            <option value="">Маркетинг</option>
                        </select>
                    </label>
                    <label>
                        Предпочитаемый язык обучения
                        <select v-model="form.language" class="white" name="language">
                            <option value="russian">На русском языке</option>
                            <option value="uzbek">Ozbek tilida</option>
                        </select>
                    </label>
                    <div class="doc">
                        <button :disabled="form.phone.length <= 10" @click.prevent="submit">Отправить заявку</button>
                        <p>Нажимая на кнопку, я соглашаюсь на обработку персональных данных</p>
                    </div>
                </form>
            </div>
            <div v-if="Form.FreeLesson" class="widget-def widget-application">
                <div class="close" @click="CloseForms()">
                    <img alt="" src="@/assets/img/vector/close-b.svg">
                </div>
                <form class="vertical" @submit="Add({service: 'FreeLesson'})">
                    <div class="heading">
                        <span class="h2">Посетить бесплатный урок</span>
                    </div>
                    <input :value="new Date().toLocaleTimeString()" hidden name="time" type="text">
                    <input :value="new Date().toLocaleDateString()" hidden name="date" type="text">

                    <label>
                        Ваше имя
                        <input class="white" name="name" placeholder="Введите свое имя" type="text">
                    </label>
                    <label>
                        Введите номер телефона
                        <input v-model="form.phone" class="white" name="phone" type="phone">
                    </label>
                    <label>
                        Выберите курс
                        <select class="white" name="course">
                            <option value="">Программирование</option>
                            <option value="">Дизайн</option>
                            <option value="">Маркетинг</option>
                        </select>
                    </label>
                    <div class="doc">
                        <button>Отправить заявку</button>
                        <p>Нажимая на кнопку, я соглашаюсь на обработку персональных данных</p>
                    </div>
                </form>
            </div>
        </transition>
    </div>
</template>

<script>
// import InputMask from 'vue-input-mask';
import {mapActions, mapGetters} from 'vuex'

export default {
    data() {
        return {
            form: {
                phone: '+998 '
            }
        }
    },
    computed: {
        ...mapGetters([
            'Form',
            'Error',
            'AllData',
        ])
    },
    methods: {
        submit() {
            let data = Object.assign({}, this.form)
            data.date = new Date().toLocaleDateString()
            data.time = new Date().toLocaleTimeString()
            this.createApplication(data).then(() => {
                this.CloseForms()
            })
        },

        ...mapActions('applications', {createApplication: 'create'}),
        ...mapActions([
            'Add',
            'OpenForm',
            'ShowForm',
            'CloseForms',
        ])
    },
    components: {
        // InputMask
    }
}
</script>

<style>
.widget-success svg {
    width: 56px;
    height: 56px;
}
</style>