<template>
	<div class="subject-select">
		<div
			class="subject-select-wrap"
			:class="{ active: isActive }"
			@click="clickOptions"
		>
			<div class="subject-select-area">
				<div class="subject-select-title">
					<span>주요 산업 분석대상 선택</span>
				</div>
				<div class="subject-selected">
					<ul>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
						<li>
							<a href="#">소재 <i class="ti-close"></i></a>
						</li>
					</ul>
				</div>
				<div class="subject-select-reset">
					<a href="#"><i class="ti-reload"></i>전체해제 </a>
				</div>
			</div>
			<div class="subject-select-view">
				<h3 class="subject-select-view-title">주요 산업 분석 대상 선택하기</h3>
				<a href="#none" class="subject-select-close-mobile"
					><i class="ti-close"></i
				></a>
				<div class="category_wrap industry_wrap">
					<div class="category_list col-w20">
						<div class="industry_title">산업</div>
						<div class="category_list-wrap">
							<div class="scrollWrap">
								<ul>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="category_list col-w20">
						<div class="industry_title">대분류</div>
						<div class="category_list-wrap">
							<div class="scrollWrap">
								<ul>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="category_list col-w20">
						<div class="industry_title">중분류</div>
						<div class="category_list-wrap">
							<div class="scrollWrap">
								<ul>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="category_list col-w20">
						<div class="industry_title">소분류</div>
						<div class="category_list-wrap">
							<div class="scrollWrap">
								<ul>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div class="category_list col-w20">
						<div class="industry_title">세세분류</div>
						<div class="category_list-wrap">
							<div class="scrollWrap">
								<ul>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
									<li>
										<div class="checkbox-out">
											<input type="checkbox" id="check1" /><label
												for="check1"
												class="checkbox"
												>LED광</label
											>
										</div>
										<span class="category_list_txt"><a href="#">LED광</a></span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div class="mappingBtn btnArea text-right">
					<a href="#" class="btn btn-primary">초기화</a>
					<a href="#" class="btn btn-info">적용</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'analysisSltOptions',
	data: function () {
		return {
			isActive: false,
		};
	},
	methods: {
		clickOptions: function () {
			this.isActive = !this.isActive;
		},
	},
};
</script>
