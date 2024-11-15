type HttpArgs = {
  method: string;
  data?: any;
  url: string;
  headers?: any;
};

function http({ method, data, url, headers = {} }: HttpArgs) {
  return fetch(`http://91.220.113.138:8000/${url}/`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
  });
}

export default http;
 