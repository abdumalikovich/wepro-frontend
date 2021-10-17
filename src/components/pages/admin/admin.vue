<template>
	<div class="body-admin">
		<div class="def-block">
			<div class="heading">
				<h2>Заявки</h2>
			</div>
			<div class="wrapper list-3">
				<item :data="'Applications'"/>
				<item :data="'App_Presentations'"/>
				<item :data="'App_Vacancies'"/>
				<item :data="'Questions'"/>
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
							<p class="h3">{{item.title}}</p>
						</div>

						<ul class="check">
							<li class="note">Студентов: 114</li>
							<li class="note">Средняя прибыль: 53.000.000 сум</li>
							<li class="note">Посещений страницы: 218</li>
						</ul>

						<div class="sorting">
							<button @click="Edit(item.id)">Изменение</button>
							<button @click="Detlet(item.id)">Удаление</button>
						</div>
					</div>
				</div>
			</div>
			
			<div class="margin-line"></div>

			<div class="heading">
				<h2>Открытые вакансии</h2>
				<div class="sorting">
					<router-link :to="'admin/form/job'">
						<button class="active">Добавить</button>
					</router-link>
				</div>
			</div>
			
			<div class="margin-line"></div>

			<div class="heading">
				<h2>Работы студентов</h2>
				<div class="sorting">
					<router-link :to="'admin/form/student_works'">
						<button class="active">Добавить</button>
					</router-link>
				</div>
			</div>
			<div class="wrapper list-3">
				<!-- <div class="item" v-for="item of AllData.Teacher" :key="item.key">
					<div class="inside">
						<div class="title">
							<p class="h3">{{item.name}}</p>
						</div>

						<div class="sorting">
							<button :id="item.id">Изменение</button>
							<button :id="item.id">Удаление</button>
						</div>
					</div>
				</div> -->
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
                            <button class="icon"><img src="../../../../public/img/vector/trash-2.svg"></button>
                            <button class="icon"><img src="../../../../public/img/vector/x-octagon.svg"></button>
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
import item from './layouts/item.vue'

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
		item
	},
}
</script>
