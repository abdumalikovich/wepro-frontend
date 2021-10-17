<template>
  <div class="body-course">
    <layoutHeader :dark="true"/>

    <div class="screen-one black padding-sides">
        <div class="wrapper">
            <div class="side-left">
                <ul class="check horizontal">
                    <li>{{$t('course.screen-one.check.li_1')}}: {{ CourseItem.number_month }}</li>
                    <li>{{$t('course.screen-one.check.li_2')}}: {{ CourseItem.number_lessons }}</li>
                </ul>
                <h1 class="elements-pc">{{CourseItem.title}}</h1>
                <h2 v-if="CourseItem.price">{{CourseItem.price.slice(0, 3) + '.' + CourseItem.price.slice(3)}} {{$t('course.screen-one.currency')}}</h2>
                <p class="t-20">{{CourseItem.description}}</p>
                <div class="btns">
                    <a href="#">
                        <button @click="OpenForm(['Application'])" class="ga-click-openApplication">{{$t('buttons.course')}}</button>
                    </a>
                    <a :href="CourseItem.yandex_url" class="ga-click-getProgramm" target="_blank">
                        <button class="transparent ga-click-getProgramm">{{$t('buttons.programm')}}</button>
                    </a>
                </div>
            </div>
            <div class="side-right">
                <iframe :src="CourseItem.video + '?autoplay=1&mute=1&loop=1'" autoplay="1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>

    <div class="margin"></div>

    <div class="screen-for-who def-block" v-if="CourseItem.array_for_who">
        <div class="heading">
            <span class="h2" v-html="$t('course.screen-for-who.h2')"></span>
        </div>
        <div class="wrapper list-3 no-border padding-sides">
            <div class="item" v-for="item of for_who_final" :key="item.key">
                <div class="avatar">
                    <img v-if="item.id == 'new_members'" src="../../../public/img/pages/course/new_members.png"/>
                    <img v-if="item.id == 'site_layout_designer'" src="../../../public/img/pages/course/site_layout_designer.png"/>
                    <img v-if="item.id == 'marketers'" src="../../../public/img/pages/course/marketers.png"/>
                    <img v-if="item.id == 'graphic_designers'" src="../../../public/img/pages/course/graphic_designers.png"/>
                    <!-- <img v-if="item.id == 'architects'" src="../../../public/img/pages/course/architects.png"/> -->
                    <img v-if="item.id == 'web_designers'" src="../../../public/img/pages/course/web_designers.png"/>
                    <img v-if="item.id == 'developers'" src="../../../public/img/pages/course/developers.png"/>
                    <img v-if="item.id == 'freelancers'" src="../../../public/img/pages/course/freelancers.png"/>
                    <img v-if="item.id == 'smm'" src="../../../public/img/pages/course/smm.png"/>
                </div>
                <div class="text">
                    <span class="t-20">{{item.title}}</span>
                    <p class="note">{{ item.text }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="double-screen def-block">
        <section class="left screen-schedule def-block">
            <div class="heading">
                <span class="h2" v-html="$t('course.double-screen.h2')">Расписание курса</span>
            </div>
            <div class="wrapper cards cards-justify-content padding-sides" v-if="CourseItem.unique_data">
                <div class="item" v-for="item of CourseItem.unique_data.array_lessons" :key="item.id">
                    <p class="text-p-heading dark">{{item.name}}</p>
                </div>
                <a class="pc-elements" target="_blank">                
                    <a :href="CourseItem.yandex_url" target="_blank" v-if="CourseItem.unique_data">
                        <button class="transparent bordered"><span class="note blue">Оставшиеся занятия: {{ +CourseItem.number_lessons - CourseItem.unique_data.array_lessons.length }}</span></button>
                    </a>
                </a>
            </div>
        </section>
        <section class="right screen-about">
            <div class="def-block screen-teacher">
                <div class="heading">
                    <span class="h4">{{$t('course.double-screen.h4_teacher')}}</span>
                </div>
                <div class="wrapper padding-sides">
                    <div class="person-element" v-if="CourseItem.teacher">
                        <img v-if="CourseItem.teacher.files" class="cover" :src="proxy + '/' + CourseItem.teacher.files[0].path" alt="Преподаватель курса">
                        <div>
                            <span class="h3">{{CourseItem.teacher.name}}</span>
                            <span class="note">{{CourseItem.teacher.description}}</span>
                        </div>
                    </div>
                    <p>{{CourseItem.teacher.full_description}}</p>
                </div>
            </div>
            <div class="margin-line"></div>
            <div class="def-block screen-what-we-learn">
                <div class="heading">
                    <span class="h4">{{$t('course.double-screen.h4_what_we_learn')}}</span>
                </div>
                <div class="wrapper padding-sides">
                    <ul class="check" v-if="CourseItem.unique_data">
                        <li v-for="item of CourseItem.unique_data.array_what_can" :key="item.key">{{item.name}}</li>
                    </ul>
                </div>
            </div>
            <div class="margin-line"></div>
            <div class="def-block screen-programms">
                <div class="heading">
                    <span class="h4">{{$t('course.double-screen.h4_soft')}}</span>
                </div>
                <div class="wrapper padding-sides" v-if="CourseItem.unique_data">
                    <a :href="item.url" target="_blank" v-for="item of CourseItem.unique_data.array_programms" :key="item.key">
                        <div class="item">
                            <img :src="item.img">
                            <div>
                                <b class="text-p-normal">{{item.name}}</b>
                                <span class="note">{{item.description}}</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    </div>

    <div class="margin"></div>

    <div class="def-block screen-projects">
        <div class="heading">
            <span class="h2" v-html="$t('course.screen-projects.h2')"></span>
        </div>
        <div class="wrapper list-3 padding-sides" v-if="CourseItem.unique_data">
            <div class="item img" v-for="item of CourseItem.unique_data.array_projects" :key="item.key">
                <img :src="item.img">
                <div class="description">
                    <span class="h3">{{item.name}}</span>
                    <p>{{item.description}}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="margin"></div>

    <div class="def-block screen-students">
        <div class="heading">
            <span class="h2" v-html="$t('students.screen-one.h1')"></span>
        </div>
        <div class="wrapper padding-sides list-3">
            <div v-for="item of AllData.StudentsWorks.filter(item => item.course == CourseItem.id)" :key="item.key" class="item img">
                <!-- <carousel :autoplay="false" class="screen-gallery" :dots="true" :nav="false" :items=1> -->
                <img :src="proxy + '/' + item.multiple[0]"/>
                <!-- </carousel> -->
                <div class="description">
                    <span class="h4">{{item.title}}</span>
                    <p class="note">{{item.project_description}}</p>
                    <div class="margin-mini"></div>
                    <div class="person-element">
                        <img :src="proxy + '/' + item.files[0].path"/>
                        <div>
                            <p class="t20">{{item.name}}</p>
                            <span class="note">{{item.description}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="margin"></div>

    <layoutCourses />

    <div class="margin"></div>

    <layoutFooter />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

import layoutHeader from "../layouts/header"
import layoutCourses from "../layouts/courses"
import layoutFooter from "../layouts/footer"
import api from '../../services/admin'
import config from '../../../vue.config'

// import Carousel from 'vue-owl-carousel'

export default {
    data() {
        return {
            CourseItem: {},
			proxy: config.devServer.proxy,
            for_who: [
                {
                    id: 'new_members',
                    title: 'Начинающим',
                    text: 'Если Вы ни разу не сталкивались с такой профессией, то в начале курса мы проходим азы и базу, которая даст фундамент для дальнейшего развития и выполнения последующих домашних заданий. Кураторы всегда помогут и ответят на любой вопрос.'
                },
                {
                    id: 'site_layout_designer',
                    title: 'Верстальщикам',
                    text: 'Если Вы умете верстать и хотите подтянуть скиллы в дизайне. Наш курс - это однозначно то, что Вам нужно. Мы пробираемся в самую глубь дизайна от фундаментальных азов до WOW-эффектов у пользователей. Вы научитесь грамотно общаться с заказчиками и давать им должный результат, а также научитесь работать в паре с другими дизайнерами. '
                },
                {
                    id: 'marketers',
                    title: 'Маркетологам',
                    text: 'Если Вы занимаетесь маркетингом, продажами, практикуете общение с клиентами, тот наш курс сделан для Вас. Мы можем подтянуть начинающих маркетологов, а главное уйти в онлайн-маркетинг.'
                },
                {
                    id: 'graphic_designers',
                    title: 'Графическим дизайнерам',
                    text: 'Если Вы умеете работать с графикой или растром и Вам кажется, что этих навыков недостаточно - тогда курс однозначно подходит также и Вам.'
                },
                {
                    id: 'web_designers',
                    title: 'Веб-дизайнерам',
                    text: 'Если вы уже начали свой путь в дизайне, но не знаете правил маркетинга, UX-аналитики, не знаете, как продать свои навыки дороже, это всё мы проходим в модулях про маркетинг и UX/UI. Дополнительно полезные модули - это освоение фотошопа, умение обрабатывать и анимировать контент. Это всё позволит значительно увеличить стоимость Ваших работ и, соответственно, Ваш заработок.'
                },
                {
                    id: 'developers',
                    title: 'Разработчикам',
                    text: 'Если вы уже начали свой путь в дизайне, но не знаете правил маркетинга, UX-аналитики, не знаете, как продать свои навыки дороже, это всё мы проходим в модулях про маркетинг и UX/UI. Дополнительно полезные модули - это освоение фотошопа, умение обрабатывать и анимировать контент. Это всё позволит значительно увеличить стоимость Ваших работ и, соответственно, Ваш заработок.'
                },
                {
                    id: 'freelancers',
                    title: 'Фрилансерам',
                    text: 'Если Вы хотите начать работать из любой точки мира имея при себе лишь ноутбук. Мы расскажем, как это сделать и дадим Вам навыки, которые на оценят на рынке. Мы не учим делать “Дешёвый Фриланс”, мы нацелены на высокий уровень дизайна, который позволит Вам развиваться в этой сфере и хорошо зарабатывать.'
                },
                {
                    id: 'smm',
                    title: 'SMM-специалистам',
                    text: 'Если Вы работете в Digital-сфере, то после курса сможете делать улучшенные креативы, баннеры своим клиентам, работать с графикой, понимать мышление пользователей. Также научитесь продавать свои услуги дороже среднего по рынку. Расширите пул своих услуг.'
                },
            ],
            for_who_final: [],
        }
    },
	computed: {
		...mapGetters([
			'AllData'
		])
	},
	async created() {
		// GET ITEM
        await api.GetCourse({ element: this.$route.params.pathMatch })
            .then(async response => {
                this.CourseItem = response.data
                    document.title = 'WEPRO —' + this.CourseItem.title
                    document.head.querySelector('meta[name=description]').content = this.CourseItem.description

                for(let item of this.CourseItem.array_for_who) {
                    for(let item2 of this.for_who) {
                        if(item == item2.id) {
                            this.for_who_final.push(item2)
                        }
                    }
                }
            })
        
		await this.GetData()
            .then(async response => {
                // console.log(this.AllData.Teacher);
                for(let item of this.AllData.Teacher) {
                    if(item.id == this.CourseItem.teacher) {
                        this.CourseItem.teacher = item
                    }
                }
            }) .catch(async error => {
                console.error(error)
            })
	},
    methods: {
        ...mapActions([
			'OpenForm',
			'GetData',
			'Add',
            'GetCourse'
        ])
    },
    components: {
        layoutHeader,
        layoutCourses,
        layoutFooter
    },
}
</script>