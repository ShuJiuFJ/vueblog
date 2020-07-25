<template>
	<div>
		<div>
			<el-row class="right">
				<el-col :xs="{span:30,offset:0}" :sm="{span:30,offset:0}" :md="{span:40,offset:0}">
					<el-image :src="require('@/assets/头像.jpeg')"></el-image>
					<el-link href="/about_me" :underline="false">
						<el-col :span="24" style="font-size: 20px; font-weight: bolder;">LanFeng学习站</el-col>
					</el-link>
					<p><i class="el-icon-chat-dot-round"></i>简介：本人大三在读,代码新手本博客纯属练习一下自己<br>
						<i class="el-icon-s-custom"></i>LanFeng:这是个人博客，用于分享一些乱七八糟的面试题解题、代码、
						硬件折腾和一些黑暗料理的内容感谢你的点击
						联系我
						Email：935085632@qq.com
						QQ：935085632
					</p>
				</el-col>
			</el-row>
			<!-- <el-row class="right">
				<el-col :xs="{span:30,offset:0}" :sm="{span:30,offset:0}" :md="{span:40,offset:0}">
					<div class="guesslist" v-for="(item, index) in article" :key="index">
						<vue-word-cloud :words="words">
							<template slot-scope="{text, weight, word}">
								<div :title="weight" 
								style="cursor: pointer;" 
								@click="onWordClick(word)">
									{{item.tag}}
								</div>
							</template>
						</vue-word-cloud>
					</div>
				</el-col>
			</el-row> -->
			<el-row class="right">
				<div id="guess">
					<el-row class="guess_title">
						<el-col :span="24" class="title">热门文章</el-col>
					</el-row>

					<div class="guesslist" v-for="(item, index) in article" :key="index">
						<el-row>
							<!-- 文章图片 -->
							<el-col class="img" :span="6">
								<img :src="item.img">
							</el-col>
							<!-- 文章详情 -->
							<el-col :span="18">
								<!-- 文章标题 -->
								<el-row class="body_text">
									<el-link class="title" @click="detail(item.id)" :underline="false">{{item.title}}
									</el-link>
								</el-row>
								<el-row>
									<!-- 文章浏览数 -->
									<!-- <el-col :xs="{span:9,offset:1}" :sm="{span:14,offset:0}" :md="{span:12,offset:0}">
										<el-link icon="el-icon-link" :underline="false">浏览数{{item.watch}}</el-link>
									</el-col> -->
									<!-- 文章评论数 -->
									<el-col class="body_text" :xs="{span:8,offset:1}" :sm="{span:9,offset:1}" :md="{span:10,offset:1}">
										<el-link icon="el-icon-chat-round" @click="detail(item.id)" :underline="false">评论
										</el-link>
									</el-col>
								</el-row>
							</el-col>
						</el-row>
					</div>
				</div>
			</el-row>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['detail'],
		methods: {
			page(currentPage) {
				this.$axios.get("/article?currentPage=" + currentPage).then(res => {
					this.article = res.data.data.records
					this.currentPage = res.data.data.current
					this.total = res.data.data.total
					this.pagesize = res.data.data.size
				})
			}
		},
		created() {
			this.page(1)
		},
		components: {},
		data() {
			return {
				article: {},
				currentPage: 1,
				total: 0,
				pageSize: 5,
			}
		}
	}
</script>

<style>
	.right {
		margin-top: 20px;
		margin-right: 20px;
		background: #fdfef6;
		border-radius: 10px;
		text-align: center;
	}

	.guess_title {
		padding: 5px;
		padding-left: 20px;
		margin-bottom: 20px;
		background: #fdfef6;
		border: 4px solid Transparent;
		border-left-color: #fdfef6;
	}

	.guesslist {
		margin-bottom: 10px;
	}

	.body_text {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	img {
		width: 80%;
		height: 80%;
		border-radius: 5px;
	}

	.title {
		color: #303133;
		margin: 20px;
		font-size: 16px;
		font-weight: bold;
	}

	.title {
		font-size: 20px;
		font-weight: bold;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

	}
</style>
