class post {
			post(id) {
				const _this = this
				if (id) {
					this.$axios.get('/commentlist/detail/' + id).then(res => {
						const commentlist = res.data
						_this.commentlist.id = commentlist.id
						_this.commentlist.comment = commentlist.comment
						_this.commentlist.username = commentlist.username
						_this.commentlist.commentTime = commentlist.commentTime
					})
				}
			}
		}
		export default operation
