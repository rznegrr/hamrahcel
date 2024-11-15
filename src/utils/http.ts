type HttpArgs = {
  method: string;
  data?: any;
  url: string;
  headers?: any;
  withSlash?: boolean;
};

function http({ method, data, url, withSlash = true, headers = {} }: HttpArgs) {
  return fetch(`http://91.220.113.138:8000/${url}${withSlash === true ? "/" : ""}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });
}

export default http;
 