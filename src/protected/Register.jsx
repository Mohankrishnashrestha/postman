import { useEffect } from "react";

function Register() {
  const handle = async () => {
    const response = await axios.post("$(API_BASE_URL)/api/v1/register");
  };
  useEffect(() => {
    handle();
  }, []);
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">full Name:</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <input type="email" />
        </div>
      </form>
    </div>
  );
}

export default Register;
