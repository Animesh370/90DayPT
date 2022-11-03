const Login = () => {


  const handleLogin = () => { 
    console.log("Login wiht this credentials")
  }


  return (
    <>
      <h3>Log In</h3>
      <form onSubmit={handleLogin}>
        <label>Email: </label>
        <input type="email" /><br/>
        <label>Password: </label>
        <input type="password" /><br />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Login;