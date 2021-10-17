<template>
    <main class="screen-check">
        <div class="margin"></div>

        <div class="def-block">
            <h1>Всего элементов: {{ AllData.Check.length }}</h1>
        </div>

        <div class="margin-line"></div>

        <div class="def-block list-3">
            <div class="item" v-for="item of AllData.Check" :key="item.key">
                <div class="title">
                    <p class="h3">{{AllData.Check.indexOf(item) + 1}}. {{ item.name }}</p>
                    <span class="h3">{{item.course}}</span>
                    <span class="note">{{item.age}}</span>
                </div>
            </div>
        </div>
        
        <div class="margin"></div>
    </main>
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
			'GetCheck',
		])
	},
    created() {
		this.GetCheck()
    }
}
</script>

<style>

</style>