import API from "./Api";

export const getBlogs = (data: any) => {
  return API({
    method: "GET",
    url: "/blogs",
  });
};
export const createBlog = (data: any) => {
  delete data.id
  return API({
    method: "POST",
    url: "/blogs",
    data:data
  });
};

export const getBlog = (data: any) => { 
  return API({
    method: "GET",
    url: `/blogs/${data?.queryKey[1]}`,
  });
};

export const updateBlog = (data: any) => {
  const id = data?.id 
  delete data.id
  return API({
    method: "PUT",
    url: `/blogs/${id}`,
    data:data
  });
};

export const deleteBlog = (data: any) => {
  const id = data?.id
  delete data?.id
  return API({
    method: "DELETE",
    url: `/blogs/${id}`,
    data:data
  });
};