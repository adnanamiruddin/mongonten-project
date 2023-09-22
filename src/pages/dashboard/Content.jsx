import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailContentBySlugAndId } from "../../api/public.service";

const Content = () => {
  const { slug, id } = useParams();

  const [content, setContent] = useState({
    title: "",
    desc: "",
    image: "",
    link: "",
    rating: "",
    city: "",
    address: "",
  });

  useEffect(() => {
    const getData = async () => {
      const detailContent = await getDetailContentBySlugAndId(slug, id);
      setContent(detailContent);
    };
    getData();
  }, [slug, id]);

  return (
    <div>
      <img src={content.image} alt={content.title} />
      <div className="py-4 px-8">
        <h2 className="font-bold text-2xl text-center">{content.title}</h2>
        <p className="mt-4 text-justify">{content.desc}</p>
      </div>
    </div>
  );
};

export default Content;
