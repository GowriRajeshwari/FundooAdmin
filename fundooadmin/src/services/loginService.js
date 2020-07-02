import axios from "axios";
const url = "http://fundoonotes.incubation.bridgelabz.com/api/user";
const access_token = localStorage.getItem("id");

export function login(data) {
  try {
    const response = axios.post(process.env.REACT_APP_URL, data);
    return response;
  } catch (error) {
    return error;
  }
}
//Calling the register API using axios
export function register(data) {
  try {
    const response = axios.post(process.env.REACT_APP_URLREG, data);
    return response;
  } catch (error) {
    return error;
  }
}
//Calling the Forgot Password API using axios
export function forgotpassword(data) {
  try {
    const response = axios.post(process.env.REACT_APP_URLFORGOT, data);
    return response;
  } catch (error) {
    return error;
  }
}
//Calling the ResetPAssword API using axios
export function resetPassword(data, access_token) {
  try {
    const response = axios.post(process.env.REACT_APP_urlresetpassword, data, {
      params: { access_token },
    });
    return response;
  } catch (error) {
    return error;
  }
}
//Calling the getuser API using axios
export function getuser() {
  try {
    const response = axios.get(process.env.REACT_APP_GETUSER);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export function getUnapprovalQuestion() {
  try {
    const response = axios.get(process.env.REACT_APP_UNAPPROVAL, {
      params: { access_token },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export function AcceptQuestion(id) {
  try {
    const response = axios.post(process.env.REACT_APP_ACCEPT + id, id, {
      params: { access_token },
    });
    return response;
  } catch (error) {
    return error;
  }
}
export async function RejectQuestion(id) {
  try {
    const response = await axios.post(process.env.REACT_APP_REJECT + id, id, {
      params: { access_token },
    });
    return response;
  } catch (error) {
    return error;
  }
}
export function userCartList() {
  try {
    const response = axios.get(process.env.REACT_APP_USERCARTLIST, {
      params: { access_token },
    });
    return response;
  } catch (error) {
    return error;
  }
}

export function adminCompleteOrder(data) {
  try {
    const response = axios.post(
      process.env.REACT_APP_ADMINCOMPLETEORDER,
      data,
      { params: { access_token } }
    );
    return response;
  } catch (error) {
    return error;
  }
}

export function adminCancelOrder(data) {
  try {
    const response = axios.post(process.env.REACT_APP_ADMINCANCELORDER, data, {
      params: { access_token },
    });
    return response;
  } catch (error) {
    return error;
  }
}
