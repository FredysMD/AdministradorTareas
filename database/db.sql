CREATE SCHEMA IF NOT EXISTS `administradortareasdb` DEFAULT CHARACTER SET utf8;

USE `administradortareasdb`;

CREATE TABLE IF NOT EXISTS `administradortareasdb`.`tarea` (

    `id`  INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `titulo` VARCHAR(40) NOT NULL,
    `estado` VARCHAR(20) NOT NULL,
    `fecha_entrega` DATE NOT NULL,
    `hora_entrega` TIME NOT NULL,
    `fechayhora_creacion` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    `descripcion` VARCHAR(255) NOT NULL

);
