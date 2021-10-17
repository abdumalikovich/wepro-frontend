<template>
	<footer>
		<div class="screen-map">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d872.8027196347981!2d66.92308655195943!3d39.64656884099486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d192aed22c9b3%3A0xa86ef894a370a710!2sWepro!5e0!3m2!1sru!2s!4v1621791017588!5m2!1sru!2s" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
		</div>
		<div class="screen-form black">
			<div class="margin-small"></div>

			<div class="wrapper def-block-small padding-sides">
				<div class="heading">
					<span class="h2">{{$t('footer.h2')}}</span>
					<p>{{$t('footer.p')}}</p>
				</div>
				<div class="wrapper">
					<form @submit="Add({ service: 'Questions' })">
						<input type="text" name="time" hidden :value="new Date().toLocaleTimeString()">
						<input type="text" name="date" hidden :value="new Date().toLocaleDateString()">

						<input type="text" :placeholder="$t('forms.input_name')" name="name">
						<input type="text" :placeholder="$t('forms.input_phone')" name="phone">
						<button>{{$t('buttons.course')}}</button>
					</form>
				</div>
			</div>
		</div>
		<div class="screen-footer black">
			<div class="margin-small"></div>

			<div class="wrapper def-block-small padding-sides">
				<div class="top side">
					<div class="left-side bolder">
						<div class="row">
							<a @click="СloseForms()" target="_blank" href="https://madad.studio">{{$t('links.madad')}}</a>
							<a @click="СloseForms()" href="/#courses">{{$t('links.courses')}}</a>
							<a :href="'/' + $i18n.locale + '/job'">{{$t('links.job')}}</a>
							<a href="/#reviews">{{$t('links.video')}}</a>
							<a @click="OpenForm(['Application'])">{{$t('links.start')}}</a>
							<a target="_blank" href="https://t.me/weprouz_bot">{{$t('links.telegram')}}</a>
							<!-- <a :href="'/' + $i18n.locale + '/test'">{{$t('links.test')}}</a> -->
							<a :href="'/' + $i18n.locale + '/contacts'">{{$t('links.contacts')}}</a>
						</div>
						<div class="row">
							<a href="#" v-for="item of AllData.Course" :key="item.key">{{ item.title }}</a>
						</div>
						<div class="row">
							<a target="_blank" href="https://www.instagram.com/wepro.uz/">Instagram</a>
							<a target="_blank" href="https://t.me/weprouz">Telegram</a>
							<a target="_blank" href="https://www.tiktok.com/">TikTok</a>
							<a target="_blank" href="https://www.youtube.com/channel/UCF2_hjZ9xENm01x4gPoLakg">YouTube</a>
							<a target="_blank" href="https://www.facebook.com/wepro.uz">Facebook</a>
						</div>
					</div>
				</div>
				<div class="bottom side">
					<span class="note">{{$t('footer.note')}}</span>
					<span class="note">v5.2</span>
				</div>
			</div>

		</div>
	</footer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
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
	}
}
</script>

<style>

</style>