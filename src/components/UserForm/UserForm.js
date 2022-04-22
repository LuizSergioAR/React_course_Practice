import style from "./UserForm.module.css";
import { useState } from "react";

const UserForm = props => {
	const [username, setUsername] = useState("");
	const [age, setAge] = useState("");

	const nameHandler = (event) => {
		setUsername(event.target.value);
	};

	const ageHandler = (event) => {
		setAge(event.target.value);
	};

	const submitHandle = (event) => {
		event.preventDefault();
        
        if(username.length === 0){
            alert('Campo de usuário Necessário')
            return
        }

        if(age.length === 0){
            alert('Campo de idade Necessário')
            return
        }

        if(age < 0){
            alert('Digite uma idade válida')
            return
        }

		const newUser = {
			id: Math.random(),
			name: username,
			age: age,
		};
		props.newUser(newUser)
	};

	return (
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
	);
};

export default UserForm;
