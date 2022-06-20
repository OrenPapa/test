class StorageService {
    setItem(name: string, stateName: string) {
        return localStorage.setItem(name, stateName)
    }

    getItem(name: string) {
        return localStorage.getItem(name)
    }

    hasItem(name: string) {
        return localStorage.getItem(name) ? true : false
    }

    clear(name?: string) {
        return localStorage.clear()
    }

    stringify(stateName: object | Array<string | number>) {
        return JSON.stringify(stateName)
    }

    parse(name: string) {
        return JSON.parse(name!)
    }
}

export enum StorageKey {
    user = "user",
    language = "language",
    refreshToken = "refreshToken",
    accessToken = "accessToken",
    signupForm = "signupForm",
    email = "email",
    roles = "roles",
}

export default new StorageService()

