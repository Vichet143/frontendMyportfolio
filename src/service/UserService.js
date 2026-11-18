import api from "./api/httpClient";

// One shared request per endpoint: components that ask for the same data
// (e.g. /users in Footer, About, Contact) reuse the same in-flight/finished
// request instead of hitting the API again. Failed requests are not cached,
// so the next call retries.
const cache = new Map();

const get = (path) => {
  if (!cache.has(path)) {
    const request = api
      .get(path)
      .then((response) => response.data)
      .catch((error) => {
        cache.delete(path);
        throw error;
      });
    cache.set(path, request);
  }
  return cache.get(path);
};

class UserService {
  // Fire-and-forget request that wakes up a sleeping (cold) server while the
  // app is still loading. Reuses the /users cache so it is not a wasted call.
  static warmUp() {
    get("/users").catch(() => {});
  }

  static getDataUser() {
    return get("/users");
  }

  static getDataProject() {
    return get("/projects");
  }

  static getDataEducation() {
    return get("/education");
  }

  static getDataCertification() {
    return get("/certificate");
  }

  static getDataUserSkill() {
    return get("/Userskill");
  }

  static getDataSoftSkill() {
    return get("/softskill");
  }
}

export default UserService;
