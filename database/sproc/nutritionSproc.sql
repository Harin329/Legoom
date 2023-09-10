USE `legoom`;

DROP PROCEDURE IF EXISTS `addMeal`;
DROP PROCEDURE IF EXISTS `getMeal`;

DELIMITER $$

CREATE PROCEDURE `addMeal`(
    IN _nutrition_id VARCHAR(255),
    IN _nutrition_name VARCHAR(255),
    IN _user_id VARCHAR(255),
    IN _calories INT,
    IN _carbohydrates INT,
    IN _cholesterol INT,
    IN _fiber INT,
    IN _protein INT,
    IN _saturatedFat INT,
    IN _sodium INT,
    IN _sugar INT,
    IN _fat INT,
    IN _unsaturatedFat INT
)
BEGIN
  INSERT INTO `nutrition` (
    `nutrition_id`,
    `nutrition_name`,
    `user_id`,
    `date`,
    `calories`,
    `carbohydrates`,
    `cholesterol`,
    `fiber`,
    `protein`,
    `saturatedFat`,
    `sodium`,
    `sugar`,
    `fat`,
    `unsaturatedFat`
  ) VALUES (
    _nutrition_id,
    _nutrition_name,
    _user_id,
    NOW(),
    _calories,
    _carbohydrates,
    _cholesterol,
    _fiber,
    _protein,
    _saturatedFat,
    _sodium,
    _sugar,
    _fat,
    _unsaturatedFat
  );
END$$

CREATE PROCEDURE `getMeal`()
BEGIN
  SELECT * FROM `nutrition`;
END$$

DELIMITER ;