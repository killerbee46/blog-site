import {
  FormControl,
  Input,
  Button,
  Card,
  Typography,
  Divider,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog, updateBlog } from "../../api/BlogApi";
import { localUser } from "../../utils/localUser";
import dayjs from "dayjs";

const BlogForm = ({ data }: any) => {
  const navigate = useNavigate();
  const user = localUser();
  const [blogData, setBlogData] = useState({
    title: data?.title ?? null,
    content: data?.content ?? null,
    cover: data?.cover ?? null,
  });

  const { mutate: addBlog, isPending } = useMutation({
    mutationFn: data ? updateBlog : createBlog,
    onSuccess() {
      alert(`Blog ${data? "Updated" : "Added"} Successfully !`);
      navigate("/blogs");
    },
  });

  const setData = (key: "title" | "content" | "cover", value: string) => {
    setBlogData({ ...blogData, [key]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    addBlog({
      ...data,
      ...blogData,
      author: data ? data?.author : user?.fullName,
      created_at: data ? data?.created_at :dayjs(),
      updated_at: dayjs(),
      id:data?.id
    });
  };

  // const fileHandler = (data:any) => {
  //   setData("cover",data)
  // }
  return (
    <Card className="p-10 py-5 my-2">
      <Typography variant="h5" className="mb-2!">
        {data ? "Update Blog" : "Add Blog"}
      </Typography>
      <Divider className="text-slate-400" />
      <form onSubmit={onSubmit}>
        <div className="flex w-full flex-col gap-2 my-5">
          <div>
            <FormControl className="w-full" required>
              <label className="text-lg font-medium -mb-2">Title</label>
              <Input
                id="title"
                value={blogData?.title}
                className="border border-slate-400 px-2"
                onChange={(e: any) => setData("title", e?.target?.value)}
              />
            </FormControl>
            <FormControl className="mt-8! w-full" required>
              <label className="text-lg font-medium -mb-2">Content</label>
              <Input
                multiline
                minRows={5}
                value={blogData?.content}
                id="content"
                className="border border-slate-400 px-2!"
                onChange={(e: any) => setData("content", e?.target?.value)}
              />
            </FormControl>
            <FormControl className="mt-8! w-full" required>
              <label className="text-lg font-medium -mb-2">
                Cover Image Url
              </label>
              <Input
                id="cover"
                value={blogData?.cover}
                className="border border-slate-400 px-2"
                onChange={(e: any) => setData("cover", e?.target?.value)}
              />
            </FormControl>

            {/*Alternate upload 
          file convert to base64 and upload
          <FileUpload onFileSelect={fileHandler} /> */}
          </div>
          <FormControl>
            <Button
              disabled={isPending}
              loading={isPending}
              type="submit"
              variant="contained"
              className="mt-4! -mb-6! w-60"
            >
              {data ? "Update" : "Add Blog"}
            </Button>
          </FormControl>
        </div>
      </form>
    </Card>
  );
};

export default BlogForm;
