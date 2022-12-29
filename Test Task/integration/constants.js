const select = {
    title: ".title",
    navBar: ".navbar"
}

const login = {
    email: "[name='email']",
    password: "[name='password']",
    checkbox: ".checkbox",
    submit: ".button",
    notif: ".notification"
}

const signUp = {
    email: "[name='email']",
    name: "[name='name']",
    password: "[name='password']",
    submit: ".button",
    notif: ".notification"
}

const TEXT = {
    home: "Test home page",
    profile: "Welcome,",
    login: "Login",
    rememberMe: "Remember me",
    signUp: "Sign Up",
    emailExist: "Email address already exists.",
    loginFail: "Please check your login details and try again."
}

const TEXTBTN = {
    home: "Home",
    profile: "Profile",
    logout: "Logout",
    login: "Login",
    signUp: "Sign Up"
}

const page = {
    login: "http://localhost:5000/login",
    signup: "http://localhost:5000/signup",
    profile: "http://localhost:5000/profile"
}

export { login, signUp, TEXT, select, TEXTBTN, page };