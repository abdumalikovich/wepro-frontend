<template>
    <div class="body-admin body-admin-forms">
        <div class="form-course def-block" v-if="(this.$route.fullPath.split('/'))[this.$route.fullPath.split('/').length - 1] === 'course'">
            <h2>Добавить курс</h2>
            <form name="form-course" @submit="Add({
                    service: 'Course',
                    unique: {
                        array_lessons,
                        array_what_can,
                        array_programms,
                        array_projects
                    }
                })">
                <div class="data list-3">
                    <p>Язык обучения: <select name="language">
                        <option value="ru">Русский</option>
                        <option value="uz">Узбекский</option>
                    </select></p>
                    <p>Название курса: <input type="text" name="title"></p>
                    <p>Цена курса: <input type="text" name="price"></p>
                    <p>Ссылка на видео YouTube: <input type="text" name="video"></p>
                    <p>Ссылка на видео Яндекс.Диск: <input type="text" name="yandex_url"></p>
                    <p>Ссылка на страницу: <input type="text" name="link"></p>
                    <p>Описание курса: <textarea name="description" placeholder="HTML-код"></textarea></p>
                    <p>Преподаватель: <select name="teacher">
                        <option v-for="item of AllData.Teacher" :key="item.key" :value="item.id">{{item.name}}</option>
                    </select></p>
                    <p>Сколько месяцев: <input type="text" name="number_month"></p>
                    <p>Сколько уроков: <input type="text" name="number_lessons"></p>
                    <p>Позиция на сайте: <input type="text" name="position"></p>
                    <div class="checkboxes">
                        <p>Кому подойдет этот курс</p>
                        <div class="elements">
                            <div><input type="checkbox" name="array_for_who" value="new_members">Для новичков</div>
                            <div><input type="checkbox" name="array_for_who" value="site_layout_designer">Для верстальщиков</div>
                            <div><input type="checkbox" name="array_for_who" value="marketers">Для маркетологов</div>
                            <div><input type="checkbox" name="array_for_who" value="graphic_designers">Для графдизов</div>
                            <div><input type="checkbox" name="array_for_who" value="architects">Для архитекторов</div>
                            <div><input type="checkbox" name="array_for_who" value="web_designers">Для вебдизов</div>
                            <div><input type="checkbox" name="array_for_who" value="developers">Для разработчиков</div>
                            <div><input type="checkbox" name="array_for_who" value="freelancers">Для фрилансеров</div>
                            <div><input type="checkbox" name="array_for_who" value="smm">Для сммщиков</div>
                        </div>
                    </div>
                </div>
                <div class="data data-full">
                    <div class="heading">
                        <h3>Расписание курса array_lessons</h3>
                        <div class="sorting">
                            <div class="button active" @click="action_array_lessons('add')">Добавить еще</div>
                            <div class="button active" @click="action_array_lessons('remove')">Удалить</div>
                        </div>
                    </div>
                    <div class="form-item">
                        <transition-group name="list" tag="p">
                            <input v-for="item of array_lessons" :key="item.id" v-model="item.name" type="text" class="lesson" placeholder="Тема урока">
                        </transition-group>
                    </div>

                    <div class="heading">
                        <h3>С чем научимся работать array_programms</h3>
                        <div class="sorting">
                            <div class="button active" @click="action_array_programms('add')">Добавить еще</div>
                            <div class="button active" @click="action_array_programms('remove')">Удалить</div>
                        </div>
                    </div>
                    <transition-group name="list" tag="p">
                        <div class="form-item" v-for="item of array_programms" v-bind:key="item.id">
                            <input type="text" data-name="name" v-model="item.name" placeholder="Название программы">
                            <input type="text" data-name="description" v-model="item.description" placeholder="Краткое описание">
                            <input type="text" data-name="img" v-model="item.img" placeholder="Ссылка на фотографию">
                        </div>
                    </transition-group>
                    
                    <div class="heading">
                        <h3>Чему научимся array_what_can</h3>
                        <div class="sorting">
                            <div class="button active" @click="action_array_what_can('add')">Добавить еще</div>
                            <div class="button active" @click="action_array_what_can('remove')">Удалить</div>
                        </div>
                    </div>
                    <div class="form-item">
                        <transition-group name="list" tag="p">
                            <input v-for="item of array_what_can" v-model="item.name" :key="item.id" type="text" placeholder="Фотографировать слонов">
                        </transition-group>
                    </div>

                    <div class="heading">
                        <h3>Над какими проектами будем работать array_projects</h3>
                        <div class="sorting">
                            <div class="button active" @click="action_array_projects('add')">Добавить еще</div>
                            <div class="button active" @click="action_array_projects('remove')">Удалить</div>
                        </div>
                    </div>
                    <transition-group name="list" tag="p">
                        <div class="form-item" v-for="item of array_projects" :key="item.id">
                            <input type="text" placeholder="Название проекта" v-model="item.name">
                            <input type="text" placeholder="Описание проекта" v-model="item.description">
                            <input type="text" placeholder="Фотография проекта" v-model="item.img">
                        </div>
                    </transition-group>
                </div>
                <div class="btns">
                    <button>Добавить</button>
                </div>
            </form>
        </div>
        <div class="form-course def-block" v-if="(this.$route.fullPath.split('/'))[this.$route.fullPath.split('/').length - 1] === 'teacher'">
            <h2>Добавить преподавателя</h2>
            <form name="form-course" @submit="Add({service: 'Teacher'})">
                <div class="data list-3">
                    <p>Имя преподавателя: <input type="text" placeholder="name" name="name"></p>
                    <p>Ссылка на фотографию: <input type="file" placeholder="img" name="img"></p>
                    <p>Краткое описание: <input type="text" placeholder="description" name="description"></p>
                    <p>Подробнее о себе и чему я вас научу: <textarea style="height: 200px" name="full_description" placeholder="Привет меня зовут Настя, я занимаюсь диджитал-дизайном. "></textarea></p>
                </div>
                <div class="btns">
                    <button>Добавить</button>
                </div>
            </form>
        </div>
        <div class="form-course def-block" v-if="(this.$route.fullPath.split('/'))[this.$route.fullPath.split('/').length - 1] === 'review'">
            <h2>Добавить комментарий</h2>
            <form name="form-course" @submit="Add({service: 'Review'})">
                <div class="data list-3">
                    <p>Ссылка на видео: <input type="text" placeholder="video" name="video"></p>
                </div>
                <div class="btns">
                    <button>Добавить</button>
                </div>
            </form>
        </div>
        <div v-else style="display: flex; justify-content: center"><span class="h2" style="text-align: center">Неверная ссылка</span></div>
    </div>
</template>


// <div class="form-course def-block" v-if="(this.$route.fullPath.split('/'))[this.$route.fullPath.split('/').length - 1] === 'teacher'">
//     <h2>Добавить курс</h2>
//     <form name="form-course" @submit="Add({
//             service: 'Course',
//             unique: {
//                 array_lessons,
//                 array_what_can,
//                 array_programms,
//                 array_projects
//             }
//         })">
        
//         <div class="btns">
//             <button>Добавить курс</button>
//         </div>
//     </form>
// </div>

<style scoped>
.list-item {
display: inline-block;
margin-right: 10px;
}
.list-enter-active, .list-leave-active {
transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
opacity: 0;
transform: translateY(30px);
}
</style>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable vue/no-unused-components */
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            // array_for_who: [{
            //     id: +Math.random().toString().slice(2, 10),
            //     name: 'name'
            // }],
            array_lessons: [{
                id: +Math.random().toString().slice(2, 10),
                name: 'name'
            }],
            array_what_can: [{
                id: +Math.random().toString().slice(2, 10),
                name: 'name'
            }],
            array_programms: [{
                id: +Math.random().toString().slice(2, 10),
                name: 'name',
                description: 'description',
                img: 'img',
            }],
            array_projects: [{
                id: +Math.random().toString().slice(2, 10),
                name: 'name',
                description: 'description',
                img: 'img',
            }]
        }
    },
	computed: {
		...mapGetters([
			'AllData'
		])
	},
	methods: {
        action_array_lessons(action) {
            event.preventDefault()

            if(action === 'add') {
                this.array_lessons.push({
                    id: +Math.random().toString().slice(2, 10),
                    name: '',
                })
            } else if(action === 'remove') this.array_lessons.pop()
        },
        action_array_what_can(action) {
            event.preventDefault()

            if(action === 'add') {
                this.array_what_can.push({
                    id: +Math.random().toString().slice(2, 10),
                    name: '',
                })
            } else if(action === 'remove') this.array_what_can.pop()
        },
        action_array_programms(action) {
            event.preventDefault()

            if(action === 'add') {
                this.array_programms.push({
                    id: +Math.random().toString().slice(2, 10),
                    name: '',
                    description: '',
                    img: '',
                })
            } else if(action === 'remove') this.array_programms.pop()
        },
        action_array_projects(action) {
            event.preventDefault()

            if(action === 'add') {
                this.array_projects.push({
                    id: +Math.random().toString().slice(2, 10),
                    name: '',
                    description: '',
                    img: '',
                })
            } else if(action === 'remove') this.array_projects.pop()
        },
		...mapActions([
			'Add',
			'ShowForm',
			'GetData',
		])
	},
	created() {
		this.GetData()
	},
	components: {

	},
}
</script>

<style>

</style>