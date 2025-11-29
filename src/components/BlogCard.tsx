import { Card } from "@mui/material";
import dayjs from "dayjs";
import { Link, useNavigate } from "react-router-dom";
import relativeTime from "dayjs/plugin/relativeTime";
import { localUser } from "../utils/localUser";
import ConfirmDelete from "./ConfirmDelete";

const BlogCard = ({ data, refetch }: any) => {
  const { cover, title, created_at, id, author } = data;
const navigate = useNavigate()
  const user = localUser()

  const myblog = user?.fullName === author

  dayjs.extend(relativeTime);
  const date = dayjs().to(created_at, true);
  
  return (
       <Card className="min-w-10 w-full h-full group relative">
        {
          myblog && 
          <div className="group-hover:flex gap-3 absolute right-3 top-2 z-10 hidden">
            <Link to={`/blogs/edit/${id}`}>
            <div className="bg-white rounded-full p-1 px-1.5">
              <i className="fa-solid fa-pen text-blue-500"></i>
            </div>
          </Link>
            <ConfirmDelete refetch={refetch} blogId={id} />
          </div>
        }
        <div onClick={()=>navigate(`/blogs/${id}`)} className="relative z-5 cursor-pointer">
        <div
          className={`bg-[${cover}] bg-cover object-cover bg-no-repeat aspect-video flex items-center justify-center overflow-hidden`}
        >
          <img src={cover} alt="bi" width={"100%"} height={"100%"} />
        </div>
        <div className="p-3">
          <div className="flex gap-1 items-center justify-between text-xs mb-2 text-slate-500">
            <div>
              <i className="fa-regular fa-user"></i> {author}
            </div>
            <div>
              <i className="fa-regular fa-clock"></i> {date}
            </div>
          </div>
          <div className="font-medium! text-lg">{title}</div>
        </div>
        </div>
      </Card>
  );
};

export default BlogCard;
