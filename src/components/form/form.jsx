import { useState } from "react";
import { validate } from "../../middleware/validation.js";
import "./form.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
	const [error, setError] = useState({});
	const [success,setSuccess] = useState(false);
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

  const submitHandler = (e) => {
    e.preventDefault();
    const err = validate(formValues);
    setError(err);
		setSuccess(Object.keys(err).length === 0 && true);
		const isSuccess = Object.keys(err).length === 0;
			setSuccess(isSuccess);
			if (isSuccess) {
				toast.success('Registration Was Successful.');
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
						checkRule: false,
					})
				}, 2500);
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
		<h1 className="w-72 text-center text-white text-4xl bg-green-600 p-2 rounded mb-2 font-medium">Sign Up</h1>
      <form onSubmit={submitHandler} action="#" className="w-72 flex flex-col items-center justify-center">
			<div className="text-red-400 text-xs font-bold text-center">
				{error.empty}
			</div>
			<div className="flex flex-col items-center justify-center">
        <input className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"	
          onChange={changeHandler}
          type="text"
          name="name"
          value={formValues.name}
					placeholder="Name"
        />
				{error.name ? (<div className="text-red-400 text-xs font-bold text-center">{error.name}</div>) : null}
				</div>
				
				<div className="flex flex-col items-center justify-center">
				<input className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"	
          onChange={changeHandler}
          type="text"
          name="familyName"
          value={formValues.familyName}
					placeholder="FamilyName"
        />
				{error.familyName ? (<div className="text-red-400 text-xs font-bold text-center">{error.name}</div>) : null}
				</div>

				<div className="flex flex-col items-center justify-center">
				<input className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"	
          onChange={changeHandler}
          type="text"
          name="userName"
          value={formValues.userName}
					placeholder="UserName"
        />
				{error.userName ? (<div className="text-red-400 text-xs font-bold text-center">{error.name}</div>) : null}
				</div>

				<div className="flex flex-col items-center justify-center">
				<input className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"	
          onChange={changeHandler}
          type="email"
          name="email"
          value={formValues.email}
					placeholder="Email"
        />
				{error.email ? (<div className="text-red-400 text-xs font-bold text-center">{error.email}</div>) : null}
				</div>

				<div className="flex flex-col items-center justify-center">
				<input className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"	
          onChange={changeHandler}
          type="phone"
          name="phone"
          value={formValues.phone}
					placeholder="Phone"
        />
				{error.phone ? (<div className="text-red-400 text-xs font-bold text-center">{error.phone}</div>) : null}
				</div>

				<div className="flex flex-col items-center justify-center">
				<input className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"	
          onChange={changeHandler}
          type="password"
          name="password"
          value={formValues.password}
					placeholder="Password"
        />
				{error.password ? (<div className="text-red-400 text-xs font-bold text-center">{error.password}</div>) : null}
				</div>

				<div className="flex flex-col items-center justify-center">
				<input className="w-72 border border-inherit bg-slate-100	p-1 rounded my-1 hover:bg-slate-300 focus:border-orange-700 text-slate-500"	
          onChange={changeHandler}
          type="password"
          name="confirmPassword"
          value={formValues.confirmPassword}
					placeholder="Confirm Password"
        />
				{error.confirmPassword ? (<div className="text-red-400 text-xs font-bold text-center">{error.confirmPassword}</div>) : null}
				</div>

				<div className="flex flex-col items-center justify-center">
				<div className="flex w-72 p-1 rounded bg-green-700 items-center justify-center mb-2">
				<input
          onChange={changeHandler}
          type="checkbox"
          name="checkRule"
          checked={formValues.checkRule}
        />
				<span className="ml-2 text-slate-300">Accept the <a href="#" className="text-blue-300">Rules</a>!</span>
				</div>
				{error.checkRule ? (<div className="text-red-400 text-xs font-bold text-center">{error.checkRule}</div>) : null}
				</div>
				<div className="flex flex-col items-center justify-center">
				<button type="submit" className='w-72 font-bold rounded bg-green-500 text-white text-center p-3 shadow-xl hover:bg-green-600' >Sign Up</button>

</div>
      </form>
			<ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </>
  );
};

export default Form;
