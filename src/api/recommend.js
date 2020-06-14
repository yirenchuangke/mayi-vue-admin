import server from "@/utils/request";

export default getComInfo1 = (data) => {
  return erver.get("/ajax/international/findServiceInfo", data);
};
