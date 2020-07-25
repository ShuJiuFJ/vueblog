<template>
    <div class="line">

        <el-menu :default-active="this.$route.path"
                 class="el-menu-demo"
                 mode="horizontal"
                 background-color="#78797a"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 router>
            <el-menu-item class="logo">LanFeng</el-menu-item>
            <el-menu-item index="/"><i class="el-icon-s-grid"></i>首页</el-menu-item>
            <!-- <el-menu-item index=""><i class="el-icon-s-cooperation"></i>分类</el-menu-item> -->
            <!-- <el-menu-item index="" class="option"><i class="el-icon-s-cooperation"></i>分类</el-menu-item> -->
          <!--  <el-menu-item index=""><i class="el-icon-s-goods"></i>商场</el-menu-item> -->
            <el-menu-item index="/about_me"><i class="el-icon-s-custom"></i>关于我</el-menu-item>
            <el-menu-item index="/leaveComments"><i class="el-icon-edit"></i>留言板</el-menu-item>
            <el-menu-item index="/time"><i class="el-icon-time"></i>时间轴</el-menu-item>
			<el-menu-item v-show="!haslogin" index="/login" class="login"><i class="el-icon-user"></i>登录</el-menu-item>
			<el-menu-item v-show="haslogin"  class="login" @click="logout"><i class="el-icon-right"></i>退出</el-menu-item>
        </el-menu>
    </div>
</template>
<script>
    export default {
		data(){
			return{
				user:{
					username:'请先登录'
				},
				haslogin:false
			}
		},
        methods: {
			logout(){
				const _this = this
				_this.$axios.get("/logout",{
					headers: {
						"Authorization": localStorage.getItem("token")
					}
				}).then(res =>{
					_this.$store.commit("REMOVE_INFO")
					_this.$router.push("/login")
				})
				},
			created(){
				if(this.$store.getters.getUser.username){
					this.user.username = this.$store.getters.getUser.username
					this.haslogin = true
				}
			}
        }
    }
</script>
<style scoped>
    .logo {
        margin: 0 30px !important;
		vertical-align: middle !important;
    }

    .text {
        font-size: 20px;
    }
	.login{
		float: right;
	}
</style>
