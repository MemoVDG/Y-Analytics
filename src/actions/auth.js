import { myFirebase } from "../firebase/firebase";
import { db } from "../firebase/firebase";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const DATA_REQUEST = "DATA_REQUEST";
export const DATA_SUCCESS = "DATA_SUCCESS";
export const DATA_ERROR = "DATA_ERROR";


const requestSignUp = () => {
  return {
    type: SIGNUP_REQUEST
  };
};

const receiveSignUp = (user) => {
  return {
    type: SIGNUP_SUCCESS,
    user
  };
};

const SignUpError = () => {
  return {
    type: SIGNUP_FAILURE,
  };
};


const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const receiveLogin = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

const loginError = () => {
  return {
    type: LOGIN_FAILURE
  };
};

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

const logoutError = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  };
};

const requestData = () => {
  return {
    type: DATA_REQUEST
  };
};

const receiveData = (userData) => {
  return {
    type: DATA_SUCCESS,
    userData
  };
};

const dataError = () => {
  return {
    type: DATA_ERROR
  }
}



export const signUpUser = (email, password, firstName, lastName) => dispatch => {
  dispatch(requestSignUp());
  myFirebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      return db.collection('users').doc(user.user.uid).set({
        user: user.user.uid,
        firstName: firstName,
        lastName: lastName,
        isSubscriber: false,
      }).then(dispatch(receiveSignUp(user)));
    })
    .catch(error => {
      dispatch(SignUpError());
    });

};



export const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin());
  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(loginError());
    });
};

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(logoutError());
    });
};

export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest());
  myFirebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
      dispatch(receiveLogin(user));
    }
    dispatch(verifySuccess());
  });
};

export const getDataUser = (uid) => dispatch => {
  dispatch(requestData());
  db.collection('users').where("user", "==", uid).get()
    .then(querySnapShot => {
      const data =  querySnapShot.docs.map(doc => doc.data());
      dispatch(receiveData(data))
    })
    .catch(error => {
      dispatch(dataError())
    });
};