<template>
    <div class="body-home">
        <layoutHeader/>

        <div class="screen-one">
            <div class="wrapper">
                <div class="side-left">
                    <!-- {{proxy}} -->
                    <h1 class="elements-mobile">Учим IT-профессиям. Программирование, дизайн и маркетинг.</h1>
                    <h1 class="elements-pc">Учим актуальным <br> профессиям в IT</h1>
                    <h3 class="elements-pc corp t-corp">Дизайн, маркетинг и программирование.</h3>
                    <ul class="check">
                        <li>Современные условия для учебы</li>
                        <li>Максимум практики и минимум теории</li>
                        <li>Работа над реальными проектами</li>
                        <li>Мастер-классы для учащихся</li>
                        <li>Пожизненный доступ к видеоурокам</li>
                    </ul>
                    <div class="btns">
                        <button class="ga-click-openApplication" @click="OpenForm('Video')">Посмотреть ролик о нас</button>
                        <button class="transparent ga-click-openApplication" @click="OpenForm('Application')">Записаться на курс</button>
                        <!-- <button @click="OpenForm('FreeLesson')" class="transparent ga-click-freeLesson">Посетить бесплатный урок</button> -->
                    </div>
                </div>
                <!-- <div class="side-right"></div> -->
            </div>
            <img class="elements-mobile" src="@/assets/img/pages/home/m-bg.webp">
        </div>

        <!-- <div class="margin"></div>

        <div class="screen-who-we-are def-block">
            <div class="heading">
                <span class="h2">О чем мы</span>
            </div>
            <div class="wrapper list-4">
                <p>Чего вы достигните благодаря Wepro</p>
                <p>Воможность найти себя</p>
                <p>Заработок в сфере IT</p>
                <p>Воможность найти себя</p>
            </div>
        </div> -->

        <div id="courses" class="margin"></div>

        <layoutCourses/>

        <div class="margin"></div>

        <div class="screen-get-presentation black">
            <div class="margin"></div>

            <div class="def-block-small">
                <div class="heading">
                    <span class="h2">Получи бесплатную <br> онлайн-презентацию курса</span>
                    <p>Мы отправим тебе видеоролик с презентацией урока, где будет рассказано что тебя ждет на курсе</p>
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

            <div class="margin"></div>
        </div>

        <div id="reviews" class="margin"></div>

        <div class="screen-reviews def-block">
            <div class="heading">
                <span class="h2">Видеоотзывы студентов</span>
            </div>
            <div class="wrapper">
                <div class="items list-4">
                    <iframe v-for="item of reviews" :key="item.key" :src="item.video + '?autoplay=1&mute=1&loop=1'" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                            frameborder="0" title="YouTube video player"></iframe>
                </div>
            </div>
            <!-- <div @click="ShowGallery = !ShowGallery" class="down t-20" v-if="!ShowGallery">Больше отзывов</div> -->
        </div>

        <div class="margin"></div>

        <div class="def-block screen-center def-block-small">
            <div class="heading centered">
                <span class="h2">Карта учебного центра</span>
                <p>Тут ты можешь увидеть общий вид, кабинеты и лаунж-зоны</p>
            </div>
            <div class="wrapper">
                <img alt="" src="@/assets/img/pages/center.webp">
                <svg height="821" viewBox="0 0 1460 821" width="1460" xmlns="http://www.w3.org/2000/svg">
                    <g id="Сгруппировать_11533" data-name="Сгруппировать 11533" transform="translate(-3640 22072)">
                        <rect id="Прямоугольник_1468" data-name="Прямоугольник 1468" fill="#fff" height="821" opacity="0" transform="translate(3640 -22072)" width="1460"/>
                        <g id="Сгруппировать_11532" data-name="Сгруппировать 11532" transform="translate(103 -1996)">
                            <g id="Сгруппировать_11532-2" data-name="Сгруппировать 11532">
                                <path id="Контур_16400" d="M3928.479-19989.787l-48.635,383.121H3665.456l74.441-383.121Z" data-name="Контур 16400" fill="rgba(0,77,255,0.35)" opacity="0.63"
                                      stroke="#004dff" stroke-width="5"/>
                                <path id="Контур_16401" d="M3939.418-19989.787l40.465,209.947H3658.453l-16.8-209.947Z" data-name="Контур 16401" fill="rgba(0,77,255,0.35)" opacity="0.63"
                                      stroke="#004dff" stroke-width="5" transform="translate(837)"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <!-- <div @click="ShowGallery = !ShowGallery" class="down t-20" v-if="!ShowGallery">Посмотреть фотографии</div> -->
        </div>

        <div class="def-block">
            <carousel :autoplay="true" :dots="false" :items=1 :nav="false" class="screen-gallery">
                <img src="@/assets/img/pages/home1.webp">
                <img src="@/assets/img/pages/home2.webp">
                <img src="@/assets/img/pages/home3.webp">
                <img src="@/assets/img/pages/home4.webp">
                <img src="@/assets/img/pages/home5.webp">
            </carousel>
        </div>
        <!-- <div class="margin"></div>

        <div class="def-block">
            <div class="heading">
                <span class="h2">Фотографии из центра</span>
            </div>
        </div> -->

        <!-- <div class="margin"></div>

        <div class="screen-where-to-work white">
            <div class="margin"></div>

            <div class="def-block-small ">
                <div class="heading">
                    <span class="h2">Где ты сможешь работать <br> после обучения</span>
                </div>
                <div class="wrapper">
                    <img src="../../../public/img/vector/logo1.png">
                    <img src="../../../public/img/vector/logo2.png">
                    <img src="../../../public/img/vector/logo3.png">
                    <img src="../../../public/img/vector/logo4.png">
                </div>
            </div>

            <div class="margin"></div>
        </div> -->

        <div id="teachers" class="margin"></div>

        <div class="screen-team def-block-small">
            <div class="heading">
                <span class="h2">Наши преподаватели</span>
            </div>
            <div class="wrapper list-4 no-border">
                <div v-for="item of AllData.Teacher" :key="item.key" class="item">
                    <img :src="proxy + '/' + item.files[0].path" alt="">
                    <span class="t-20">{{ item.name }}</span>
                    <span class="note">{{ item.description }}</span>
                </div>
            </div>
        </div>

        <!-- <div class="margin"></div>

        <div class="blue screen-form">
            <div class="margin"></div>
            <div class="margin-small def-block">
                <div class="heading">
                    <span class="h2">Мы в телеграм</span>
                </div>
                <p>Оставайтесь с нами на связи в нашем новом телеграм-канале. Море полезной и интересной информации</p>
            </div>

            <div class="margin-small"></div>
        </div> -->

        <div id="qa" class="margin"></div>

        <div class="screen-faq white">
            <div class="margin"></div>

            <div class="def-block-small">
                <div class="heading">
                    <span class="h2">Частые вопросы</span>
                </div>
                <div class="wrapper">
                    <div v-for="item of Questions" :key="item.key" :class="{active: item.status}" class="item" @click="item.status = !item.status">
                        <div class="top">
                            <p class="t-20">{{ item.q }}</p>
                            <img src="@/assets/img/vector/close-b.svg">
                        </div>
                        <div class="bottom">
                            <p>{{ item.a }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="margin"></div>
        </div>

        <layoutFooter/>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

import layoutHeader from '../layouts/header'
import layoutCourses from '../layouts/courses'
import layoutFooter from '../layouts/footer'
import carousel from 'vue-owl-carousel'
import config from '../../../vue.config'

export default {
    metaInfo: {
        title: 'WEPRO — Школа актуальных профессий в Самарканде',
        titleTemplate: 'WEPRO — Школа актуальных профессий в Самарканде',
        htmlAttrs: {
            lang: 'ru',
        },
        meta: [
            {
                name: 'description',
                content: 'Мы - IT-школа в Самарканде, где мы обучаем наших актуальным профессиям XXI-века. Программирование, дизайн и онлайн-маркетинг, выберите свой курс, а мы поможем в его обучении. Быстро, доступно, в современном и удобном учебном центре.'
            },
        ]
    },
    data() {
        return {
            ShowGallery: false,
            proxy: config.devServer.proxy,
            Questions: [
                {
                    q: 'Все курсы есть в интернете. Зачем идти к вам?',
                    a: 'В большинстве интенсивах/вебинарах в интернете выложена лишь малая часть полезной информации, а для полноценного изучения профессии приходится убивать гораздо больше времени и сил. Наша школа готова полностью и с гарантией взяться за студента.',
                    status: false,
                },
                {
                    q: 'С какого возраста принимаются студенты?',
                    a: 'Мы принимаем заявки от лиц старше 14 лет.',
                    status: false,
                },
                {
                    q: 'Какие документы мне нужно принести для регистрации?',
                    a: 'Для начала обучения студенту нужен свой паспорт или паспорт родителя.',
                    status: false,
                },
                {
                    q: 'Что мне выбрать?',
                    a: 'Выбирать направление стоит внимательно. Если вы пока не уверены в выборе - свяжитесь с нами по номеру +998 90 197-71-00, а мы поможем вам в выборе направления.',
                    status: false,
                },
                {
                    q: 'Когда, во сколько и где проходят занятия?',
                    a: 'Занятия проходят в нашем современном и уютном учебном центре. Мы подберем для Вас график обучения, уроки проходят 2 раза в неделю по 2 часа в будние дни с 9:00 до 22:00',
                    status: false,
                },
                {
                    q: 'Нужна ли особая подготовка для начала обучения?',
                    a: 'Мы набираем новичков. Поэтому особая подготовка не нужна, но вам будет гораздо комфортнее учиться, если вы более-менее опытный пользователь ПК.',
                    status: false,
                },
                {
                    q: 'Что если у меня нет личного компьютера или мой компьютер очень «слабый»?',
                    a: 'Для выполнения домашних, контрольных и дипломных работ дома Вам понабодится компьютер. А во время занятий у вас будет современный компьютер с большим экраном для комфортной работы, поэтому личный компьютер с собой приносить не нужно.',
                    status: false,
                },
                {
                    q: 'Как проходит процесс оплаты?',
                    a: 'После прохождения входного теста студент вносит депозит, месячную или полную оплату и занимает место в группе.',
                    status: false,
                },
                {
                    q: 'Что за входной тест?',
                    a: 'Это простой тест из 10-ти элементарных вопросов на знание компьютера. Что такое Excel?',
                    status: false,
                },
                {
                    q: 'Получу ли я сертификат?',
                    a: 'Для получения сертификата студенты сдают дипломную работу, доказывая свой уровень владения профессией. Также мы опираемся на таблицу успеваемости учащегося.',
                    status: false,
                },
                {
                    q: 'Где я могу работать после обучения?',
                    a: 'Лучшие студенты могут трудоустроиться в компании-партнеры или к нам в школу. Digital-специалисты очень востребованны, независимо от того, какой курс вы окончили - вы можете рассчитывать на спрос или найти себя во фрилансе.',
                    status: false,
                },
            ],
        }
    },
    created() {
        this.fetchReviews()
        this.fetchTeachers()
    },
    computed: {
        ...mapGetters([
            'AllData'
        ]),
        ...mapGetters('reviews', {'findReviewsInStore': 'find'}),
        ...mapGetters('teachers', {'findTeachersInStore': 'find'}),

        reviews() {
            return this.findReviewsInStore({}).data
        },

        teachers() {
            return this.findTeachersInStore({}).data
        }
    },
    methods: {
        ...mapActions('reviews', {fetchReviews: 'find'}),
        ...mapActions('teachers', {fetchTeachers: 'find'}),
        ...mapActions([
            'OpenForm',
            'GetData',
            'Add',
        ])
    },
    components: {
        layoutHeader,
        layoutCourses,
        layoutFooter,
        carousel
    },
}
</script>
