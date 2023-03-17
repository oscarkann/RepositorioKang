-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: generation
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Courses_has_Students`
--

DROP TABLE IF EXISTS `Courses_has_Students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Courses_has_Students` (
  `course_code` varchar(45) NOT NULL,
  `students_id_student` int NOT NULL,
  `students_id_type_id` int NOT NULL,
  PRIMARY KEY (`course_code`,`students_id_student`,`students_id_type_id`),
  KEY `fk_Courses_has_Students_Students1_idx` (`students_id_student`,`students_id_type_id`),
  KEY `fk_Courses_has_Students_Courses1_idx` (`course_code`),
  CONSTRAINT `fk_Courses_has_Students_Courses1` FOREIGN KEY (`course_code`) REFERENCES `Courses` (`code`),
  CONSTRAINT `fk_Courses_has_Students_Students1` FOREIGN KEY (`students_id_student`, `students_id_type_id`) REFERENCES `Students` (`idStudent`, `IdType_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Courses_has_Students`
--

LOCK TABLES `Courses_has_Students` WRITE;
/*!40000 ALTER TABLE `Courses_has_Students` DISABLE KEYS */;
INSERT INTO `Courses_has_Students` VALUES ('DB-MYSQL-1',10545,1),('DB-MYSQL-1',22455,1),('JAVA-1',22455,1),('DB-MYSQL-1',22456,1),('JAVA-1',22456,1),('DB-MYSQL-1',22457,1),('JAVA-1',22457,1),('DB-MYSQL-2',22458,1),('JAVA-2',22458,1),('DB-MYSQL-2',22459,1),('JAVA-2',22459,1),('DB-MYSQL-2',22460,1),('JAVA-2',22460,1),('DB-MYSQL-2',22461,1),('JAVA-2',22461,1),('DB-MYSQL-3',22462,1),('JAVA-3',22462,1),('DB-MYSQL-3',22463,1),('JAVA-3',22463,1),('DB-MYSQL-3',22464,1),('JAVA-3',22464,1),('DB-MYSQL-4',22465,1),('JAVA-3',22465,1),('DB-MYSQL-4',22466,1),('JAVA-3',22466,1),('DB-MYSQL-4',22467,1),('JAVA-3',22467,1),('DB-MYSQL-4',22468,1),('JAVA-3',22468,1),('DB-MYSQL-4',22469,1),('JAVA-3',22469,1),('DB-MYSQL-4',22470,1),('JAVA-4',22470,1),('DB-MYSQL-1',22471,1),('JAVA-4',22471,1),('DB-MYSQL-2',22472,1),('JAVA-4',22472,1),('DB-MYSQL-3',22473,1),('JAVA-4',22473,1),('DB-MYSQL-4',22474,1),('JAVA-4',22474,1),('JS-4',22514,1),('JS-4',22515,1),('ROLE-1',22515,1),('JS-4',22516,1),('ROLE-1',22516,1),('JS-4',22517,1),('ROLE-1',22517,1),('JS-4',22518,1),('ROLE-2',22518,1),('JS-4',22519,1),('ROLE-2',22519,1),('JS-4',22520,1),('ROLE-2',22520,1),('JS-4',22521,1),('ROLE-3',22521,1),('JAVA-10',22522,1),('ROLE-3',22522,1),('JAVA-10',22523,1),('ROLE-3',22523,1),('JAVA-10',22524,1),('ROLE-4',22524,1),('JAVA-10',22525,1),('ROLE-4',22525,1),('JAVA-10',22526,1),('ROLE-4',22526,1),('INTRO-CS-1',22527,1),('JAVA-10',22527,1),('INTRO-CS-1',22528,1),('JAVA-10',22528,1),('INTRO-CS-1',22529,1),('JAVA-10',22529,1),('INTRO-CS-1',22530,1),('WEB-JAVA-4',22530,1),('INTRO-CS-3',22531,1),('WEB-JAVA-4',22531,1),('INTRO-CS-2',22532,1),('WEB-JAVA-4',22532,1),('INTRO-CS-2',22533,1),('WEB-JAVA-4',22533,1);
/*!40000 ALTER TABLE `Courses_has_Students` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-17 16:01:34
