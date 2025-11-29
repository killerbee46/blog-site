import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BlogForm from "../components/forms/BlogForm";
import MainLayout from "../layouts/MainLayout";
import { localUser } from "../utils/localUser";
import Container from "../components/Container";
import { useQuery } from "@tanstack/react-query";
import { getBlog } from "../api/BlogApi";
import LoadingSection from "../components/LoadingSection";

const EditBlog = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const user = localUser();

  const { data, isFetching } = useQuery({
    queryKey: ["edit_det", id],
    queryFn: getBlog,
  });

  const blog = data?.data;

  useEffect(() => {
    if (data && Object.keys(data).length !== 0) {
      if (user?.fullName !== blog?.author) {
        return navigate("/");
      }
    }
  }, [data]);
  return (
    <MainLayout title="Update Blog">
      {isFetching ? (
        <LoadingSection />
      ) : (
        <Container>
          <BlogForm data={blog} />
        </Container>
      )}
    </MainLayout>
  );
};

export default EditBlog;
