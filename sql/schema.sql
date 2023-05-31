DROP DATABASE IF EXISTS liquor_db;
CREATE DATABASE liquor_db;

-- USE liquor_db;  

-- CREATE TABLE brand (
--     id INT NOT NULL AUTO_INCREMENT,
--     name VARCHAR(255) NOT NULL,
--     PRIMARY KEY (id)
-- );

-- CREATE TABLE liquor (
--     id INT NOT NULL AUTO_INCREMENT,
--     name INT NOT NULL,
--     brand_id INT NOT NULL,
--     price DECIMAL(10,2) NOT NULL,
--     volume DECIMAL(10,2) NOT NULL,
--     type VARCHAR(255) NOT NULL,
--     description VARCHAR(255) NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (brand_id) REFERENCES brand(id)
-- );