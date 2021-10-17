<template>
    <div class="body-admin body-admin-table">
        <div class="form-course def-block">
            <h2>Заявки {{cr}} {{FetchedData.length}}</h2>
            <button class="button-small" v-if="!deleteOrNot" @click="ShowDeleted(true)">Показать удаленные</button>
            <button class="button-small" v-else @click="ShowDeleted(false)">Вернуться</button>
            <table v-if="this.FetchedData.length">
                <tr>
                    <th class="note">Имя студента</th>
                    <th v-if="cr !== 'App_Vacancies'" class="note">Выбранный курс</th>
                    <th v-if="cr == 'App_Vacancies'" class="note">Вакансия</th>
                    <th class="note">Номер телефона</th>
                    <th class="note">Дата заявки</th>
                    <th class="note">Статус заявки</th>
                    <th class="note"></th>
                </tr>
                <tr v-for="item of FetchedData" :key="item.key">
                    <td class="bolder t-20">{{item.name}}</td>
                    <td v-if="cr !== 'App_Vacancies'">
                        <p>{{item.course}}</p>
                        <span class="note" v-if="item.language == 'russian'">Русский язык</span>
                        <span class="note" v-else-if="item.language == 'uzbek'">Узбекский язык</span>
                        <span class="note" v-else>Язык не указан</span>
                    </td>
                    <td v-if="cr == 'App_Vacancies'" class="bolder t-20">{{item.job_id}}</td>
                    <td class="bolder t-20">{{item.phone}}</td>
                    <td class="note">
                        <p>{{item.date}}</p>
                        <span>14:48</span>
                    </td>
                    <td class="status relative">
                        <span v-if="!item.deleted" @click="change_status(item.id)" :class="item.status" class="cursor note">{{item.status}}</span>
                        <span v-else>Удалено</span>

                        <transition name="fade">
                            <div v-if="current_active === item.id" class="change def-widget-small">
                                <div class="close" @click="change_status(null)">
                                    <img src="../../../../public/img/vector/close-b.svg" alt="">
                                </div>

                                <span class="new" @click="Patch({service: cr, id: item.id, data: {status: 'new'}})">Новая заявка</span>
                                <span class="wait" @click="Patch({service: cr, id: item.id, data: {status: 'wait'}})">В ожидании</span>
                                <span class="fucked" @click="Patch({service: cr, id: item.id, data: {status: 'fucked'}})">Потерянная заявка</span>
                                <span class="done" @click="Patch({service: cr, id: item.id, data: {status: 'done'}})">Закрытая заявка</span>
                            </div>
                        </transition>
                    </td>
                    <td>
                        <div class="sorting">
                            <img v-if="!item.deleted" @click="Patch({service: cr, id: item.id, data: { deleted: true }})" src="../../../../public/img/vector/minus-circle.svg">
                            <img v-else @click="Patch({service: cr, id: item.id, data: { deleted: false }})" src="../../../../public/img/vector/plus-circle.svg">
                        </div>
                    </td>
                </tr>
            </table>
            <div v-else>
                <div class="margin"></div>
                <div class="margin"></div>
                <loading/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import loading from '../../layouts/loading.vue'

export default {
    data() {
        return {
            FetchedData: [],
            current_active: 0,
            cr: this.$route.fullPath.split('/')[this.$route.fullPath.split('/').length - 1],
            message: false
        }
    },
	computed: {
        deleteOrNot: function() {
            return this.message
        },
        ...mapGetters([
            'AllData'
		]),
	},
	methods: {
		...mapActions([
			'GetDataAdmin',
			'Patch',
			'GetData'
		]),
        change_status(id) {
            this.current_active = id
        },
        ShowDeleted(arg) {
            this.message = !this.message
            this.FetchedData = this.AllData[this.cr].filter(item => item.deleted == arg)
        }
	},
	created() {
		this.GetDataAdmin()
            .then(() => {
                this.FetchedData = this.AllData[this.cr].filter(item => item.deleted == false || !item.deleted)

                if(this.cr == 'Applications') {
                    for(let course of this.AllData.Course) {
                        for(let application of this.FetchedData) {
                            application.show_select = false

                            if(application.course == course.id) {
                                application.course = course.title
                            }
                        }
                    }
                }

                if(this.cr == 'App_Vacancies') {
                    for(let job of this.AllData.Jobs) {
                        for(let application of this.AllData.App_Vacancies) {
                            if(job._id == application.job_id) {
                                application.job_id = job.title
                            }
                        }
                    }
                }
            })
	},
    components: {
        loading
    }
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
.fucked:before {
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