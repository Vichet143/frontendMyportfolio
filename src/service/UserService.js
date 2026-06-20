import api from "./api/httpClient";

class UserService {
  static async getDataUser() {
    try {
      const response = await api.get("/users");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to fetch users:", error);
      return error;
    }
  }

  static async getDataProject(){
    try {
      const response = await api.get("/projects");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log("Failed to fetch project:", error);
      return error;
    }
  }
}

export default UserService;
