<template>
	<div id="page">
		<el-backtop></el-backtop>
		<el-row class="bodytx">
			<!-- 文章内容 -->
			<el-col class="essay" :xs="{span:24,offset:0}" :sm="{span:16,offset:4}" :md="{span:16,offset:4}">
				<el-row class="et">
					<!-- 标题 -->
					<div class="title_t">
						{{item.title}}
					</div>
				</el-row>
				<el-row class="describe">
					<!-- 作者 -->
					<el-col :xs="{span:5,offset:2}" :sm="{span:4,offset:2}" :md="{span:3,offset:1}">
						<el-link href="/about_me" icon="el-icon-user" :underline="false">岚风</el-link>
					</el-col>
					<!-- 时间 -->
					<el-col :xs="{span:10,offset:0}" :sm="{span:7,offset:0}" :md="{span:6,offset:0}">
						<el-link  icon="el-icon-time" :underline="false">
							{{item.time}}
						</el-link>
					</el-col>
				</el-row>
				<el-row >
					<div class="markdown-body content" v-html="blog">
					</div>
				</el-row>
				<el-row class="comments">
					<el-col :span="24">大佬请留言吧</el-col>
				</el-row>
				<el-row>
					<comment-com :cid='item.id'></comment-com>
				</el-row>
				<el-row class="comments">
					<el-col :span="24">大佬的发言</el-col>
				</el-row>
				<el-row>
					<!-- 留言列表 -->
					<el-col :span="24">
						<commentlist-com :cid="item.id"></commentlist-com>
					</el-col>
				</el-row>
			</el-col>

		</el-row>
	</div>
</template>

<script>
	import commentCom from './read/comment.vue'
	import commentlistCom from './read/commentlist.vue'
	import 'github-markdown-css';
	export default {
		props: ['cid'],
		components: {
			commentCom,
			commentlistCom
		},
		data() {
			return {
				item: {
					id:'',
					title:'',
					content:'',
					time:''
				}
			}
		},
		created() {
			const detailid = this.$route.params.id
			const _this = this
			if(detailid){
				this.$axios.get('/article/detail/'+detailid).then(res =>{
					const item = res.data.data
					_this.item.id = item.id
					_this.item.title = item.title
					_this.item.time = item.time
					var MarkdownIt = require("markdown-it")
					var md = new MarkdownIt()
					var result = md.render(item.content)
					_this.blog = result
				})
			}
		}
	}
</script>

<style scoped>
	.essay {
		/* margin: 0;
	    padding: 0; */
		margin-top: 50px ;
		margin-bottom: 10px ;
		background: #FAFAFA;
		border-radius: 5px;
	}

	.title_t {
		color: #212121;
		/* background: rosybrown; */
		font-size: 40px;
		margin-left: 30px;
	}

	.content {
		margin-left: 20px;
	}

	.comments {
		padding: 10px 30px;
		background: #F5F5F5;
		border: 4px solid Transparent;
		border-left-color: #C5CAE9;
		font-size: 18px;
		font-weight: bold;
	}

	.describe {
		width: 100%;
		margin-bottom: 10px;
		text-align: center;
	}

	.lecmtop {
		padding-top: 20px;
		background: #FAFAFA;
	}
	.et {
	    padding-bottom: 20px;
	}
	.bodytx{
		margin: 0 auto;
		align-content: center;
	}
</style>
