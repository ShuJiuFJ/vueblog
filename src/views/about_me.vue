<template class="bg">
    <div class="about">
        <p class="resume">About Me</p>
        <!-- 基本信息 -->
        <el-image class="img" :src="require('@/assets/你好.jpg')" fit="fill"></el-image>
        <div>
            <p>就读大学：内江师范学院<br/>
                掌握技术：<br/>
                熟练的使用 Java 语言进行面向对象程序设计,有良好的编程习惯<br/>
                熟悉基于 JSP 和 Servlet 的 Java Web 开发，
                对 Servlet 和 JSP <br/>的工作原理和生命周期有一定的了解
                熟练vue、node、elementUI<br/>等框架
                了解spring、springMVC、mybatis、spring boot等
                熟悉<br/>常用的关系型数据库产品（MySQL、Oracle），掌握编写 SQL 语句。</p>

        </div>
        <div class="aboutme">
            <!-- 个人技能树 -->
            <p class="resume">个人技能</p>

            <el-row class="skills">
                <el-col class="skill" :xs="{span:3,offset:5}" :sm="{span:2,offset:5}" :md="{span:1,offset:5}">前端
                </el-col>
                <el-col class="skill_value" :xs="{span:12,offset:0}" :sm="{span:12,offset:0}" :md="{span:12,offset:1}">
                    <el-progress :text-inside="true" :stroke-width="26" :percentage="50"></el-progress>
                </el-col>
            </el-row>
            <el-row class="skills">
                <el-col class="skill" :xs="{span:3,offset:5}" :sm="{span:2,offset:5}" :md="{span:1,offset:5}">java
                </el-col>
                <el-col class="skill_value" :xs="{span:12,offset:0}" :sm="{span:12,offset:0}" :md="{span:12,offset:1}">
                    <el-progress :text-inside="true" :stroke-width="26" :percentage="60"></el-progress>
                </el-col>
            </el-row>
            <el-row class="skills">
                <el-col class="skill" :xs="{span:3,offset:5}" :sm="{span:2,offset:5}" :md="{span:1,offset:5}">node
                </el-col>
                <el-col class="skill_value" :xs="{span:12,offset:0}" :sm="{span:12,offset:0}" :md="{span:12,offset:1}">
                    <el-progress :text-inside="true" :stroke-width="26" :percentage="50"></el-progress>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
    }
</script>
<style scoped>
    .img {
        width: 400px;
        height: 400px;
    }

    .about {
        background: #FAFAFA !important;
        text-align: center;
    }

    .skills {
        margin-top: 20px;
        line-height: 100%;
    }

    .aboutme {
        margin-bottom: 40px;
    }

    .name {
        padding: 10px 0;
        text-align: center;
        font-size: 19px;
        font-weight: bold;
    }

    p {
        line-height: 100%;

    }

    .resume {
        margin: 0;
        padding: 10px 0px;
        text-align: center;
        background: #F5F5F5;
        border: 4px solid Transparent;
        border-left-color: #F5F5F5;
        font-size: 20px;
        font-weight: bold;
    }

    .basic {
        margin: 0 auto;
        width: 320px;
        text-align: left;
    }

    .pro {
        background: aquamarine;
    }
</style>
