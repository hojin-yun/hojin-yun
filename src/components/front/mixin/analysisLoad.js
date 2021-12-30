let analysisLoadMixin = {
	mounted() {
		setTimeout(() => {
			$('.pageLoading').addClass('ana');
		}, 100);
		//this.$store.commit('fboardList/updateState', { loading: true });
		const _this = this;
		for (let index = 0; index < $('iframe').length; index++) {
			const element = $('iframe').eq(index);
			element.bind('load', function () {
				if ($('iframe').length - 1 == index) {
					$('.pageLoading').removeClass('ana');
					_this.$store.commit('fboardList/updateState', { loading: false });
				}
			});
		}
	},
};
export default analysisLoadMixin;
