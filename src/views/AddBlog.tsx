import MainLayout from "../layouts/MainLayout";
import BlogForm from "../components/forms/BlogForm";
import Container from "../components/Container";
import { useNavigate } from "react-router-dom";
import { getToken } from "../utils/localUser";
import { useEffect } from "react";

const AddBlogPage = () => {
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (!token || token == "") {
      return navigate("/auth/login?ref=/blogs/add");
    }
  }, []);
  return (
    <MainLayout title="Add Blog">
      <Container>
        <BlogForm />
      </Container>
    </MainLayout>
  );
};

export default AddBlogPage;
