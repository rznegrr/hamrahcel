import http from "@/utils/http"

export const login = async (username: string, password: string) => {
    const res = await http({method: "POST", url: "api/user/login",data: {
        username, password
    }})    
    const data = await res.json()
    return data
}

