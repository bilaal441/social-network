package dbfuncs

import "os/user"

func Getusers() ([]user, error) {
	rows, err := database.Query("SELECT Id,FirstName, LastName, Nickname, Profile, AboutMe, Privacy_setting, DOB, CreatedAt FROM Users")
	if err != nil {
		return []user{}, err
	}
	defer rows.Close()
	var user []user

	for rows.Next() {
		var newUser user
		err := rows.Scan(&newUser.Id, &newUser.FirstName, &newUser.LastName, &newUser.Nickname, &newUser.Profile, &newUser.AboutMe, &newUser.Privacy_setting, &newUser.DOB, &newUser.CreatedAt)
		if err != nil {
			return []user{}, err
		}
		user = append(user, newUser)
	}

	return user, err
}
