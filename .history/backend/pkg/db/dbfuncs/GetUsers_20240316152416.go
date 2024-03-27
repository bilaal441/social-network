package dbfuncs

func Getusers() ([]U, error) {
	rows, err := database.Query("SELECT Id,FirstName, LastName, Nickname, Profile, AboutMe, Privacy_setting, DOB, CreatedAt FROM Users")
	if err != nil {
		return []U{}, err
	}
	defer rows.Close()
	var user []U

	for rows.Next() {
		var newUser U
		err := rows.Scan(&newUser.Id, &newUser.FirstName, &newUser.LastName, &newUser.Nickname, &newUser.Profile, &newUser.AboutMe, &newUser.Privacy_setting, &newUser.DOB, &newUser.CreatedAt)
		if err != nil {
			return []U{}, err
		}
		user = append(user, newUser)
	}

	return user, err
}
