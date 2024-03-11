package dbfuncs

import (
	"database/sql"
	"log"
)

func Getusers()  ([]User_getAllUsers, error){
	rows, err := database.Query("SELECT * FROM User")
	if err != nil {
		return []User_getAllUsers{}, err

	}
	defer rows.Close()
	var user []Categories

	for rows.Next() {
		var oneCat Categories
		err := rows.Scan(&oneCat.Id, &oneCat.Name, &oneCat.Description, &oneCat.Created_at)
		if err != nil {
			return }, err
		}
		user = append(user, oneCat)
	}

	return user, err



}
