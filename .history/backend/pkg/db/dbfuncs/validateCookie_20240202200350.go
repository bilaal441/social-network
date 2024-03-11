package dbfuncs

import (
	"time"
)

func ValidateCookie(cookieValue string) bool {

	
	defer db.Close()
	var id string
	var expiration time.Time
	err = db.QueryRow("SELECT Id, expires  FROM Sessions WHERE Id=?", cookieValue).Scan(&id, &expiration)
	if err != nil {
		return false
	}

	return id == cookieValue && !(time.Now().After(expiration))

}
