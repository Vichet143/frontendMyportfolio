import api from "./api/httpClient";

class UserService {
  static async getDataUser() {
    try {
      const response = await api.get("/users");
      return response.data;
    } catch (error) {
      console.log("Failed to fetch users:", error);
      return error;
    }
  }

  static async getDataProject(){
    try {
      const response = await api.get("/projects");
      return response.data;
    } catch (error) {
      console.log("Failed to fetch project:", error);
      return error;
    }
  }

  static async getDataEducation(){
    try {
      const response = await api.get("/education");
      return response.data;
    } catch (error) {
      return error;
    }
  }

  static async getDataCertification(){
    try {
      const response = await api.get("/certificate");
      return response.data;
    } catch (error) {
      return error;
    }
  }
}

export default UserService;
