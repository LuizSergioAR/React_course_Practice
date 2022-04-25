import style from "./UserForm.module.css";
import { useState } from "react";
import ErrorModal from './../UI/ErrorModal'

const UserForm = props => {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");
	const [error, setError] = useState()

	const nameHandler = (event) => {
		setUsername(event.target.value);
	};

	const ageHandler = (event) => {
		setAge(event.target.value);
	};

	const submitHandle = (event) => {
		event.preventDefault();
        
        if(username.length === 0){
            setError({
				title: 'Invalid input',
				message: 'Please enter a valid name'
			})
            return
        }

        if(age.length === 0){
            setError({
				title: 'Invalid input',
				message: 'Please enter a valid age'
			})
            return
        }

        if(age < 0){
            setError({
				title: 'Invalid input',
				message: 'Please enter a valid age'
			})
            return
        }

		const newUser = {
			id: Math.random(),
			name: username,
			age: age,
		};
		props.newUser(newUser)
	};

	const errorHandler = props =>{
		setError()
	}

	return (
		<div>
			{error &&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
			<form onSubmit={submitHandle} className={style.form}>
			<label>Username: </label>
			<input
				onChange={nameHandler}
				type="text"
				value={username}
				className={style.text}
			/>
			<label>Age(Years): </label>
			<input
				onChange={ageHandler}
				type="number"
				value={age}
				className={style.text}
			/>
			<button type="submit">Add User</button>
		</form>
		</div>
	);
};

export default UserForm;
