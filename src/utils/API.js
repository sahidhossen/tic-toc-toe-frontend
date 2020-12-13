const base_url = "http://localhost:5001/api";

const DEFAULT_HEADERS = {
	Accept: "application/json, */*;q=0.1",
};

export const API = (options) => {
	const { url, data, ...remainingOptions } = options;
	let { body, headers } = options;

	headers = { ...DEFAULT_HEADERS, ...headers };

	if (data) {
		body = JSON.stringify(data);
		if (!headers["Content-Type"]) {
			headers["Content-Type"] = "application/json";
		}
	}

	const apiUri = base_url + url;

	return fetch(apiUri, {
		...remainingOptions,
		body,
		headers,
	})
		.then((response) => response.json())
		.then((data) => data);
};
