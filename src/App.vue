<template>
	<div id="app">
		<layoutWidget/>

		<transition name="fade">
			<!-- <div @click="СloseForms()" class="def-bg" v-if="BlurredBg"></div> -->
			<div @click="СloseForms()" class="def-bg" v-if="Form.BlurredBg"></div>
		</transition>

		<transition name="fade" mode="out-in">
			<router-view/>
		</transition>

		<transition name="fade" mode="out-in">
			<div class="cookies" v-if="status_ad == true">
				<span>Пользуясь нашим сайтом, вы соглашаетесь <br> с тем, что мы используем cookies</span>
				<button @click="closeAd()">Окей</button>
			</div>
		</transition>
	</div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint-disable no-unused-vars */
import config from '../vue.config'
import layoutWidget from './components/layouts/widgets'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'app',
    data() {
        return {
            status_ad: true
        }
    },
	computed: {
		...mapGetters([
			'Form',
		])
	},
	methods: {
        ...mapActions([
            'СloseForms',
        ]),
        closeAd() {
            localStorage.setItem('ad', 0)
            this.status_ad = false
        }
    },
    created() {
        if(localStorage.getItem('ad') == 0) this.status_ad = false
    },
	components: {
		proxy: config.devServer.proxy,
		layoutWidget
	}
}
</script>

<style>
/* @import '../public/css/**.css'; */
@import '../public/css/normalize.css';
@import '../public/css/style.css';
@import '../public/css/media.css';

.cookies {
	position: fixed;
	right: 25px;
	bottom: 24px;
	background-color: var(--black);
	padding: 15px 16px 15px 20px;
	display: flex;
	align-items: center;
	grid-gap: 20px;
	border-radius: 11px;
}

.cookies span {
	color: #fff;
	line-height: 18px;
}

.cookies button {
	color: #fff!important;
	background: #41455A!important;
	box-shadow: none!important;
	width: 95px!important;
}

</style>
