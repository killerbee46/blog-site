import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import { getBlogs } from "../api/BlogApi";
import BlogCard from "./BlogCard";
import LoadingSection from "./LoadingSection";

function PostSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const { data, isFetching } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
  const blogs = data?.data;

  return (
    <div>
        {
            isFetching ? 
            <LoadingSection /> :
            <div className="slider-container">
      <Slider {...settings}>
        {
            blogs?.map((b:any)=> {
                return <div className="px-3" key={b?.id}>
                    <BlogCard data={b} />
                </div>
            })
        }
      </Slider>
    </div>
        }
    </div>
  );
}

export default PostSlider;
