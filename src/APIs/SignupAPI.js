const SignupAPI = (email, username, password) => {
  const payload = {
    email: email,
    username: username,
    password: password,
  };
  console.log('payload: ' + payload.email + ', ' + payload.username + ', ' + payload.password);

  fetch('https://pcl.seung.site/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload), // 하드코딩된 데이터 대신 payload 사용
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Sign-up failed: ' + response.statusText);
      }
    })
    .then((data) => {
      console.log('Sign-up successful:', data);
    })
    .catch((error) => {
      console.error('Error during sign-up:', error);
    });
};

export default SignupAPI;
