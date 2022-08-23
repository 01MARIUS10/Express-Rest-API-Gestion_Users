DROP DATABASE `Gestion_de_session`;

CREATE DATABASE `Gestion_de_session`;
USE `Gestion_de_session`;

CREATE TABLE `user`
(
    `user_id` INT NOT NULL AUTO_INCREMENT,
    `user_name`VARCHAR(255) NOT NULL,
    `user_email`VARCHAR(255) NOT NULL,
    `user_picture`VARCHAR(255) ,
    `user_password`VARCHAR(255) NOT NULL,
    `user_function`VARCHAR(50) NOT NULL,
    `user_createDate` TIMESTAMP NOT NULL DEFAULT NOW(), 
    PRIMARY KEY(`user_id`),
    UNIQUE (`user_email`)
);
CREATE TABLE `session`
(
    `session_id` INT NOT NULL AUTO_INCREMENT,
    `session_idUser`INT NOT NULL,
    `session_createDate` TIMESTAMP NOT NULL DEFAULT NOW(), 
    PRIMARY KEY(`session_id`),
    FOREIGN KEY (`session_idUser`) REFERENCES `user`(`user_id`)
);

INSERT INTO `user`(user_name,user_email,user_picture,user_password,user_function) VALUES 
('Dadilove','dadilove@gmail.com','/var/www/html/1.jpg','AZERTYy','Communication'),
('Mathman','Math@gmail.com','/var/www/html/1.jpg','AZERTYy','Communication'),
('Fq','niri@gmail.com','/var/www/html/1.jpg','AZERTYy','Communication'),
('Andriatiana','marie@gmail.com','/var/www/html/1.jpg','AZERTYy','Communication'),
('Razakahasina','vgg@gmail.com','/var/www/html/1.jpg','AZERTYy','Communication');