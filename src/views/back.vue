<template>
	<div>
		<el-image class="img" :src="require('@/assets/1.jpg')" fit="fill">
			<!-- 	<vue-typer class="m-text" erase-style='backspace' :erase-delay='100' :type-delay='300' text='
	写字楼里写字间，写字间里程序员；
	
	程序人员写程序，又拿程序换酒钱。
	
	酒醒只能网上坐，醉酒还来网下眠；
	
	醉酒酒醒日复日，网上网下年复年。
	
	但愿老死电脑间，不愿鞠躬老板前；
	
	别人笑我太疯癫，我笑自己命太贱；
	
	不见满街漂亮妹，那个归得程序员。
		'></vue-typer> -->
		</el-image>
		<el-row class="filter-container">
			<el-button class="filter-item" type="primary" icon="el-icon-right">退出</el-button>
			<el-button class="filter-item" type="primary" icon="el-icon-plus" @click="add()">新建
<!-- 				<el-link class="link" href="/add" :underline="false">
					<i class="el-icon-plus"></i>新建
				</el-link> -->
			</el-button>
			<!-- 		</el-row>
		<el-row> -->
			<el-table fit :data="article" border>
				<el-table-column prop="tag" label="标签" width="150px"></el-table-column>
				<el-table-column prop="title" label="标题" min-width="150px"></el-table-column>
				<!-- <el-table-column prop="id" label="id" min-width="150px"></el-table-column> -->
				<el-table-column label="操作" min-width="150px">
					<template slot-scope="scope">
						<el-button class="button" size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						<el-button class="button" size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination class="fenye" background layout="prev, pager, next" :current-page="currentPage" :page-size="pageSize"
			 :total="total" @current-change="page">
			</el-pagination>
		</el-row>
	</div>
</template>

<script>
	export default {
		// props: ['detail'],
		methods: {
			handleDelete(index, row) {
				var id = (index, row).id
				const _this = this
				this.$axios.post('/commentlist/delete/'+id,{
					headers: {
						"Authorization": localStorage.getItem("token")
					}
				}).then(res => {
					_this.$alert('评论同时操作成功', '提示', {
						confirmButtonText: '确定',
						callback: action => {
							_this.$router.push("/back")
						}
					});
				
				})
				this.$axios.post('/article/delete/'+id,{
					headers: {
						"Authorization": localStorage.getItem("token")
					}
				}).then(res => {
					_this.$alert('操作成功', '提示', {
						confirmButtonText: '确定',
						callback: action => {
							_this.$router.push("/bakc")
						}
					});
				
				})
			},
			add(){
				this.$router.push({
					path: '/add'
				})
			},
			handleEdit(index, row) {
				var id = (index, row).id
				console.log(id)
				this.$router.push({
					path: '/detail/' + id + '/edit',
					query: {
						id: id
					}
				})
			},
			page(currentPage) {
				const _this = this
				this.$axios.get("/article?currentPage=" + currentPage).then(res => {
					_this.article = res.data.data.records
					_this.currentPage = res.data.data.current
					_this.total = res.data.data.total
					_this.pagesize = res.data.data.size
				})
			},
		},
		created() {
			this.page(1)
		},
		add() {
			this.$router.push({
				path: '/add'
			})
		},
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

<style scoped>
	.titlebg {
		border: 2px solid Transparent;
		word-break: break-all;
		word-wrap: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.title {
		color: #303133 !important;
		margin: 0 !important;
		padding: 10px 20px !important;
		font-size: 20px !important;
		font-weight: bold !important;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.button {
		float: right;
		margin-left: 20px !important;
	}

	.filter-item {
		float: right !important;
		margin-left: 20px !important;
		margin-bottom: 50px !important;
		margin-top: 50px !important;
	}

	.filter-container {
		float: centent !important;
	}

	.img {
		padding: 0 !important;
		margin: 0 !important;
	}

	.link {
		color: #FFFFFF !important;
	}
</style>
