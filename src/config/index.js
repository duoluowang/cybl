/**
 * 环境配置封装
 */
const env = import.meta.env.MODE||'prod';
const EnvConfig = {
    dev:{
        baseApi:'/',
        mockApi:'https://www.fastmock.site/mock/8c36cab310a62d8095ce9a3a904ebb57/api'
    },
    test:{
        baseApi:'/',
        mockApi:''
    },
    prod:{
        baseApi:'/',
        mockApi:''
    }
}
export default{
    env,
    mock:true,
    ...EnvConfig[env]
}