export const fetchData = async (path, request = "get") => {
  try {
    const opts = {
      method: request,
    };
    const res = await fetch(path, opts);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    return error;
  }
};
