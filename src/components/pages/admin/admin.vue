<template>
	<div class="body-admin">
		<div class="def-block">
			<div class="heading">
				<h2>Заявки</h2>
			</div>
			<div class="wrapper list-3">
				<router-link to="./admin/table/applications">
					<div class="item">
						<div class="inside">
							<div class="title">
								<p class="h3">Заявки на курсы</p>
							</div>
							
							<ul class="check" v-if="AllData.Applications">
								<li class="note">Новые: {{AllData.Applications.filter(item => item.status == 'new').length}}</li>
								<li class="note">В ожидании: {{AllData.Applications.filter(item => item.status == 'wait').length}}</li>
								<li class="note">Потерянные: {{AllData.Applications.filter(item => item.status == 'shit').length}}</li>
								<li class="note">Закрытые: {{AllData.Applications.filter(item => item.status == 'done').length}}</li>
								<li class="note">Корзина: {{AllData.Applications.filter(item => item.isInTrash == true).length}}</li>
								<li class="note">Всего: {{AllData.Applications.length}}</li>
							</ul>

							<div class="sorting">
								<button class="active">Перейти к таблице</button>
							</div>
						</div>
					</div>
				</router-link>
				<router-link to="./admin/table/get_presentation">
					<div class="item">
						<div class="inside">
							<div class="title">
								<p class="h3">Получить презентацию курса</p>
							</div>
							
							<ul class="check">
								<li class="note">Новых: 114</li>
								<li class="note">Закрытых: 112 сум</li>
								<li class="note">Потеряные: 1</li>
								<li class="note">Ожидание: 1</li>
								<li class="note">Всего: 212</li>
								<li class="note">Корзина: 41</li>
							</ul>

							<div class="sorting">
								<button class="active">Перейти к таблице</button>
							</div>
						</div>
					</div>
				</router-link>
				<router-link to="./admin/table/questions">
					<div class="item">
						<div class="inside">
							<div class="title">
								<p class="h3">Остались вопросы?</p>
							</div>
							
							<ul class="check">
								<li class="note">Новых: 114</li>
								<li class="note">Закрытых: 112 сум</li>
								<li class="note">Потеряные: 1</li>
								<li class="note">Ожидание: 1</li>
								<li class="note">Всего: 212</li>
								<li class="note">Корзина: 41</li>
							</ul>

							<div class="sorting">
								<button class="active">Перейти к таблице</button>
							</div>
						</div>
					</div>
				</router-link>
			</div>

			<div class="margin-line"></div>
			
			<div class="heading">
				<h2>Курсы</h2>
				<div class="sorting">
					<router-link :to="'admin/form/course'">
						<button class="active">Добавить</button>
					</router-link>
				</div>
			</div>
			<div class="wrapper list-3">
				<div class="item" v-for="item of AllData.Course" :key="item.key">
					<div class="inside">
						<div class="title">
							<p class="h3">Frontend-программирование</p>
						</div>

						<ul class="check">
							<li class="note">Студентов: 114</li>
							<li class="note">Средняя прибыль: 53.000.000 сум</li>
							<li class="note">Посещений страницы: 218</li>
						</ul>

						<div class="sorting">
							<button>Изменение</button>
							<button>Удаление</button>
						</div>
					</div>
				</div>
			</div>
			
			<div class="margin-line"></div>

			<div class="heading">
				<h2>Преподаватели</h2>
				<div class="sorting">
					<router-link :to="'admin/form/teacher'">
						<button class="active">Добавить</button>
					</router-link>
				</div>
			</div>
			<div class="wrapper list-3">
				<div class="item" v-for="item of AllData.Teacher" :key="item.key">
					<div class="inside">
						<div class="title">
							<p class="h3">{{item.name}}</p>
						</div>

						<div class="sorting">
							<button :id="item.id">Изменение</button>
							<button :id="item.id">Удаление</button>
						</div>
					</div>
				</div>
			</div>
			
			<div class="margin-line"></div>

			<div class="heading">
				<h2>Видеоотзывы</h2>
				<div class="sorting">
					<router-link :to="'admin/form/review'">
						<button class="active">Добавить</button>
					</router-link>
				</div>
			</div>
			<table>
				<tr>
					<td>Ссылка на отзыв</td>
					<td>Просмотры</td>
					<td>Действия</td>
				</tr>
				<tr v-for="item of AllData.Review" :key="item.key">
					<td><a href="#">{{item.video}}</a></td>
					<td>128</td>
					<td>
                        <div class="sorting">
                            <button class="icon"><img src="@/assets/img/vector/trash-2.svg"></button>
                            <button class="icon"><img src="@/assets/img/vector/x-octagon.svg"></button>
                        </div>
					</td>
				</tr>
			</table>
			
			<div class="margin-line"></div>
		</div>
	</div>
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
			'ShowForm',
			'Add',
			'GetDataAdmin',
			'GetData',
		])
	},
	created() {
		this.GetData()
		this.GetDataAdmin()
	},
	components: {

	},
}
</script>
