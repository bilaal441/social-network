package dbfuncs

import (
	"fmt"
	"net/http"
)

type user struct {
	Email string
	Password string
	FirstName string
	LastName string
}

func GetUserData(id string) (user , error ){
   user
	err := database.QueryRow("SELECT Id, Password, Nickname,  Profile,  FROM Users WHERE Id=?", id).Scan(&user)
	if err != nil {
		return user{}, err
	}

}
