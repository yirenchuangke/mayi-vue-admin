import server from '@/utils/request'
const getServerData = {}
// 轮播图 
getServerData.banner = () => {
    let res = server.get("/banner");
    return res;
}
export default getServerData;