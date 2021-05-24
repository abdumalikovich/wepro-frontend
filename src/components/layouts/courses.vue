<template>
    <div class="screen-courses def-block">
        <div class="heading">
            <span class="h2">Выбери направление</span>
            <!-- <div class="sorting">
                <button class="active">Новичкам</button>
                <button>PRO-курсы</button>
                <button>Все курсы</button>
            </div> -->
        </div>
        <div class="wrapper list-3">
            <a target="_blank" :href="'course/' + item.link" v-for="item of AllData.Course" :key="item.key">
                <div class="item">
                    <div class="inside">
                        <div class="title">
                            <p class="h3">{{ item.title }}</p>
                            <span class="h4">Месяцев: {{ item.number_month }}, занятий: {{ item.number_lessons }}</span>
                        </div>
                        <ul class="check">
                            <li class="note" v-for="el of item.unique_data.array_what_can" :key="el.key">{{ el.name }}</li>
                        </ul>

                        <span class="h3">{{ item.price.slice(0, 3) + '.' + item.price.slice(3) }}</span>
                        <span class="note">сум/месяц</span>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
	computed: {
		...mapGetters([
			'AllData'
		])
	},
	methods: {
		...mapActions([
		])
	},
	created() {
	},
}
</script>

<style>

</style>