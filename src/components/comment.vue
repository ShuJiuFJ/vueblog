<template>
    <div id="comment">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="昵称" prop="username">
                <el-input class="inputsize" v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
                <el-tooltip class="item" effect="dark" content="此处为非必填内容" placement="top-start">
                    <el-input type="textarea" value-key="非必填内容" v-model="ruleForm.emily"></el-input>
                </el-tooltip>
            </el-form-item>
            <el-form-item label="您的想法" prop="desc">
                <el-input type="textarea" v-model="ruleForm.comment"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    username: '',
                    emily: '',
                    comment: '',
					blogid:'0',	
                },
                rules: {
                    name: [{
                        required: true,
                        message: '请输入昵称名称',
                        trigger: 'blur'
                    },
                        {
                            min: 3,
                            max: 5,
                            message: '长度在 1 到 5 个字符',
                            trigger: 'blur'
                        }
                    ],
                    desc: [{
                        required: true,
                        message: '大佬还是留下你宝贵的建议吧',
                        trigger: 'blur'
                    },
                        {
                            max: 255,
                            message: '缺点太多，大佬嘴下留情',
                            trigger: 'blur'
                        }
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                    
                    	const _this = this
                    	this.$axios.post('/commentlist/edit', this.ruleForm, {
                    		headers: {
                    			"Authorization": localStorage.getItem("token")
                    		}
                    	}).then(res => {
                    		_this.$alert('操作成功', '提示', {
                    			confirmButtonText: '确定',
                    		});
                    
                    	})
                    
                    } else {
                    	console.log('error submit!!');
                    	return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style>
    .box {
        width: 400px;
    }

    .item {
        margin: 4px;
        width: 200px;
    }

    #comment {
        padding: 10px 30px;

    }

    .inputsize {
        width: 200px !important;
    }
</style>
