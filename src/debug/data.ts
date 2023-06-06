import { useSourceStore } from "@/store/source";

const sourceStore = useSourceStore();

(() => {
	for (let index = 0; index < 10; index++) {
		sourceStore.val.push({
			id: index + 1,
			name: "采集源" + (index + 1).toString(),
			url: "测试链接" + (index + 1).toString(),
			progress: false,
			able: false,
		});
	}
})();
