<template>
    <div class="body-admin body-admin-table">
        <div class="form-course def-block">
            <h2 v-if="(this.$route.fullPath.split('/'))[this.$route.fullPath.split('/').length - 1] === 'applications'">Заявки на курсы</h2>
            <h2 v-if="(this.$route.fullPath.split('/'))[this.$route.fullPath.split('/').length - 1] === 'get_presentation'">Получить презентацию курса</h2>
            <h2 v-if="(this.$route.fullPath.split('/'))[this.$route.fullPath.split('/').length - 1] === 'questions'">Остались вопросы?</h2>
            <table>
                <tr>
                    <th class="note">Имя студента</th>
                    <th class="note">Выбранный курс</th>
                    <th class="note">Номер телефона</th>
                    <th class="note">Дата заявки</th>
                    <th class="note">Статус заявки</th>
                    <th class="note">Действия</th>
                </tr>
                <tr v-for="item of AllData.Applications" :key="item.key">
                    <td class="bolder t-20">{{item.name}}</td>
                    <td>
                        <span class="note" v-if="item.language == 'russian'">Русский язык</span>
                        <span class="note" v-else-if="item.language == 'uzbek'">Узбекский язык</span>
                        <span class="note" v-else>Язык не указан</span>
                    </td>
                    <td class="bolder t-20">{{item.phone}}</td>
                    <td class="note">
                        <p>{{item.date}}</p>
                        <span>14:48</span>
                    </td>
                    <td class="status relative">
                        <span @click="change_status(item.id)" class="new cursor note">Новая заявка</span>
                        <!-- <span @click="item.show_select = true" class="new" v-if="item.status == 'wait'">В ожидании</span>
                        <span @click="item.show_select = true" class="new" v-if="item.status == 'shit'">Потерянная заявка</span>
                        <span @click="item.show_select = true" class="new" v-if="item.status == 'done'">Закрытая заявка</span> -->

                        <transition name="fade">
                            <div v-if="current_active === item.id" class="change def-widget-small">
                                <div class="close" @click="change_status(null)">
                                    <img src="../../../../public/img/vector/close-b.svg" alt="">
                                </div>

                                <span class="new" @click="Change({service: 'Applications', id: item.id, data: {status: 'new'}})">Новая заявка</span>
                                <span class="wait" @click="Change({service: 'Applications', id: item.id, data: {status: 'wait'}})">В ожидании</span>
                                <span class="shit" @click="Change({service: 'Applications', id: item.id, data: {status: 'fucked'}})">Потерянная заявка</span>
                                <span class="done" @click="Change({service: 'Applications', id: item.id, data: {status: 'done'}})">Закрытая заявка</span>
                            </div>
                        </transition>
                    </td>
                    <td>
                        <div class="sorting">
                            <img src="../../../../public/img/vector/trash-2.svg">
                            <img src="../../../../public/img/vector/info.svg">
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            current_active: 0
        }
    },
	computed: {
		...mapGetters([
			'AllData'
		])
	},
	methods: {
		...mapActions([
			'GetDataAdmin',
			'Change',
			'GetData'
		]),
        change_status(id) {
            // this.AllData.Applications.filter(item => item.id == id)[0].show_select = true
            this.current_active = id
        }
	},
	created() {
		this.GetData()
		this.GetDataAdmin()
            .then(() => {
                for(let course of this.AllData.Course) {
                    for(let application of this.AllData.Applications) {
                        application.show_select = false
                        if(application.course == course.id) {
                            application.course = course.title
                        }
                    }
                }
            })
	},
}
</script>

<style>
.status span {
    display: block;
    position: relative;
    padding-left: 18px;
}
.status span:before {
    box-shadow: 0 3px 6px rgba(0, 0, 0, .34);
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}
.new:before {
    background-color: green;
}
.wait:before {
    background-color: yellow;
}
.shit:before {
    background-color: red;
}
.done:before {
    background-color: blue;
}
.sorting img {
    cursor: pointer;
    padding: 5px;
}
.sorting img:hover {
    opacity: 0.4;
}
</style>