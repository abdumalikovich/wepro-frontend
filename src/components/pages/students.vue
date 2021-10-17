<template>
  <div class="body-students">
    <layoutHeader :dark="false"/>

    <div class="screen-one full-block padding-sides">
        <div class="wrapper">
            <div class="side-left">
                <h1>Работы наших студентов</h1>
                <span class="h4">Выберите направление</span>
                <div class="btns">
                    <button class="active circle transparent">Все работы</button>
                    <button class="circle transparent">Программирование</button>
                    <button class="circle transparent">Графический дизайн</button>
                    <button class="circle transparent">Веб-дизайн</button>
                    <button class="circle transparent">SMM</button>
                    <button class="circle transparent">3Ds-моделирование</button>
                </div>
            </div>
        </div>
    </div>

    <div class="screen-projects full-block padding-sides">
        <div class="wrapper list-3">
            <!-- <a @click="OpenForm(['StudentsWorks', item.id])" :href="'#' + item.name"> -->
                <div v-for="item of AllData.StudentsWorks" :key="item.key" class="item img">
                    <!-- <carousel :autoplay="false" class="screen-gallery" :dots="true" :nav="false" :items=1> -->
                    <img :src="proxy + '/' + item.multiple[0]"/>
                    <!-- </carousel> -->
                    <div class="description">
                        <span class="h4">{{item.title}}</span>
                        <p class="note">{{item.project_description}}</p>
                        <div class="margin-mini"></div>
                        <div class="person-element">
                            <img :src="proxy + '/' + item.files[0].path"/>
                            <div>
                                <p class="t20">{{item.name}}</p>
                                <span class="note">{{item.description}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            <!-- </a> -->
        </div>
    </div>

    <div class="margin"></div>
    
    <layoutFooter />
  </div>
</template>

<style scoped>
    /* .wrapper {
        flex-direction: column;
        align-items: flex-end!important;
        justify-content: flex-start!important;
    } */
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
import { mapActions, mapGetters } from "vuex"

import layoutHeader from "../layouts/header"
// import layoutCourses from "../layouts/courses"
import layoutFooter from "../layouts/footer"
import api from '../../services/admin'
import config from '../../../vue.config'

// import carousel from 'vue-owl-carousel'

export default {
    data() {
        return {
            CourseItem: {},
			proxy: config.devServer.proxy
        }
    },
	computed: {
		...mapGetters([
			'AllData'
		])
	},
	async created() {
		// GET ITEM
		await this.GetData(['StudentsWorks'])
            .then(async response => {
                for(let item of this.AllData.Teacher) {
                    if(item.id == this.CourseItem.teacher) {
                        this.CourseItem.teacher = item
                    }
                }
            }) .catch(async error => {
                console.error(error)
            })
	},
    methods: {
        ...mapActions([
			'OpenForm',
			'GetData',
			'Add',
            'GetCourse'
        ])
    },
    components: {
        layoutHeader,
        // carousel,
        layoutFooter
    },
}
</script>
