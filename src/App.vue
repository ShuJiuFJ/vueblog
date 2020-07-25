<template>
    <div id="app">
        <el-container>
            <!-- 导航栏 -->
            <el-header class="nav">
                <nav-com></nav-com>
            </el-header>
            <!-- 主体 style="padding-right:0px !important;" -->
            <el-main style="padding:0px !important;">
                <transition name="slide-fade">
                    <router-view></router-view>
                </transition>
            </el-main>
            <!-- 底部 -->
            <el-footer class="footer">
                <footer-com></footer-com>
            </el-footer>
        </el-container>
        <el-backtop target=""></el-backtop>
    </div>
</template>
<script>
    import navCom from './views/nav.vue'
    //import Navp from './views/Navp.vue'
    import footerCom from './views/footer.vue'

    export default {
        name: 'app',
        components: {
            navCom,
            footerCom
        },
    }
</script>

<style scoped>
    .footer .nav {
        padding: 0 !important;
    }

    .el-header, .el-footer {
        background-color: #78797a;

    }

    .el-main {
        background: #efefef;
        color: #333;
    }

    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.6s;
    }

    .slide-fade {
        position: absolute;
        left: 0;
        right: 0;
    }

    .slide-fade-enter-active {
        transition: all 1.2s ease;
    }

    .slide-fade-leave-active {
        transition: all .1s cubic-bezier(2.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to {
        left: 0;
        right: 0;
        transform: translatex(50px);
        opacity: 0;
    }

</style>