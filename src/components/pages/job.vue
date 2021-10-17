<template>
	<div class="body-job">
		<layoutHeader/>

        <div class="screen-one full-block padding-sides">
            <div class="wrapper">
                <div class="side-left">
                    <h1>Открытые вакансии</h1>
                    <span class="h4">Wepro занимается обучением современным профессиям. Вся наша работа направлена на улучшение качества образования, расширение программ обучения и возможностей компании. Мы создаем продукт, в котором интересно учиться.</span>
                </div>
            </div>
        </div>

        <div class="screen-job full-block">
            <div class="wrapper list-1">
                <a :href="'/' + $i18n.locale + '/job/' + item.link" v-for="item of AllData.Jobs" :key="item.key">
                    <div class="item">
                        <span class="blue note">Открытая вакансия</span>
                        <p class="h2">{{item.title}}</p>
                        <p class="note description">{{item.description}}</p>
                        <a href="#" class="blue note">Подробнее о вакансии</a>
                    </div>
                </a>
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
			proxy: config.devServer.proxy
		}
	},
	created() {
		this.GetData(['Jobs'])
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
