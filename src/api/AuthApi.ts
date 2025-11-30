import API from "./Api";

export const getUsers = () => {
  return API({
    method: "GET",
    url: "/users",
  });
};
export const register = (data: any) => {
  return API({
    method: "POST",
    url: "/users",
    data:data
  });
};

export const getUser = (data: any) => { 
  return API({
    method: "GET",
    url: `/users/${data?.queryKey[1]}`,
  });
};