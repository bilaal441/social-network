package dbfuncs

import (
	"database/sql"
)

func Getusers() ([]User_getAllUsers, error) {
	rows, err := database.Query("SELECT * FROM User")
	if err != nil {
		return []User_getAllUsers{}, err
	}
	defer rows.Close()
	var user []User_getAllUsers

	for rows.Next() {
		var newUser User_getAllUsers
		err := rows.Scan(&)
		if err != nil {
			return []User_getAllUsers{}, err
		}
		user = append(user, )
	}

	return user, err
}

