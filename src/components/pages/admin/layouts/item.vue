<template>
    <router-link :to="'/admin/table/' + data.toString()">
		<div class="item">
			<div class="inside">
				<div class="title">
					<p class="h3">Заявки на {{ data }}</p>
				</div>
				
				<ul class="check" v-if="AllData[data]">
					<li class="note">Новые: {{AllData[data].filter(item => item.deleted == false).length}}</li>
					<li class="note">В ожидании: {{AllData[data].filter(item => item.status == 'wait').length}}</li>
					<li class="note">Потерянные: {{AllData[data].filter(item => item.status == 'shit').length}}</li>
					<li class="note">Закрытые: {{AllData[data].filter(item => item.status == 'done').length}}</li>
					<li class="note">Корзина: {{AllData[data].filter(item => item.deleted == true).length}}</li>
					<li class="note">Всего: {{AllData[data].length}}</li>
				</ul>

				<div class="sorting">
					<button class="active">Перейти к таблице</button>
				</div>
			</div>
		</div>
	</router-link>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters([
			'AllData'
		])
	},
	props: [
		'data'
	]
}
</script>

<style>

</style>