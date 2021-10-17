<template>
	<div class="body-job">
		<layoutHeader/>

        <div class="screen-one def-block padding-sides">
            <div class="wrapper">
                <div class="side-left">
                    <h1>{{FetchedItem.title}}</h1>
                    <p>{{FetchedItem.description}}</p>
                </div>
            </div>
        </div>

        <div class="screen-job def-block padding-sides" v-if="FetchedItem.unique_data">
            <div class="wrapper no-border list-3">
                <div class="item">
                    <h4>Обязанности сотрудника</h4>
					<ul class="check">
						<li class="note" v-for="item of FetchedItem.unique_data.array_responsibilities" :key="item.key">{{item.name}}</li>
					</ul>
                </div>
                <div class="item">
                    <h4>Требования к кандидату</h4>
					<ul class="check">
						<li class="note" v-for="item of FetchedItem.unique_data.array_requirements" :key="item.key">{{item.name}}</li>
					</ul>
                </div>
                <div class="item">
                    <h4>Мы предлагаем</h4>
					<ul class="check">
						<li class="note" v-for="item of FetchedItem.unique_data.array_offer" :key="item.key">{{item.name}}</li>
					</ul>
                </div>
            </div>
        </div>

        <div class="margin"></div>
        
        <div class="screen-form">
            <div class="def-block heading padding-sides">
                <div class="wrapper">
                    <form class="vertical" @submit="Add({service: 'App_Vacancies'})">
                        <div class="heading">
                            <span class="h2">Заинтересовала вакансия?</span>
                        </div>
                        <input type="text" name="time" hidden :value="new Date().toLocaleTimeString()">
                        <input type="text" name="job_id" hidden :value="FetchedItem._id">
                        <input type="text" name="date" hidden :value="new Date().toLocaleDateString()">

                        <label>
                            Ваше имя
                            <input  placeholder="Введите ваше имя" name="name" class="white" type="text">
                        </label>
                        <label>
                            Ваша фамилия
                            <input placeholder="Введите вашу фамилию" type="text" name="surname" class="white">
                        </label>
                        <label>
                            Ваш номер телефона
                            <input placeholder="Введите ваш номер телефона" type="text" name="phone" class="white">
                        </label>
                        <label>
                            Ссылка на портфолио
                            <input placeholder="Github, Behance, Dribbble, Youtube, Vimeo или Telegram" type="text" name="portfolio" class="white">
                        </label>
                        <label>
                            Есть вопросы?
                            <textarea placeholder="Можно задать вопрос" name="question"></textarea>
                        </label>
                        <div class="doc">
                            <button>Отправить заявку</button>
                            <p class="note">Нажимая на кнопку, я соглашаюсь на обработку персональных данных</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="margin"></div>

		<layoutFooter/>
	</div>
</template>

<style scoped>
    h1 {
        margin-bottom: 32px!important;
    }
    .wrapper .btns {
        flex-wrap: wrap;
        grid-gap: 10px;
        margin-top: 22px;
    }
</style>

<script>
import { mapActions, mapGetters } from 'vuex'

import layoutHeader from '../layouts/header'
import layoutFooter from '../layouts/footer'
import config from '../../../vue.config'
import api from '../../services/admin'

export default {
    metaInfo: {
		title: 'WEPRO — Школа актуальных профессий в Самарканде',
		titleTemplate: 'WEPRO — Школа актуальных профессий в Самарканде',
		htmlAttrs: {
			lang: 'ru',
		},
		meta: [
			{ name: 'description', content: 'Мы - IT-школа в Самарканде, где мы обучаем наших актуальным профессиям XXI-века. Программирование, дизайн и онлайн-маркетинг, выберите свой курс, а мы поможем в его обучении. Быстро, доступно, в современном и удобном учебном центре.' },
		]
    },
	data() {
		return {
            FetchedItem: {},
			proxy: config.devServer.proxy
		}
	},
	async created() {
		// GET ITEM
        await api.GetJob({ element: this.$route.params.pathMatch })
            .then(async response => {
                this.FetchedItem = response.data
                    document.title = this.FetchedItem.title + ' — Вакансии — Wepro'
                    document.head.querySelector('meta[name=description]').content = this.FetchedItem.description
            }) .catch(async error => {
                console.error(error)
            })
        
		await this.GetData()
	},
	computed: {
		...mapGetters([
			'AllData'
		])
	},
	methods: {
		...mapActions([
			'OpenForm',
			'GetData',
			'Add',
		])
	},
	components: {
		layoutHeader,
		layoutFooter
	},
}
</script>
