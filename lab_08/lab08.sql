--
-- This SQL script builds a monopoly database, deleting any pre-existing version.
--
-- @author kvlinden
-- @author iko2
-- @version Summer, 2015
-- @version Fall, 2021
--

-- Drop previous versions of the tables if they they exist, in reverse order of foreign keys.
DROP TABLE IF EXISTS Property;
DROP TABLE IF EXISTS PlayerGame;
DROP TABLE IF EXISTS Game;
DROP TABLE IF EXISTS Player;

-- Create the schema.
CREATE TABLE Game (
	ID integer PRIMARY KEY, 
	time timestamp
	);

CREATE TABLE Player (
	ID integer PRIMARY KEY, 
	emailAddress varchar(50) NOT NULL,
	name varchar(50)
	);

CREATE TABLE PlayerGame (
	gameID integer REFERENCES Game(ID), 
	playerID integer REFERENCES Player(ID),
	score integer
	);

-- Every monopoly game involves players owning properties
CREATE TABLE Property (
	ownerID integer REFERENCES Player(ID),
	propName varchar(50),
	houseCount integer NOT NULL,
	hotelCount integer NOT NULL,	
	faceValue integer
	);


-- Allow users to select data from the tables.
GRANT SELECT ON Game TO PUBLIC;
GRANT SELECT ON Player TO PUBLIC;
GRANT SELECT ON PlayerGame TO PUBLIC;
GRANT SELECT ON Property TO PUBLIC;


-- Add sample records.
INSERT INTO Game VALUES (1, '2006-06-27 08:00:00');
INSERT INTO Game VALUES (2, '2006-06-28 13:20:00');
INSERT INTO Game VALUES (3, '2006-06-29 18:41:00');

INSERT INTO Player(ID, emailAddress) VALUES (1, 'me@calvin.edu');
INSERT INTO Player VALUES (2, 'king@gmail.edu', 'The King');
INSERT INTO Player VALUES (3, 'dog@gmail.edu', 'Dogbreath');

INSERT INTO PlayerGame VALUES (1, 1, 0.00);
INSERT INTO PlayerGame VALUES (1, 2, 0.00);
INSERT INTO PlayerGame VALUES (1, 3, 2350.00);
INSERT INTO PlayerGame VALUES (2, 1, 1000.00);
INSERT INTO PlayerGame VALUES (2, 2, 0.00);
INSERT INTO PlayerGame VALUES (2, 3, 500.00);
INSERT INTO PlayerGame VALUES (3, 2, 0.00);
INSERT INTO PlayerGame VALUES (3, 3, 5500.00);

INSERT INTO Property VALUES (2, 'Trafalgar Square', 3, 0, 1000.00);
INSERT INTO Property VALUES (1, 'Piccadilly Circle', 3, 0, 700.00);


--SQL Queries

-- A.
--SELECT *
--FROM Game
--ORDER BY time

-- B.
--SELECT *
--FROM Game
--WHERE Time BETWEEN '2006-06-21 08:00:00' AND '2006-06-28 08:00:00'

-- C.
--SELECT *
--FROM Player
--WHERE name IS NOT NULL;

-- D.
--SELECT playerID
--FROM PlayerGame
--WHERE score > 2000;

-- E.
--SELECT *
--FROM Player
--WHERE emailAddress LIKE '%@gmail.com';



--EXCERCISE 8.2

-- A.
--SELECT score
--FROM Player, PlayerGame
--WHERE name = 'The King' AND ID = PlayerID
--ORDER BY score DESC;

-- B.
--SELECT *
--From Player AS P, Game AS G, PlayerGame
--WHERE time = '2006-06-28 13:20:00' AND P.ID = PlayerID AND G.ID = GameID
--ORDER BY score DESC
--LIMIT 1;

-- C.
-- The command helps prevent looking at the same person in the table. It also prevents comparing against the same person on the table multiple times.

--D.
-- I would join a table to itself if it referenced data in itself.
