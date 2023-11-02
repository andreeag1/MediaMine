export const UploadMedia = async (title, video, image) => {
  const res = await fetch(`http://localhost:3000/api/post`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: title,
      videoUrl: video,
      imageUrl: image,
    }),
  });
  const data = await res.json();
  return 200;
};

export const GetVideoById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/getOne/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

export const GetAll = async () => {
  const res = await fetch(`http://localhost:3000/api/getAll`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};
