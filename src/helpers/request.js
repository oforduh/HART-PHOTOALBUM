import { config } from "../Config";

export function Request(path) {
  this.path = `${config.baseUrl}api/auth/${path}`;
}

Request.prototype.initializePayment = async function (obj) {
  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  };

  try {
    const request = await fetch(this.path, config);
    console.log(request);
    const response = await request.json();
    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};
Request.prototype.verifyingPayment = async function (reference) {
  const config = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  try {
    const request = await fetch(`${this.path}?reference=${reference}`, config);
    console.log(request);
    const response = await request.json();
    if (request.status !== 200) {
      return {
        status: false,
        ...response,
      };
    }
    return {
      status: true,
      ...response,
    };
  } catch (error) {
    return {
      status: false,
      error,
    };
  }
};
