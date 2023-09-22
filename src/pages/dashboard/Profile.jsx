import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getContentsByAccountId,
  getProfileBySlug,
} from "../../api/public.service";

const Profile = () => {
  const { slug } = useParams();

  const [profile, setProfile] = useState({
    bio: "",
    domicile: "",
    name: "",
    photo: "",
  });
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const profileData = await getProfileBySlug(slug);
      if (profileData) setProfile(profileData);

      const profileContents = await getContentsByAccountId(profileData.id);
      if (profileContents) setContents(profileContents);
    };
    getData();
  }, [slug]);

  return (
    <div
      className={`flex min-h-screen max-w-2xl m-auto flex-col items-center p-4 pt-12 bg-gradient-to-b from-white to-gray-500`}
    >
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden mb-10">
        {profile.photo ? (
          <img
            src={profile.photo}
            alt={profile.name}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="absolute w-full h-full bg-gray-300 rounded-full"></div>
        )}
      </div>

      <div className="flex flex-col items-center gap-5 w-full mb-12">
        <h3 className="text-2xl font-bold">{profile.name}</h3>
        <p className="text-sm text-justify px-4">{profile.bio}</p>
        <Link to="" className="btn btn-md btn-accent text-xs ml-auto mt-4">
          Ajak Kolaborasi
        </Link>
      </div>

      <div className="flex flex-col items-center w-full gap-8">
        {contents.length > 0 ? (
          contents.map((content, index) => {
            const isDeactive = content.status === "deactive";
            // const isSuspend = content.status === "suspend";

            if (isDeactive) return null;

            return (
              <div key={index} className="pb-16">
                <div className="card w-auto bg-base-100 shadow-xl image-full">
                  <figure>
                    <img src={content.image} alt={content.title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{content.title}</h2>
                    <p>{content.desc}</p>
                    <div className="card-actions justify-end">
                      <Link
                        to={`/${profile.slug}/content/${content.id}`}
                        className="btn btn-primary"
                      >
                        Baca Selengkapnya
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center h-full w-full gap-3 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[20px] p-4  transition-all duration-300">
            <p className="text-2xl text-gray-400">No links available 😐</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
