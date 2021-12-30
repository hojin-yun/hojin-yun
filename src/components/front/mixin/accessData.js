import { addAccess } from '@/api/accessData'; //db api
import { fetchIp } from '@/api/search'; //db api
let accessData = {};
const ua = navigator.userAgent;
const userAgent = ua.toLowerCase();
let accessEnter, accessGetOut;
/* 브라우저 체크 */
if (userAgent.indexOf('edge') > -1) {
	accessData.brsNm = 'EDGE';
} else if (userAgent.indexOf('whale') > -1) {
	accessData.brsNm = 'NAVER Whale';
} else if (userAgent.indexOf('chrome') > -1) {
	accessData.brsNm = 'Chrome';
} else if (userAgent.indexOf('firefox') > -1) {
	accessData.brsNm = 'Firefox';
} else if (userAgent.indexOf('safari') > -1) {
	accessData.brsNm = 'Safari';
} else {
	accessData.brsNm = 'IE';
}
/* OS 체크 */
if (ua.match(/Win(dows )?NT 6\.0/)) {
	accessData.osNm = 'Windows Vista';
} else if (ua.match(/Win(dows )?(NT 5\.1|XP)/)) {
	accessData.osNm = 'Windows XP';
} else {
	if (ua.indexOf('Windows NT 5.1') != -1 || ua.indexOf('Windows XP') != -1) {
		accessData.osNm = 'Windows XP';
	} else if (
		ua.indexOf('Windows NT 7.0') != -1 ||
		ua.indexOf('Windows NT 6.1') != -1
	) {
		accessData.osNm = 'Windows 7';
	} else if (
		ua.indexOf('Windows NT 8.0') != -1 ||
		ua.indexOf('Windows NT 6.2') != -1
	) {
		accessData.osNm = 'Windows 8';
	} else if (
		ua.indexOf('Windows NT 8.1') != -1 ||
		ua.indexOf('Windows NT 6.3') != -1
	) {
		accessData.osNm = 'Windows 8.1';
	} else if (
		ua.indexOf('Windows NT 10.0') != -1 ||
		ua.indexOf('Windows NT 6.4') != -1
	) {
		accessData.osNm = 'Windows 10';
	} else if (
		ua.indexOf('iPad') != -1 ||
		ua.indexOf('iPhone') != -1 ||
		ua.indexOf('iPod') != -1
	) {
		accessData.osNm = 'Apple iOS';
	} else if (ua.indexOf('Android' != -1)) {
		accessData.osNm = 'Android OS';
	} else if (ua.match(/Win(dows )?NT( 4\.0)?/)) {
		accessData.osNm = 'Windows NT';
	} else if (ua.match(/Mac|PPC/)) {
		accessData.osNm = 'Mac OS';
	} else if (ua.match(/Linux/)) {
		accessData.osNm = 'Linux';
	} else if (ua.match(/(Free|Net|Open)BSD/)) {
		accessData.osNm = RegExp.$1 + 'BSD';
	} else if (ua.match(/SunOS/)) {
		accessData.osNm = 'Solaris';
	}
}
let accessDataMinxin = {
	mounted() {
		window.addEventListener('beforeunload', this.handler);
	},
	beforeDestroy() {
		window.removeEventListener('beforeunload', this.handler);
	},
	methods: {
		async handler(e, f) {
			if (this.canLeaveSite) return;
			try {
				const { data } = await fetchIp(
					'http://211.109.9.106:8082/api/main/serverCheck',
				);
				if (accessData.ipAddr == data.remoteAddress) {
					/* 종료 시간 체크 */
					accessGetOut = new Date();
					/* 페이지 타이틀 */
					accessData.grpNm = e;
					accessData.pgNm = f;

					/* 체류 시간 계산 */
					var timeGap = new Date(0, 0, 0, 0, 0, 0, accessGetOut - accessEnter);
					var diffHour = this.zero(timeGap.getHours()); // 시간
					var diffMin = this.zero(timeGap.getMinutes()); // 분
					var diffSec = this.zero(timeGap.getSeconds()); // 초
					accessData.cntnHr = diffHour + diffMin + diffSec;
					// console.log(timeGap);
					// console.log(diffHour + diffMin + diffSec);
					/* DB 저장 */
					addAccess(JSON.stringify(accessData));
					accessEnter = new Date();
				}
			} catch (error) {
				//console.error(error);
			}
		},
		zero(num) {
			if (num < 10) {
				num = '0' + num;
			}
			return num;
		},
	},
	async beforeRouteEnter(to, from, next) {
		try {
			const { data } = await fetchIp(
				'http://211.109.9.106:8082/api/main/serverCheck',
			);
			/* 아이피 체크 */
			accessData.ipAddr = data.remoteAddress;
			/* 접속 시간 체크 */
			accessEnter = new Date();
			next();
		} catch (error) {
			//console.error(error);
		}
	},
	// async beforeRouteLeave(to, from, next) {
	// 	if (this.canLeaveSite) {
	// 		next();
	// 	} else {
	// 		this.handler(from.meta.gnb, from.meta.titles);
	// 		next();
	// 	}
	// },
	watch: {
		$route(to, from) {
			if (from.name == 'report') {
				if (to.params.id != from.params.id) {
					this.handler(from.meta.gnb, from.params.id);
				}
			} else {
				if (to.meta.titles != from.meta.titles)
					this.handler(from.meta.gnb, from.meta.titles);
			}
		},
	},
};
export default accessDataMinxin;
