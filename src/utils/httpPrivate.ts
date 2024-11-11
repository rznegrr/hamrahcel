import http from "./http";

const httpPrivate = async (method: string, url: string, data?: any) => {
  const mainResponse = await http({
    method,
    url,
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access")}`,
    },
  });

  if (mainResponse.status === 401) {
    console.log("you don't have access");

    const responseToken = await http({
      method: "POST",
      url: "api/token/refresh",
      data: {
        refresh: localStorage.getItem("refresh"),
      },
    });

    if (responseToken.ok) {
      console.log("you got the access😬");
      const dataToken = await responseToken.json();
      localStorage.setItem("access", dataToken.access);
      const responseRetry = await http({
        method,
        url,
        data,
        headers: {
          Authorization: `Bearer ${dataToken.access}`,
        },
      });

      const retryData = await responseRetry.json();
      return retryData;
    } else {
      console.log("you don't have refresh");
      return null
      //navigate to login
    }
  } else {
    console.log("everything is ok");
    const mainData = await mainResponse.json();
    return mainData;
  }
};

export default httpPrivate;