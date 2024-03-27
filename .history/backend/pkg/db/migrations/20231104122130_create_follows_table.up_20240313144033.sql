CREATE TABLE IF NOT EXISTS Follows (
    FollowerId INTEGER NOT NULL,
    FollowingId INTEGER NOT NULL,
    Status  T
    PRIMARY KEY (FollowerId, FollowingId),
    FOREIGN KEY (FollowerId) REFERENCES Users(Id),
    FOREIGN KEY (FollowingId) REFERENCES Users(Id)

);