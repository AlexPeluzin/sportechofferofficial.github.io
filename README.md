# sportechofferofficial.github.io
copia proyecto cambiar el login
 COPIA DEL PROYECTO CAMBIAR LOGIN O VARIOS CAMBIOS TRIMESTRE PYTHON


kpp


CREATE DATABASE IF NOT EXISTS `sobres` ;
USE `sobres` ;

CREATE TABLE IF NOT EXISTS `sobres`.`planta` (
  `PlanId` INT NOT NULL AUTO_INCREMENT,
  `PlanNombre` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`PlanId`)) ;

CREATE TABLE IF NOT EXISTS `sobres`.`recolectores` (
  `RecId` INT NOT NULL AUTO_INCREMENT,
  `RecIdentificacion` CHAR(10) NOT NULL,
  `RecNombres` VARCHAR(50) NOT NULL,
  `RecTelefono` INT NULL DEFAULT NULL,
  `RecPlanId` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`RecId`),
  CONSTRAINT `RecPlanId`
  FOREIGN KEY (`RecPlanId`)
  REFERENCES `sobres`.`planta` (`PlanId`));
    
  CREATE TABLE IF NOT EXISTS `sobres`.`p_recol` (
  `RecolId` INT NOT NULL AUTO_INCREMENT,
  `RecolNombre` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`RecolId`)) ;
  
  
  
  
    

