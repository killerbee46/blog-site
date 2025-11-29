import { Typography } from "@mui/material";
import CtaBanner from "../components/CtaBanner";
import MainLayout from "../layouts/MainLayout";
import PostSlider from "../components/PostSlider";
import Container from "../components/Container";

const HomePage = () => {
  return (
    <MainLayout>
      <CtaBanner
        title="Start Writing Blogs"
        subtitle="Join with us and share your thoughts through our platform"
        action={{label:"Start Blogging",path:"/blogs/add"}}
      />
      
      <Container>
        <div className="my-5">
          <Typography variant="h5" className="mb-5! text-center">Recent Blogs</Typography>
      <PostSlider />
        </div>
      </Container>
    </MainLayout>
  );
};

export default HomePage;
