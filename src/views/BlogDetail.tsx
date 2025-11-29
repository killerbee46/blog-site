import { useQuery } from "@tanstack/react-query";
import MainLayout from "../layouts/MainLayout";
import { useParams } from "react-router-dom";
import { getBlog } from "../api/BlogApi";
import LoadingSection from "../components/LoadingSection";
import Container from "../components/Container";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const BlogDetail = () => {
  const { id } = useParams();
  const { data, isFetching } = useQuery({
    queryKey: ["blog_det", id],
    queryFn: getBlog,
  });
  const blog = data?.data;
  dayjs.extend(relativeTime);
  const date = dayjs().to(blog?.created_at, true);
  return (
    <MainLayout title="Blog Detail">
      {isFetching ? (
        <LoadingSection />
      ) : (
        <Container>
          {blog.cover && blog?.cover !== "" && (
            <div
              className={`bg-cover object-cover bg-no-repeat aspect-video flex items-center justify-center overflow-hidden my-5`}
            >
              <img src={blog?.cover} alt="bi" width={"100%"} height={"100%"} />
            </div>
          )}
          <div className="flex justify-between">
            <Typography variant="h5" className="font-medium!">
              {blog?.title}
            </Typography>
            <div>
              <div className="flex gap-3 items-center text-xs mb-2 text-slate-500">
                <div>
                  <i className="fa-regular fa-user"></i> {blog?.author}
                </div>
                <div className="capitalize">
                  <i className="fa-regular fa-clock"></i> {date}
                </div>
              </div>
            </div>
          </div>
          <div className="my-2">
            {blog?.content}
          </div>
        </Container>
      )}
    </MainLayout>
  );
};

export default BlogDetail;
