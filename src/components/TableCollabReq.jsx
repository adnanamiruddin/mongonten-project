const TableCollabReq = ({ accountLinks, handleEdit, handleDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Nama</th>
            <th>Jenis</th>
            <th>Deskripsi</th>
            <th>Nomor WhatsApp</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {accountLinks.map((value, index) => (
            <tr key={index} className="hover">
              <th>{index + 1}</th>
              <td>
                {value.attributes.icon?.data?.attributes?.url ? (
                  <div className="relative w-8 h-8">
                    <img
                      src={`${process.env.NEXT_PUBLIC_ASSET_URL}${value.attributes.icon.data.attributes.url}`}
                      alt={value.attributes.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                ) : (
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                )}
              </td>

              <td>{value.attributes.title}</td>
              <td>{value.attributes.status}</td>
              <td>
                <a
                  href={value.attributes.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {value.attributes.url}
                </a>
              </td>
              <td className="flex gap-2">
                <button
                  className="bg-blue-500 text-white btn"
                  onClick={() => handleEdit(value.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white btn"
                  onClick={() => handleDelete(value.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCollabReq;
