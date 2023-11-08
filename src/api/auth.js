import instance from ".";
import jwt_decode from "jwt-decode";

const login = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );

  storeToken(data?.token);
  return data;
};

const logout = () => {
  localStorage.removeItem("token");
};

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};

const register = async (userInfo) => {
  const formData = new FormData();
  for (const key in userInfo) formData.append(key, userInfo[key]);

  const { data } = await instance.post(
    "/mini-project/api/auth/register",
    formData
  );
  storeToken(data?.token);
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/mini-project/api/auth/users");
  return data;
};

const getTransactions = async () => {
  const { data } = await instance.get("/mini-project/api/transactions/my");
  return data;
};

const depositToAccount = async (amount) => {
  const res = await instance.put(`/mini-project/api/transactions/deposit`, {
    amount: amount,
  });
  return res.data;
};

const withdrawFromAccount = async (amount) => {
  const res = await instance.put(`/mini-project/api/transactions/withdraw`, {
    amount: amount,
  });
  return res.data;
};

const transferToAnotherUser = async (amount, username) => {
  const res = await instance.put(
    `/mini-project/api/transactions/transfer/${username}`,
    {
      amount: amount,
      username: username,
    }
  );
  return res.data;
};

const getUserInfoByUserId = async (userId) => {
  const { data } = await instance.get(`/mini-project/api/auth/user/${userId}`);
  return data;
};

const getYourProfile = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me");
  return data;
};

const updateYourProfile = async (image) => {
  const res = await instance.put(`/mini-project/api/auth/profile`, {
    image: image,
  });
  return res.data;
};

export {
  checkToken,
  login,
  logout,
  getAllUsers,
  register,
  getYourProfile,
  getUserInfoByUserId,
  transferToAnotherUser,
  withdrawFromAccount,
  updateYourProfile,
  depositToAccount,
  getTransactions,
};
