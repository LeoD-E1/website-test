export interface IParams {
	code: string;
	state: string;
}

export function getUrlParams(url: string) {
	url = url.substring(1);
	let vars = url.split("&");
	let pairs: IParams = {
		code: "",
		state: "",
	};
	for (let i = 0; i < vars.length; i++) {
		/* @ts-ignore */
		pairs[vars[i].split("=")[0]] = vars[i].split("=")[1];
	}
	return pairs;
}
