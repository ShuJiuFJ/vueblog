<template>
	<div>
		<div class="m-content">

			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="标题" prop="title">
					<el-input v-model="ruleForm.title"></el-input>
				</el-form-item>
				<el-form-item label="标签" prop="tag">
					<el-input v-model="ruleForm.tag"></el-input>
				</el-form-item>

				<el-form-item label="封面图片" prop="img">
					<el-input type="textarea" v-model="ruleForm.img"></el-input>
				</el-form-item>

				<el-form-item label="内容" prop="content">
					<mavon-editor class="text" v-model="ruleForm.content"></mavon-editor>
				</el-form-item>

				<el-form-item>
					<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
					<el-button @click="resetForm('ruleForm')">重置</el-button>
				</el-form-item>
			</el-form>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					id: '',
					tag: '',
					title: '',
					img: '',
					content: ''
				},
				rules: {
					title: [{
							required: true,
							message: '请输入标题',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 40,
							message: '长度在 3 到 40 个字符',
							trigger: 'blur'
						}
					],
					tag: [{
							required: true,
							message: '请输入标签',
							trigger: 'blur'
						},
						{
							min: 0,
							max: 10,
							message: '长度在 0 到 10 个字符',
							trigger: 'blur'
						}
					],
					img: [{
						required: true,
						message: '图片地址',
						trigger: 'blur'
					}],
					content: [{
						trequired: true,
						message: '请输入内容',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {

						const _this = this
						this.$axios.post('/article/edit', this.ruleForm, {
							headers: {
								"Authorization": localStorage.getItem("token")
							}
						}).then(res => {
							console.log(res)
							_this.$alert('操作成功', '提示', {
								confirmButtonText: '确定',
								callback: action => {
									_this.$router.push("/back")
								}
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
		},
	}
</script>

<style scoped>
	.m-content {
		text-align: center;
		margin-top: 50px;
	}

	.text {
		height: 900px;
		overflow-y: auto;
		max-height: 900px;
	}
</style>
