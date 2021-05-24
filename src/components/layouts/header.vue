<template>
	<header :class="{ dark }">
		<div class="side side-left">
			<router-link class="logo" v-if="dark" :to="'/'"><img src="../../../public/img/vector/logo-w.svg"></router-link>
			<a class="logo" v-else href="#"><img src="../../../public/img/vector/logo-b.svg"></a>
			<div class="links element-pc">
				<a href="#">Курсы</a>
				<a href="#">Преподаватели</a>
				<a href="/studends" target="_blank" class="new">Работы студентов<span>Beta</span></a>
				<!-- <a href="#" class="new">Вакансии<span>Beta</span></a> -->
			</div>
		</div>
		<div class="side side-right">
			<div class="links">
				<a href="tel:+998 90 197-71-00">+998 90 197-71-00</a>
			</div>
			<a href="#menu" @click="OpenForm('Menu')" class="open-menu"></a>
		</div>
	</header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
