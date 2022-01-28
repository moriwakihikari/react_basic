export class UserProps {
	first_name
	last_name
	email
	password
 
	constructor(
		first_name, last_name, email,
		password, password_confirm) {
 
		this.first_name = first_name
		this.last_name = last_name
		this.email = email
		this.password = password
		this.password_confirm = password_confirm
	}
}