class Session {
  constructor(props) {
      this.token = localStorage.getItem('user');
  }
  isLoggedIn() {
      return !!this.token;
  }
  setLoggedIn = (token) => {
    localStorage.setItem('user', token);
    this.token = token;
  }

  setloggedOut(){
    localStorage.removeItem('user');
    this.token = "";
  }
}

export const session = new Session();