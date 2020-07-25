<template>
    <div class="back">
        <el-row>
            <el-col :xs="{span:3,offset:0}" :sm="{span:4,offset:2}" :md="{span:5,offset:2}">
            </el-col>
            <el-col :xs="{span:0,offset:0}" :sm="{span:16,offset:2}" :md="{span:12,offset:2}">
                <span class="errorTxt">404</span>
            </el-col>
            <el-col :xs="{span:21,offset:0}" :sm="{span:0,offset:0}" :md="{span:0,offset:0}">
                <span class="errorTxt_xs">哎呀,怎么丢了呀！</span>
            </el-col>

        </el-row>

    </div>
</template>
<style scoped>
    .errorTxt::after {
        position: absolute;
        width: 0;
        height: 0;
        content: " ";
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;
        border-right: 20px solid #565966;
        left: -20px;
    }

    .errorTxt {
        position: relative;
        text-align: center;
        color: darkblue;
        background: #565966;
        padding: 10%;
        font-size: 30px;
        border-radius: 30px;
        top: 150px;
        left: 100px;
        border: 1px solid #565966;
    }

    .errorTxt_xs::after {
        position: absolute;
        width: 0;
        height: 0;
        content: " ";
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-right: 10px solid #565966;
        left: -10px;
    }

    .errorTxt_xs {
        position: relative;
        text-align: center;
        color: darkblue;
        background: #C5CAE9;
        padding: 30px;
        font-size: 20px;
        border-radius: 30px;
        top: 100px;
        left: 50px;
        border: 1px solid #C5CAE9;
    }
	.back{
		background: url(../assets/1.jpg);
		height: 900px;
	}
    img {
        width: 100%;
        float: right;
        margin-top: 150px;
        border-radius: 100%;
		height: 100%;
    }
</style>