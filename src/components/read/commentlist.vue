<template>
	<div id="commentlist">
		<div v-for="item in commentlist" :key="item.id">
			<el-row class="list">
				<el-row class="commentitem">
					<el-col :xs="{span:4,offset:1}" :sm="{span:3,offset:2}" :md="{span:3,offset:1}">
						<el-image :src="require('@/assets/男.jpeg')" fit="fill"></el-image>
					</el-col>
					<el-col :xs="{span:19,offset:0}" :sm="{span:19,offset:0}" :md="{span:20,offset:0}">
						{{item.comment}}
					</el-col>
				</el-row>
				<el-row class="nameTime">
					<el-col :xs="{span:9,offset:2}" :sm="{span:5,offset:5}" :md="{span:5,offset:4}"><i class="el-icon-user-solid">
							{{item.username}}</i></el-col>
					<el-col :xs="{span:13,offset:0}" :sm="{span:10,offset:0}" :md="{span:10,offset:0}"><i class="el-icon-time">{{item.commentTime}}</i></el-col>
				</el-row>
			</el-row>
		</div>
	</div>
</template>
<script>
	export default {
		props: ['cid'],
		watch: {
			cid: function(newVal, oldVal) {
				this.cmid = newVal; //newVal即是cid
				newVal&& this.creater(this.cmid);

			}
		},
		methods: {
			creater(id){
				const _this = this
				//console.log(id)
				if (id!=0) {
					this.$axios.get('/commentlist/detail/' + id).then(res => {
						_this.commentlist = res.data.data
						//console.log(res.data.data)
					})
				}
			}

		},
		data() {
			return {
				commentlist: {},
				cmid: [],
			}
		},
	}
</script>

<style scoped>
	img {
		border-radius: 100%;
	}

	.list {
		background: #edebec;
		border-radius: 20px;
		padding: 10px 5px;
		margin: 10px 5px;
	}

	.nameTime {
		width: 100%;
		position: absolute;
		color: #BDBDBD;
		bottom: 4px;
	}

	.commentitem {
		margin-bottom: 14px;
	}

	el-image {
		border-radius: 100%;
	}
</style>
