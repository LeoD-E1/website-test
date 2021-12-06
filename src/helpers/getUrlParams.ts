export interface IParams {
	client_id: string;
	code: string;
	scope: string;
	state: string;
}

export function getUrlParams(url: any) {
	url = url.substring(1)
	let vars = url.split("&");
	let pairs: IParams = {
		client_id: "",
		code: "",
		scope: "",
		state: "",
	};
	for (let i = 0; i < vars.length; i++) {
		/* @ts-ignore */
		pairs[vars[i].split("=")[0]] = vars[i].split("=")[1];
	}
	return pairs;
}
