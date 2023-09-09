USE `legoom`;

DROP PROCEDURE IF EXISTS `createNutritionTable`;

DELIMITER $$

CREATE PROCEDURE `createNutritionTable` ()
BEGIN

CREATE TABLE `nutrition` (
    `nutrition_id` VARCHAR(255) NOT NULL,
    `user_id` VARCHAR(255) NOT NULL,
    `date` DATE NOT NULL,
    `calories` INT,
    `carbohydrates` INT,
    `cholesterol` INT,
    `fiber` INT,
    `protein` INT,
    `saturatedFat` INT,
    `sodium` INT,
    `sugar` INT,
    `fat` INT,
    `unsaturatedFat` INT,
    PRIMARY KEY (`nutrition_id`)
);

END$$

DELIMITER ;