import { useQuery } from "@tanstack/react-query";
import MainLayout from "../layouts/MainLayout";
import { getBlogs } from "../api/BlogApi";
import LoadingSection from "../components/LoadingSection";
import Container from "../components/Container";
import BlogCard from "../components/BlogCard";
import EmptySection from "../components/EmptySection";
import { Button, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { localUser } from "../utils/localUser";

const MyBlogs = () => {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
  const user = localUser()
  const blogs = data?.data?.filter((f:any)=>f?.author === user?.fullName);
  return (
    <MainLayout>
      <Container>
        <div className="mt-5 flex justify-between items-baseline">
          <Typography variant="h6">My Blogs</Typography>
          <Link to={'/blogs/add'}>
          <Button variant="contained"><i className="fa-solid fa-plus me-2"></i> Add Blog </Button></Link>
        </div>
        <Divider className="mt-2!" />
        {isFetching ? <LoadingSection /> : <div>
        {
          blogs && blogs?.length !== 0 ? 
          <div className="flex gap-4 my-5">
            {
              blogs?.map((b:any)=> {
            return <div className="w-full md:w-1/3 lg:w-1/4 xl:w-1/5 flex justify-center" key={b.id}><BlogCard refetch={refetch} data={b} /></div>
          })
            }
          </div> :
          <EmptySection />
        }  
        </div>}
      </Container>
    </MainLayout>
  );
};

export default MyBlogs;