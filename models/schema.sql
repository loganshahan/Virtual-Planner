DROP DATABASE IF EXISTS TeamGermany;
CREATE DATABASE TeamGermany;
USE TeamGermany;

CREATE TABLE todos
(
	noteID int NOT NULL AUTO_INCREMENT,
	title varchar(255) NOT NULL,
    body varchar(255) NOT NULL,
    category varchar(255) NOT NULL,
	PRIMARY KEY (noteID),
    FOREIGN KEY (userID) REFERENCES Users(userID)
);







DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
