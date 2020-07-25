<template>
	<div class="img">
		<div class="tx">
			<el-row>
				<el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:0}" :md="{span:16,offset:2}">
					<vue-typer class="t-head" erase-style='backspace' :erase-delay='100' :type-delay='300' 
					:text='["愿你我编码半生，归来仍是少年",
					"人生是一场旅途，谁都是终是过客，","山有山的青，水有水的绿。","岁月的过客，你我的过客。",
					"没有谁可以留下，或留下什么。","岁月匆忙，红尘深处，遇见，便是缘分。","你知道吗？"]'></vue-typer>
					<el-divider></el-divider>
					<vue-typer class="m-text" initial-action='erasing' erase-style='backspace' :erase-delay='100' :type-delay='300' text='
	I tried so hard
	我曾那么努力
	And got so far
	坚持那么久
	But in the end
	结果到头来
	It doesn"t even matter
	那根本是无济于事
	One thing, I don’t know why
	有一件事，我不明白
	It doesn’t even matter how hard you try
	不管你怎样努力都无济于事'></vue-typer>
				</el-col>
			</el-row>
		</div>
		<el-row :gutter="20">
			<el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:0}" :md="{span:16,offset:2}">
				<article-com :detail='detail'></article-com>
			</el-col>
			<el-col :xs="{span:0,offset:0}" :sm="{span:7,offset:0}" :md="{span:6,offset:0}">
				<right-com :detail='detail'></right-com>
			</el-col>
		</el-row>
	</div>
</template>
<style scoped>
	.img {
		background: url("../0.jpg") !important;
		/* background-image: url("../天气.jpg"); */
		/* background-: url("../天气.jpg"); */
		/* 		width: 100%;
		height: 100%;
		background-size: 100% auto;
		text-align: center;
		-webkit-filter: grayscale(30%);
		-moz-filter: grayscale(30%);
		-ms-filter: grayscale(30%);
		-o-filter: grayscale(30%);
		filter: grayscale(30%); */
		background-attachment: fixed !important;
		background-repeat: no-repeat !important;
		background-size: cover !important;
		background-position: center 0 !important;
		-webkit-background-size: cover !important;
		-o-background-size: cover !important;
		filter: alpha(opacity=80) !important;
	}

	.m-text {
		font-size: 20px;
		line-height: 100%;
		color: #ffffff;
		text-align: center !important;
	}

	.t-head {
		font-size: 30px;
		line-height: 100%;
		color: #ffffff;
		text-align: center !important;
		align-self: center !important;
	}

	span {
		align-self: center;
	}

	.tx {
		height: 700px;
		align-self: center;
		text-align: center;
	}
</style>
<script>
	import articleCom from '../components/article.vue'
	import rightCom from '../components/right_aboutme.vue'

	export default {
		components: {
			articleCom,
			rightCom,
		},
		data() {
			return {}
		},
		methods: {
			detail: async function(id) {
				// 跳转页面前， 浏览记录+1
				// this.operation.addBrowse(this.$http, id)
				// 跳转页面
				this.$router.push({
					path: '/detail/' + id
				})
			},
		}
	}
</script>
