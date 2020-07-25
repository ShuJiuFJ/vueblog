<template>
    <div id="footer" class="footer">
        <!-- <el-col :xs="{span:10,offset:2}" :sm="{span:7,offset:6}" :md="{span:4,offset:8}">我的博客已快落的运行<span v-html='longTime'>{{longTime}}</span><span class="timeJump">(●'◡'●)ﾉ♥</span></el-col> -->
        <el-row class="footer_class">

            <el-col :xs="{span:10,offset:2}" :sm="{span:8,offset:6}" :md="{span:6,offset:8}">博客已快落的运行<span
                    v-html='longTime'>{{longTime}}</span><span class="timeJump">(●'◡'●)ﾉ♥岚风版权所有</span></el-col>
            <el-col :xs="{span:10,offset:0}" :sm="{span:7,offset:0}" :md="{span:4,offset:0}">
                <el-link :underlin="false" href="http://www.beian.miit.gov.cn/" target="_blank" style="color: #000000;">
                    蜀ICP备20020539号
                </el-link>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    .timeJump {
        animation: my-face 5s infinite ease-in-out;
        -webkit-animation: my-face 5s infinite ease-in-out;
        display: inline-block;
        margin: 0 5px;
    }

    .footer {
        background: #78797a;
        height: 65px !important;
    }

    .footer_class {
        height: 65px;
        padding: 20px;
        color: #000000;
    }
</style>
<script>
    export default {
        data() { //选项 / 数据
            return {
                longTime: '',
            }
        },
        methods: { //事件处理器
            runTime: function () {//运行倒计时
                var that = this;
                var oldTime = new Date('2020/06/01 00:00:00');
                var timer = setInterval(function () {
                    var nowTime = new Date();
                    var longTime = nowTime - oldTime;
                    var days = parseInt(longTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
                    var hours = parseInt(longTime / 1000 / 60 / 60 % 24, 10); //计算剩余的小时
                    var minutes = parseInt(longTime / 1000 / 60 % 60, 10);//计算剩余的分钟
                    var seconds = parseInt(longTime / 1000 % 60, 10);//计算剩余的秒数
                    that.longTime = days + "天" + hours + "小时" + minutes + "分" + seconds + "秒";
                }, 1000)
            }
        },
        components: { //定义组件

        },
        created() { //生命周期函数
            var that = this;
            that.runTime();
        }
    }
</script>