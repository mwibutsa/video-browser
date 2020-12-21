import { useState, useEffect } from "react";
import youTube from "../apis/youTube";
const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const {
      data: { items },
    } = await youTube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(items);
  };

  return [videos, search];
};

export default useVideos;
