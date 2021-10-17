<template>
	<div class="page-test">
		<div class="status">
			<div></div>
		</div>
		<h1>Привет, мир IT!</h1>
		<h2>Пройди тест и узнай профессию, которая могла бы тебе подойти</h2>
		<div class="change-language">
			<div class="tumblr">
				<div></div>
			</div>
			<span>Ozbek tili</span>
		</div>
		
		<hr>

		<div class="screen" v-for="item of tests" :key="item.key">
			<h2>{{ item.title }}</h2>
			<div @click="setItem(item.id, select.id), item.status = true" class="item" v-for="select of item.answers" :class="{ active: select.status }" :key="select.key">
				<div class="circle"></div>
				<span>{{ select.title }}</span>
			</div>
			<button :disabled="!item.status">Продолжить</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			save: [],
			tests: [
				{
					id: +Math.random().toString().slice(3),
					title: 'Какую цель вы перед собой ставите:',
					status: false,
					answers: [
						{
							id: +Math.random().toString().slice(3),
							status: false,
							title: 'Получить новую профессию'
						},
						{
							id: +Math.random().toString().slice(3),
							status: false,
							title: 'Получить возможность работать на удаленной работе (фриланс)'
						},
						{
							id: +Math.random().toString().slice(3),
							status: false,
							title: 'Саморазвитие для себя'
						}
					]
				},
				// {
				// 	title: 'Чем вы занимаетесь?',
				// 	answers: [
				// 		{
				// 			status: false,
				// 			title: 'Учусь в школе, лицее или колледже'
				// 		},
				// 		{
				// 			status: false,
				// 			title: 'Работаю, но хочу сменить работу'
				// 		},
				// 		{
				// 			status: false,
				// 			title: 'Саморазвитие для себя'
				// 		}
				// 	]
				// },
			]
		}
	},
	methods: {
		setItem: function(testId, answerId) {
			let test = this.tests.filter(item => item.id == testId)[0].answers
			let answer = test.filter(item => item.id == answerId)[0]

			for(let item of test) {
				item.status = false
			}

			answer.status = !answer.status
		}
	}
}
</script>

<style scoped>
button::disabled, button {
	transition: .3s ease;
}
.change-language {
	margin-top: 20px;
	display: flex;
	align-items: center;
	margin-bottom: 30px;
}
hr {
	border: 1px solid #CBD9E6;
}
.change-language .tumblr {
	width: 39px;
	height: 24px;
	background-color: #CBD9E6;
	border-radius: 50px;
	display: flex;
	align-items: center;
	margin-right: 15px;
}
.change-language .tumblr div {
	border-radius: 50px;
	background-color: #fff;
	width: 18px;
	height: 18px;
	margin: 0 3px;
}
h1 {
	font-size: 31px;
	color: #004DFF;
	font-weight: 500;
}
.page-test {
	padding: 45px 24px;
	font-family: 'Gilroy';
}
h2 {
	font-size: 24px;
}
p, span {
	font-size: 16px;
	font-weight: 500;
}
.screen {
	display: flex;
	flex-direction: column;
	grid-gap: 5px;
}
.screen .item .circle {
	width: 18px;
	height: 18px;
	max-width: 18px;
	max-height: 18px;
	min-width: 18px;
	min-height: 18px;
	border: 1px solid #CBD9E6;
	margin-right: 12px;
	border-radius: 50px;
}
.screen .item {
	border: 1px solid #CBD9E6;
	padding: 17px;
	border-radius: 6px;
	display: flex;
	align-items: center;
	cursor: pointer;
}
.screen .item.active {
	border: 2px solid #004DFF;
}
</style>
