package dbfuncs

import (
	"time"

	"github.com/google/uuid"
	_ "github.com/mattn/go-sqlite3"
)

func AddSession(id uuid.UUID, user, UserID string, Expires time.Time) {
	statement, err := database.Prepare("INSERT INTO Sessions VALUES (?,?,?,?)")
  if err != nil{
		panic(err, err.Error())
	}
	statement.Exec(id, user, Expires, UserID)
}
