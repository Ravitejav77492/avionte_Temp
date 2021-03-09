export class Utils {
    static SET_SESSION_STORAGE(key: string, value: string) {
        localStorage.setItem(key, value);
    }
    static GET_SESSION_STORAGE(key: string): string {
        return localStorage.getItem(key);
    }
    static SET_LOCAL_STORAGE(key: string, value: string) {
        return localStorage.setItem(key, value);
    }
    static GET_LOCAL_STORAGE(key: string) {
        return localStorage.getItem(key);
    }
}