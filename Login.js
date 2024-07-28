import React , {useState} from "react";
import { IoIosEye ,  IoIosEyeOff} from "react-icons/io";


const Login = () => {

    const [form , setform ] = useState ({
        text:'' , 
        email:'' , 
        number: 1,
        password:''
    });

    const [showPassword, setShowPassword] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name , value } = e.target ;

        if (name === 'text' && value.length > 10) return;
        if (name === 'number' && value < 1) return;

        setform({
            ...form,
            [name]:value

        });
    }; 

    // const handleEmailChange = (e) => {
    //     const value = e.target.value;

    //     const emailList = value.split(',').map(email => email.trim());

    //     setform({
    //       ...form,
    //       email: emailList.join(',')
    //     });
    //   };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);
        setSubmitted(true);
    }


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

return (
<form onSubmit={handleSubmit}>

      <div>
        <label>
          Name:
          <input
            type="text"
            name="text"
            value={form.text}
            onChange={handleChange}
            maxLength="10"
            disabled={submitted}
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            disabled={submitted}
          />
        </label>
      </div>

      <div>
        <label>
            Number:
        <input
            type="number"
            name="number"
            value={form.number}
            onChange={handleChange}
            min="1"
            disabled={submitted}
          />
        </label>
      </div>

      <div>
        <label>
          Password:
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={form.password}
              onChange={handleChange}
              disabled={submitted}
            />
            <button type="button" onClick={togglePasswordVisibility} disabled={submitted}>
              {showPassword ? <IoIosEye/>:< IoIosEyeOff/>  }
            </button>
          </div>
        </label>
      </div>

      <button type="submit" disabled={submitted}>Save Data</button>

</form>

)

}
export default Login ;