// 根据环境的不同加载不同的环境变量
const host = import.meta.env.MODE === 'development' ? import.meta.env.VITE_DEV_HOST : import.meta.env.VITE_BUILD_HOST;

class GlobalHOSTURL {
    public static readonly host = host;
}

export {
    GlobalHOSTURL
}