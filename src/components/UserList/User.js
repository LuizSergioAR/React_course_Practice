import style from './User.module.css'

const User = (props) => {
	return (
		<li className={style.text}>
			{props.name} ({props.age} years old)
		</li>
	);
};

export default User;
