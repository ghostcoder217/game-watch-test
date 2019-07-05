--
-- Game Watch Smoke Test Database
--
-- Current schema by Tristan Mastrodicasa
--

-- Generate database --

SELECT "Re-create the database" AS "INFO";

DROP DATABASE IF EXISTS game_watch;
CREATE DATABASE IF NOT EXISTS game_watch
	CHARACTER SET utf8mb4
	COLLATE utf8mb4_general_ci;

USE game_watch;

-- Clear tables --

SELECT "Clearing Tables" AS "INFO";

DROP TABLE IF EXISTS email_list, events;

-- Create tables --

SELECT "Creating New Tables" AS "INFO";

CREATE TABLE email_list (
	email       VARCHAR(255) NOT NULL,                -- Subscriber Email
	ip_addr     VARCHAR(255)  NOT NULL                 -- Max two emails per IP
) ENGINE = INNODB;

CREATE TABLE events (
	ip_addr     VARCHAR(255) NOT NULL,                -- Max two players per IP
	join_time   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP -- UTC time of player showing an interest in the event
) ENGINE = INNODB;

CREATE TABLE stats (
	ip_addr     VARCHAR(255) NOT NULL,                -- IP of the user
	target      VARCHAR(255) NOT NULL                 -- The url the user was trying to reach
) ENGINE = INNODB;

SELECT "Done" AS "INFO";