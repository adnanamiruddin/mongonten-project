import { useEffect, useState } from "react";
import AuthNav from "../../components/AuthNav";
import { getAllCollabRequests } from "../../api/private.service";

const CollabReq = ({ token }) => {
  const [collabRequests, setCollabRequests] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getAllCollabRequests(token.user.id);
      setCollabRequests(data);
    };
    getData();
  }, [token]);

  return (
    <div>
      <AuthNav />
      <div className="pt-24 px-4 pb-10">
        <h1 className="text-2xl text-center font-semibold">
          PERMINTAAN KOLABORASI
        </h1>

        <div className="divider" />

        <div className="flex flex-col items-center w-full gap-8">
          {collabRequests.length > 0 ? (
            collabRequests.map((item, index) => (
              <div key={index} className="card w-11/12 bg-base-100 shadow-xl">
                <figure>
                  <img src={item.photo} alt="Shoes" />
                </figure>
                <div className="card-body bg-gray-300">
                  <h2 className="card-title mb-2">{item.name}</h2>
                  <p>{item.desc}</p>
                  <div className="card-actions justify-end">
                    <a
                      href={`https://wa.me/${item.no_wa}`}
                      target="__blank"
                      rel="noopener"
                      className="btn btn-success font-semibold"
                    >
                      Ajak
                    </a>
                    <button className="btn btn-error font-semibold">
                      Hapus
                    </button>
                  </div>
                </div>
              </div>

              // <div key={index} className="pb-16">
              //   <div className="card w-auto bg-base-100 shadow-xl image-full">
              //     <figure>
              //       <img src={item.photo} alt={item.title} />
              //     </figure>
              //     <div className="card-body">
              //       <h2 className="card-title">{item.title}</h2>
              //       <p>{item.desc}</p>
              //       <div className="card-actions justify-end">
              //         <Link to="" className="btn btn-primary">
              //           Baca Selengkapnya
              //         </Link>
              //       </div>
              //     </div>
              //   </div>
              // </div>
            ))
          ) : (
            <div className="flex items-center justify-center h-full w-full gap-3 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-[20px] p-4  transition-all duration-300">
              <p className="text-2xl text-gray-400">No links available 😐</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollabReq;
