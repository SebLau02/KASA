export const fetchData = async (path, request = "get") => {
  const res = await fetch(path, { method: request });
  if (!res.ok) throw new Error(`Erreur ${res.status} sur ${path}`);
  return res.json();
};
