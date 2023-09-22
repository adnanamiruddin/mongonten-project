import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProfileBySlug } from "../../api/public.service";

const Profile = () => {
  const { slug } = useParams();

  const [profile, setProfile] = useState({
    bio: "",
    domicile: "",
    name: "",
    photo: "",
  });

  useEffect(() => {
    const getData = async () => {
      const response = await getProfileBySlug(slug);
      if (response) setProfile(response);
    };
    getData();
  }, [slug]);

  return (
    <div
      className={`flex min-h-screen max-w-2xl m-auto flex-col items-center p-4 pt-12`}
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

      <div className="flex flex-col items-center gap-3 w-full mb-12">
        <h3 className="text-2xl font-bold">{profile.name}</h3>
        <p className="text-lg">{profile.bio}</p>
      </div>

      {/* <div className="flex flex-col items-center w-full gap-8">
        {accountLinks.length > 0 ? (
          accountLinks.map((value, index) => {
            const linkStatus = value.attributes.status;
            const isDeactive = linkStatus === "deactive";
            const isSuspend = linkStatus === "suspend";

            if (isDeactive) return null;

            return (
              <a
                key={index}
                href={!isSuspend ? value.attributes.url : null}
                target="_blank"
                rel="noopener noreferrer"
                className={`h-full w-full flex items-center gap-3 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[20px] p-4  transition-all duration-300 ${
                  isSuspend ? "filter brightness-50" : ""
                } ${!isSuspend ? "hover:scale-105" : ""} ${
                  !isSuspend ? "hover:cursor-pointer" : ""
                }`}
              >
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                  <div
                    className="w-full h-full relative"
                    style={{ paddingBottom: "100%" }}
                  >
                    {value.attributes.icon?.data?.attributes?.url ? (
                      <Image
                        src={`${process.env.NEXT_PUBLIC_ASSET_URL}${value.attributes.icon.data.attributes.url}`}
                        alt={value.attributes.title}
                        layout="fill"
                        objectFit="cover"
                        className="absolute rounded-full"
                      />
                    ) : (
                      <div className="absolute w-full h-full bg-gray-300 rounded-full"></div>
                    )}
                  </div>
                </div>
                <span className="text-lg">{value.attributes.title}</span>
              </a>
            );
          })
        ) : (
          <div className="flex items-center justify-center h-full w-full gap-3 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[20px] p-4  transition-all duration-300">
            <p className="text-2xl text-gray-400">No links available 😐</p>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Profile;
