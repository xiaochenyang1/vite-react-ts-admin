// 获取本地保存
export function getLocal(local: string): string | null {
    return localStorage.getItem(local)
}
// 写入本地保存
export function setLocal(key: string, value: string): void {
    localStorage.setItem(key, value);
}
// 删除本地保存
export function delLocal(key: string): void {
    localStorage.removeItem(key);
}
