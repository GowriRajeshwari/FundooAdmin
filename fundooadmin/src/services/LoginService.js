import axios from "axios";
const url = "http://fundoonotes.incubation.bridgelabz.com/api/user";
const access_token = localStorage.getItem("id");

export async function login(data) {
  //console.log(process.env);
  console.log(process.env.REACT_APP_URL)
  try {
    const response = await axios.post(process.env.REACT_APP_URL, data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
//Calling the register API using axios
export async function register(data) {
  console.log(process.env.REACT_APP_URLREG);
  try {
    const response = await axios.post(process.env.REACT_APP_URLREG,data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
//Calling the Forgot Password API using axios
export async function forgotpassword(data) {
  try {
    const response = await axios.post(process.env.REACT_APP_URLFORGOT,data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
//Calling the ResetPAssword API using axios
export async function resetPassword(data,access_token) {
  // console.log(data,token);
  const localtoken = localStorage.getItem("token");
  // console.log(id);

  try {
    const response = await axios.post(process.env.REACT_APP_urlresetpassword , data, {params : { access_token }},
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
//Calling the getuser API using axios
export async function getuser() {
  try {
    const response = await axios.get(process.env.REACT_APP_GETUSER);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getUnapprovalQuestion() {
  try {
    const response = await axios.get(process.env.REACT_APP_UNAPPROVAL, {params : { access_token }});
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function AcceptQuestion(id) {
  try {
    const response = await axios.post(process.env.REACT_APP_ACCEPT+ id,id, {params : { access_token }});
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function RejectQuestion(id) {
  try {
    const response = await axios.post(process.env.REACT_APP_REJECT + id,id, {params : { access_token }});
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function userCartList() {
  try {
    const response = await axios.get(process.env.REACT_APP_USERCARTLIST, {params : { access_token }});
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function adminCompleteOrder(data) {
  try {
    const response = await axios.post(process.env.REACT_APP_ADMINCOMPLETEORDER,data, {params : { access_token }});
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function adminCancelOrder(data) {
  try {
    const response = await axios.post(process.env.REACT_APP_ADMINCANCELORDER,data, {params : { access_token }});
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

//  http://fundoonotes.incubation.bridgelabz.com/api/productcarts/userCartList
//  http://fundoonotes.incubation.bridgelabz.com/api/productcarts/adminCompleteOrder
//  http://fundoonotes.incubation.bridgelabz.com/api/productcarts/adminCancelOrder