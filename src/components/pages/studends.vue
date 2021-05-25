<template>
  <div class="body-students">
    <layoutHeader :dark="false"/>
        <div class="screen-one def-block">
            <div class="wrapper">
                <div class="side-left">
                    <h1>Работы наших студентов</h1>
                    <span class="h4">Выберите направление</span>
                    <div class="btns">
                        <button class="circle transparent">Программирование</button>
                        <button class="circle transparent">Графический дизайн</button>
                        <button class="circle transparent">Веб-дизайн</button>
                        <button class="circle transparent">SMM</button>
                        <button class="circle transparent">3Ds-моделирование</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="screen-projects def-block">
            <div class="wrapper list-3">
                <div v-for="item of [1, 2, 3, 4, 5, 6, 7]" :key="item.key" class="item img">
                    <img src="https://mir-s3-cdn-cf.behance.net/projects/404/c87a7d100132617.Y3JvcCw4MzUsNjUzLDg0LDIyOQ.jpg">
                    <div class="description">
                        <span class="h3">Разработка фирменного стиля</span>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, sint.</p>
                        <div class="margin-mini"></div>
                        <div class="person-element">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"/>
                            <div>
                                <span class="h3">Alex Adams</span>
                                <span class="note">Lorem ipsum dolor sit.</span>
                            </div>
                        </div>
                    </div>
                </div>
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

// import Carousel from 'vue-owl-carousel'

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
        await api.GetCourse({ element: this.$route.params.pathMatch })
            .then(async response => {
                this.CourseItem = response.data
                    document.title = 'WEPRO —' + this.CourseItem.title
                    document.head.querySelector('meta[name=description]').content = this.CourseItem.description

                for(let item of this.CourseItem.array_for_who) {
                    for(let item2 of this.for_who) {
                        if(item == item2.id) {
                            this.for_who_final.push(item2)
                        }
                    }
                }
            })
        
		await this.GetData()
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
        // layoutCourses,
        layoutFooter
    },
}
</script>