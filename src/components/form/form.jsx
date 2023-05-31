import { useState } from "react";
import { validate } from "../../middleware/validation.js";
import "./form.css";

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    familyName: "",
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    checkRule: false,
  });
  const [error, setError] = useState({});
	const [success,setSuccess] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
    const err = validate(formValues);
    setError(err);
		setSuccess(Object.keys(err).length === 0 && true);
		
		if (success) {
			setTimeout(() => {
				setSuccess(false);
				setFormValues({
					name: "",
					familyName: "",
					userName: "",
					email: "",
					phone: "",
					password: "",
					confirmPassword: "",
				})
			}, 2000);
		}
  };

  const changeHandler = (inputs) => {
    if (inputs.target.name === "checkRule") {
      setFormValues({
        ...formValues,
        [inputs.target.name]: inputs.target.checked,
      });
			return;
    } else {
      setFormValues({
        ...formValues,
        [inputs.target.name]: inputs.target.value,
      });
    }
  };

  return (
    <>
		<h1 className="text-green-600 text-4xl bg-gray-400 p-2 rounded mb-2 font-medium">Sign Up</h1>
      <form onSubmit={submitHandler} action="#" className="w-96 flex flex-col items-center justify-center">
			<div className="text-red-400 text-sm font-bold text-center">
				{error.empty}
			</div>
			<div className="flex flex-col items-center justify-center">
        <input className="w-80 border border-inherit bg-slate-100	p-2 rounded my-2 hover:bg-slate-300 focus:border-orange-700 text-slate-500"	
          onChange={changeHandler}
          type="text"
          name="name"
          value={formValues.name}
					placeholder="Name"
        />
				<div className="text-red-400 text-sm font-bold text-center">{error.name}</div>
				</div>
				
				<div className="flex flex-col items-center justify-center">
				<input className="w-80 border border-inherit bg-slate-100	p-2 rounded my-2 hover:bg-slate-300 focus:border-orange-700 text-slate-500"	
          onChange={changeHandler}
          type="text"
          name="familyName"
          value={formValues.familyName}
					placeholder="FamilyName"
        />
				<div className="text-red-400 text-sm font-bold text-center">{error.familyName}</div>
				</div>

				<div className="flex flex-col items-center justify-center">
				<input className="w-80 border border-inherit bg-slate-100	p-2 rounded my-2 hover:bg-slate-300 focus:border-orange-700 text-slate-500"	
          onChange={changeHandler}
          type="text"
          name="userName"
          value={formValues.userName}
					placeholder="UserName"
        />
				<div className="text-red-400 text-sm font-bold text-center">{error.userName}</div>
				</div>

				<div className="flex flex-col items-center justify-center">
				<input className="w-80 border border-inherit bg-slate-100	p-2 rounded my-2 hover:bg-slate-300 focus:border-orange-700 text-slate-500"	
          onChange={changeHandler}
          type="email"
          name="email"
          value={formValues.email}
					placeholder="Email"
        />
				<div className="text-red-400 text-sm font-bold text-center">{error.email}</div>
				</div>

				<div className="flex flex-col items-center justify-center">
				<input className="w-80 border border-inherit bg-slate-100	p-2 rounded my-2 hover:bg-slate-300 focus:border-orange-700 text-slate-500"	
          onChange={changeHandler}
          type="phone"
          name="phone"
          value={formValues.phone}
					placeholder="Phone"
        />
				<div className="text-red-400 text-sm font-bold text-center">{error.phone}</div>
				</div>

				<div className="flex flex-col items-center justify-center">
				<input className="w-80 border border-inherit bg-slate-100	p-2 rounded my-2 hover:bg-slate-300 focus:border-orange-700 text-slate-500"	
          onChange={changeHandler}
          type="password"
          name="password"
          value={formValues.password}
					placeholder="Password"
        />
				<div className="text-red-400 text-sm font-bold text-center">{error.password}</div>
				</div>

				<div className="flex flex-col items-center justify-center">
				<input className="w-80 border border-inherit bg-slate-100	p-2 rounded my-2 hover:bg-slate-300 focus:border-orange-700 text-slate-500"	
          onChange={changeHandler}
          type="password"
          name="confirmPassword"
          value={formValues.confirmPassword}
					placeholder="Confirm Password"
        />
				<div className="text-red-400 text-sm font-bold text-center">{error.confirmPassword}</div>
				</div>

				<div className="flex flex-col items-center justify-center">
				<div className="flex items-center justify-center mb-2">
				<input
          onChange={changeHandler}
          type="checkbox"
          name="checkRule"
          checked={formValues.chackRule}
        />
				<span className="ml-2 text-slate-300">Accept the <a href="#" className="text-blue-300">Rules</a>!</span>
				</div>
				<div className="text-red-400 text-sm font-bold text-center">{error.checkRule}</div>
				</div>
				<div className="flex flex-col items-center justify-center">
				<button type="submit" className='w-80 font-bold rounded bg-green-500 text-white text-center p-3 shadow-xl hover:bg-green-600' >Sign Up</button>
				<div className="text-green-400 text-sm font-bold text-center">{success?"Registration Was Successful.":""}</div>
</div>
      </form>
    </>
  );
};

export default Form;
