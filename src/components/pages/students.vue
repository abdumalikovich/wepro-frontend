<template>
    <div class="body-course">
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
        <layoutFooter/>
    </div>
</template>

<style scoped>
/* .wrapper {
    flex-direction: column;
    align-items: flex-end!important;
    justify-content: flex-start!important;
} */
h1 {
    margin-bottom: 32px !important;
}

.wrapper .btns {
    flex-wrap: wrap;
    grid-gap: 10px;
    margin-top: 22px;
}
</style>

<script>
import {mapActions, mapGetters} from "vuex"

import layoutHeader from "../layouts/header"
// import layoutCourses from "../layouts/courses"
import layoutFooter from "../layouts/footer"
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
        ...mapGetters('teachers', {findTeachersInStore: 'find'})
    },
    created() {
        this.prefetchData()
    },
    methods: {
        ...mapActions([
            'OpenForm',
            'Add'
        ]),
        ...mapActions('teachers', {fetchTeachers: 'find'}),
        ...mapActions('courses', {getCourse: 'get'}),

        async prefetchData() {
            let course = await this.getCourse(this.$route.params.pathMatch)
            document.title = 'WEPRO —' + course.title
            document.head.querySelector('meta[name=description]').content = course.description

            for (let item of course.array_for_who) {
                for (let item2 of this.for_who) {
                    if (item === item2.id) {
                        this.for_who_final.push(item2)
                    }
                }
            }
            this.CourseItem = course

            const teachers = this.fetchTeachers().then(response => response.data).catch(console.error)
            for (let teacher of teachers) {
                if (teacher.id === this.CourseItem.teacher) {
                    this.CourseItem.teacher = teacher
                }
            }
        }
    },
    components: {
        layoutHeader,
        // layoutCourses,
        layoutFooter
    },
}
</script>