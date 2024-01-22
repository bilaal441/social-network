package dbfuncs

import (
	"fmt"
	"net/http"
)

type User struct {
	Email string
	Password string
	FirstName string
	LastName string
	userName  string
}

func GetUserData(id string) (user , error ){
   user:= User{}
	err := database.QueryRow("SELECT Id, Password, Nickname,  Profile,  FROM Users WHERE Id=?", id).Scan(&user)
	if err != nil {
		return User{}, err
	}

}
