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

	err := database.QueryRow("SELECT Id, Password, Nickname,  Profile,  FROM Users WHERE Id=?", id).Scan()
	if err != nil {
		
		return 
	}

}
