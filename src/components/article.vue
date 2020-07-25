<template>
    <div>

        <div class="body" v-for="item in article" :key="item.id">
            <!-- 题目和标签 -->
            <el-row class="titlebg">
                <el-col>
                    <el-tag>
                        <el-link href="#" :underline="false">{{item.tag}}</el-link>
                    </el-tag>
                    <el-link @click="detail(item.id)" class="title" :underline="false">{{item.title}}</el-link>
                </el-col>
            </el-row>
            <!-- 文章内部内容 -->
            <el-row>
                <!-- 文章图片 -->
                <el-col :xs="{span:24,offset:0}" :sm="{span:4,offset:0}" :md="{span:6,offset:0}" class="articleimg">
					 <img :src="item.img" /> 
                </el-col>
                <!-- 简介 -->
                <el-col :xs="{span:24,offset:0}" :sm="{span:20,offset:0}" :md="{span:16,offset:0}">
                    <el-row class="abstract" v-html="item.content">{{item.content}}</el-row>
                    <!-- comments -->
                    <el-row class="comment">
                        <!-- 作者 -->
                        <el-col :xs="{span:0,offset:0}" :sm="{span:5,offset:0}" :md="{span:3,offset:1}">
                            <el-link href="/about_me" icon="el-icon-user" :underline="false">岚风</el-link>
                        </el-col>
                        <!-- 时间 -->
                        <el-col :xs="{span:10,offset:0}" :sm="{span:10,offset:0}" :md="{span:6,offset:1}">
                            <el-link icon="el-icon-time" :underline="false">{{item.time}}</el-link>
                        </el-col>
                        <!-- 评论 -->
                        <el-col :xs="{span:5,offset:0}" :sm="{span:4,offset:0}" :md="{span:4,offset:0}">
                            <el-link icon="el-icon-chat-round" :underline="false">评论</el-link>
                        </el-col>
                        <!-- 喜欢 -->
                        <!-- <el-col :xs="{span:6,offset:0}" :sm="{span:5,offset:0}" :md="{span:4,offset:0}">
                            <el-link :plain="true" @click="like(item)" icon="el-icon-thumb" :underline="false">
                                点赞{{item.like}}
                            </el-link>
                        </el-col> -->
                    </el-row>
                </el-col>
            </el-row>
        </div>
		<el-pagination class="fenye"
		  background
		  layout="prev, pager, next" 
		  :current-page="currentPage" 
		  :page-size="pageSize" 
		  :total="total" 
		  @current-change="page"	
		  >
		</el-pagination>
    </div>
</template>

<style>
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

    .title:hover {
        color: #55aaff !important;
    }

    .titlebg {
        border: 2px solid Transparent;
		word-break: break-all;
		word-wrap: break-word;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
    }

    img {
        width: 70%;
        height: 70%;
        border-radius: 10px;
    }

    .articleimg {
        margin-left: 20px !important;
    }

    .comment {
        padding: 0;
        margin-top: 20px;
        position: absolute;
        width: 100%;
        bottom: 5px;
    }

    .abstract {
        margin-left: 20px;
        color: #909399;
        font-size: 15px;
        margin-bottom: 50px;
        word-break: break-all;
        word-wrap: break-word;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .body {
        background-color: #F5F5F5;
        margin-top: 20px;
        border: #303133;
    }
	.fenye{
		margin: 0 auto;
		text-align: center;
	}
</style>
<script>
    export default {
		props: ['detail'],
		methods:{
			page(currentPage){
				const _this = this
				this.$axios.get("/article?currentPage="+currentPage).then(res =>{
					_this.article = res.data.data.records
					_this.currentPage = res.data.data.current
					_this.total = res.data.data.total
					_this.pagesize = res.data.data.size
				})
			}
		},
		created() {
			this.page(1)
		},
        components: {},
        data() {
            return {
				article:{},
				currentPage:1,
				total:0,
				pageSize:5,
            }
        }
    }
</script>
