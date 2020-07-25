<template>
    <div class="lecmtop">
        <el-row class="tl">
            <el-col>
                大佬请留言吧
            </el-col>
            <!-- 留言部分 -->
            <el-col>
                <comment-com></comment-com>
            </el-col>
        </el-row>
        <el-row class="tl">
            <el-col>
                大佬的发言
            </el-col>
        </el-row>
        <!-- 留言列表 -->
        <div>
            <commentlist-com></commentlist-com>
        </div>
    </div>
</template>

<script>
    import commentCom from '../components/comment.vue'
    import commentlistCom from '../components/commentlist.vue'

    export default {
        components: {
            commentCom,
            commentlistCom
        },
    }
</script>

<style>
    .tl {
        padding: 10px 30px;
        background: #F5F5F5;
        font-size: 20px;
        font-weight: bolder;
        border-left-color: #C5CAE9;
        line-height: 100%;
        text-align: left;
        border: 4px solid Transparent;
    }

    .lecmtop {
        padding-top: 20px;
        background: #FAFAFA;
    }
</style>
