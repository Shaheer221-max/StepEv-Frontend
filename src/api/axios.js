import axios from "axios";
// const url = `${base_url}";

//

const base_url = "https://stepev-dev.up.railway.app";

export const date = (d) => {
  const date = new Date(d);
  const formattedDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  return formattedDate;
};

export const getImage = async () => {
  let res;
  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${base_url}/media/getImage/63834c335e170a039705fe8cae4f28ea.jpeg`,
    headers: {},
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

// LoginAPI call
export const loginApi = async (email, password) => {
  let resData;
  var data = JSON.stringify({
    email: email,
    password: password,
  });

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/auth/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      resData = response.data;
      //   console.log(resData);
    })
    .catch(function (error) {
      // console.log(error);
      resData = error.response.data;
    });
  return resData;
};

// Get All users
export const getUsers = async (page, limit) => {
  let dataa;
  var data = {
    page: page,
    limit: limit,
  };
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/getUsers`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y2ODE4M2YwM2U0ODAwMWViZWYyODQiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NzMyMTU1MH0.zrGG4JKTI5pouAcH3ARFwrc93EXXwGD8Nn65ntkPN44",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data.data));
      dataa = response.data.data;
      // console.log(dataa);
    })
    .catch(function (error) {
      console.log(error);
    });
  return dataa;
};

// Get all campaigns
export const getCampaigns = async (page, limit) => {
  var data = {
    page: page,
    limit: limit,
  };
  var response_data;
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/getStartups`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y2ODE4M2YwM2U0ODAwMWViZWYyODQiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NzMyMTU1MH0.zrGG4JKTI5pouAcH3ARFwrc93EXXwGD8Nn65ntkPN44",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data.data[0]));
      response_data = response.data.data[0];
    })
    .catch(function (error) {
      console.log(error);
    });
  return response_data;
};
// Get StartupStatus
export const getstartupstatus = async (campaignId) => {
  let res;
  var data = JSON.stringify({
    startupid: campaignId
  });
  console.log(data)
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/getStartupStatus`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UyYTVlZjhkMDQ3YjAwMWUwNWI1Y2UiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTk2NzM5MX0.xLaQxiEQ4TrPQMxWcCgQrY-gFiJNq_-AbA73GfkzlDo",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
  };

// Get single campaign
export const getSingleCampaign = async (campaignId) => {
  let res;
  var data = JSON.stringify({
    startupid: campaignId,
  });

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/startup/getStarupbyId`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UyYTVlZjhkMDQ3YjAwMWUwNWI1Y2UiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTk2NzM5MX0.xLaQxiEQ4TrPQMxWcCgQrY-gFiJNq_-AbA73GfkzlDo",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

//Change startupstatus
export const changeStartupStatus = async (campaignId,status) => {
  let res;
  var data = JSON.stringify({
    startupid: campaignId,
    status: status
  });
  console.log(data)
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/changeStartupStatus`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UyYTVlZjhkMDQ3YjAwMWUwNWI1Y2UiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTk2NzM5MX0.xLaQxiEQ4TrPQMxWcCgQrY-gFiJNq_-AbA73GfkzlDo",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

// Get admin wallet details
export const adminWalletDetails = async () => {
  var response_data;
  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/wallet`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y2ODE4M2YwM2U0ODAwMWViZWYyODQiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NzMyMTU1MH0.zrGG4JKTI5pouAcH3ARFwrc93EXXwGD8Nn65ntkPN44",
    },
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data.data));
      response_data = response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response_data;
};

// Get freelancer profile
export const freelancerProfile = async (Id) => {
  var response_data;
  var data = JSON.stringify({
    freelancerId: Id,
  });
  // var data = { freelancerId: Id };
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/freelancerProfile/data`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y2ODE4M2YwM2U0ODAwMWViZWYyODQiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NzMyMTU1MH0.zrGG4JKTI5pouAcH3ARFwrc93EXXwGD8Nn65ntkPN44",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      response_data = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response_data;
};

//search freelancers
export const searchfreelancers = async(search) => {
  var response_data;
 await axios.post(`${base_url}/user/searchfreelancers`,{
  keyword:search
 })
 .then((res) => {
  response_data = res.data;
 })
 .catch((err) => console.log(err))
 return response_data;
}

// campaigns
export const searchcampaigns = async(search) => {
  var response_data;
 await axios.post(`${base_url}/startup/searchcampaigns`,{
  keyword:search
 })
 .then((res) => {
  response_data = res.data;
 })
 .catch((err) => console.log(err))
 return response_data;
}

// Freelancer Campaigns
export const freelancerCampaigns = async (Id) => {
  var response_data;
  var data = JSON.stringify({
    freelancerId: Id,
  });

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/freelancerProfile/campaigns`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y2ODE4M2YwM2U0ODAwMWViZWYyODQiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NzMyMTU1MH0.zrGG4JKTI5pouAcH3ARFwrc93EXXwGD8Nn65ntkPN44",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      response_data = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response_data;
};

// Get freelancer warning
export const freelancerWarning = async (Id) => {
  var response_data;
  var data = JSON.stringify({
    freelancerId: Id,
  });

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/freelancerProfile/warnings`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y2ODE4M2YwM2U0ODAwMWViZWYyODQiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NzMyMTU1MH0.zrGG4JKTI5pouAcH3ARFwrc93EXXwGD8Nn65ntkPN44",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data.data[0].warnings));
      response_data = response.data.data[0].warnings;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response_data;
};

// Freelancer earnings
export const freelancerEarning = async (Id) => {
  var response_data;
  var data = JSON.stringify({
    freelancerId: Id,
  });

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/freelancerProfile/earnings`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y2ODE4M2YwM2U0ODAwMWViZWYyODQiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NzMyMTU1MH0.zrGG4JKTI5pouAcH3ARFwrc93EXXwGD8Nn65ntkPN44",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data.data[0].earnings));
      response_data = response.data.data[0].earnings;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response_data;
};

export const fundsProcessing = async () => {};

export const viewSkills = async () => {
  var response_data;
  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/getallsskills`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y2ODE4M2YwM2U0ODAwMWViZWYyODQiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NzMyMTU1MH0.zrGG4JKTI5pouAcH3ARFwrc93EXXwGD8Nn65ntkPN44",
    },
  };

  await axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      response_data = response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response_data;
};

export const addSkill = async (skillTitle) => {
  var data = {
    skill: skillTitle,
  };
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/addskill`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y2ODE4M2YwM2U0ODAwMWViZWYyODQiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NzMyMTU1MH0.zrGG4JKTI5pouAcH3ARFwrc93EXXwGD8Nn65ntkPN44",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const updateSkill = async (skillTitle, id) => {
  var data = JSON.stringify({
    skillId: id,
    skill: skillTitle,
  });

  var config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/updateskill`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y2ODE4M2YwM2U0ODAwMWViZWYyODQiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NzMyMTU1MH0.zrGG4JKTI5pouAcH3ARFwrc93EXXwGD8Nn65ntkPN44",
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const deleteSkill = async (skillTitle, id) => {
  var data = JSON.stringify({
    skill: skillTitle,
    skillId: id,
  });

  var config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/deleteskill`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Y2ODE4M2YwM2U0ODAwMWViZWYyODQiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NzMyMTU1MH0.zrGG4JKTI5pouAcH3ARFwrc93EXXwGD8Nn65ntkPN44",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const getAllWarnings = async (page, limit) => {
  let apiResponse;
  var data = JSON.stringify({
    page,
    limit,
  });

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/warnings/all`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZiNTNmMWUxYWFmZjAwMWUwMDUwM2IiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3Nzc1MDY3OX0.XkY68et_RmonA85sBwNpn5T14B9zwrXGTIwDWg-vUWU",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data.data));
      apiResponse = response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return apiResponse;
};

export const deleteUser = async (id) => {
  let res;
  var data = JSON.stringify({
    userId: id,
  });
  var config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/user/delete`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZiNTNmMWUxYWFmZjAwMWUwMDUwM2IiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3Nzg3MTA4M30.W0TZCLDQID6YW5drjOja60iEzQ3KRfJy2hEbD4HqMI0",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      res = error.response.data;
    });
  return res;
};

export const getAllWithdrawlRequest = async (page, limit) => {
  let res;
  var data = JSON.stringify({
    page,
    limit,
  });

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/withdrawlRequests`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UyYTVlZjhkMDQ3YjAwMWUwNWI1Y2UiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTk2NzM5MX0.xLaQxiEQ4TrPQMxWcCgQrY-gFiJNq_-AbA73GfkzlDo",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

export const pausePayment = async (id) => {
  var data = JSON.stringify({
    transactionId: id,
  });

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/withdraw/pause`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZiNTNmMWUxYWFmZjAwMWUwMDUwM2IiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3Nzg2NzgwOH0.HPyvOdzwnVakhodKBbmwT_Pdg1gqgOgc59G-WeZ-Wjw",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const appEarnings = async () => {
  let res;
  var data = JSON.stringify({
    page: 1,
    limit: 10,
  });

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/appEarnings`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UyYTVlZjhkMDQ3YjAwMWUwNWI1Y2UiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTk2NzM5MX0.xLaQxiEQ4TrPQMxWcCgQrY-gFiJNq_-AbA73GfkzlDo",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

export const getCategories = async () => {
  var res;
  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/getAllCategories`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UyYTVlZjhkMDQ3YjAwMWUwNWI1Y2UiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTk2NzM5MX0.xLaQxiEQ4TrPQMxWcCgQrY-gFiJNq_-AbA73GfkzlDo",
    },
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

export const uploadImage = async (file) => {
  var res;
  var FormData = require("form-data");
  var data = new FormData();
  data.append("file", file);

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/media/uploadfile`,
    headers: {
      // ...data.getHeaders(),
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
};

export const addCategory = async (title, img) => {
  var data = JSON.stringify({
    title: title,
    avatar: img,
  });

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/addCategory`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UyYTVlZjhkMDQ3YjAwMWUwNWI1Y2UiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTk2NzM5MX0.xLaQxiEQ4TrPQMxWcCgQrY-gFiJNq_-AbA73GfkzlDo",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const deleteCategory = async (id) => {
  var data = JSON.stringify({
    categoryId: id,
  });

  var config = {
    method: "delete",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/deleteCategory`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZiNTNmMWUxYWFmZjAwMWUwMDUwM2IiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3Nzg1NTAyMn0.3NOKw5HW0AmLxtMXfBES-c2nONzmcpKf3X4Sf0OUHuM",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const updateCategory = async (categoryId, title, avatar) => {
  var data = JSON.stringify({
    categoryId,
    title,
    avatar,
  });

  var config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/updateCategory`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZiNTNmMWUxYWFmZjAwMWUwMDUwM2IiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3Nzg1NTAyMn0.3NOKw5HW0AmLxtMXfBES-c2nONzmcpKf3X4Sf0OUHuM",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const UnSuspendUser = async (userId, status) => {
  let res;
  var data = JSON.stringify({
    userId,
    status,
  });

  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/admin/suspend/user`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZiNTNmMWUxYWFmZjAwMWUwMDUwM2IiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3Nzg1NTAyMn0.3NOKw5HW0AmLxtMXfBES-c2nONzmcpKf3X4Sf0OUHuM",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      res = error.response.data;
    });
};

export const updatePassword = async(newPassword,oldPassword) => {
  let res;
  var data = JSON.stringify({
    newPassword,
    oldPassword
  });
  var config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `${base_url}/user/update/password`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2ZiNTNmMWUxYWFmZjAwMWUwMDUwM2IiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3Nzg1NTAyMn0.3NOKw5HW0AmLxtMXfBES-c2nONzmcpKf3X4Sf0OUHuM",
      "Content-Type": "application/json",
    },
    data: data,
    
  };
  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error.response.data);
      res = error.response.data;
    });
}

export const getorder = async(id) => {
  let res;
  var data = JSON.stringify({
    orderId: id
  });
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${base_url}/orders/getorderdetails`,
    headers: {
      Authorization:
        
      // "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2UyYTVlZjhkMDQ3YjAwMWUwNWI1Y2UiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3NTk2NzM5MX0.xLaQxiEQ4TrPQMxWcCgQrY-gFiJNq_-AbA73GfkzlDo",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDU5MjY4YjU2ZjAwNjNkZTAxOTRkOGIiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFzamFkYWRtaW5AZ21haWwuY29tIiwiaWF0IjoxNjg0MDU3NzM1fQ.p_qsYzvjLPdjVAIw_KrJyAcZDGQ2QvlkVfXjTBX0o1I",
      "Content-Type": "application/json",
    },
    data: data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      res = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;

}