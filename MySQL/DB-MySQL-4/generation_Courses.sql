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
-- Table structure for table `Courses`
--

DROP TABLE IF EXISTS `Courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Courses` (
  `code` varchar(45) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `credits` int DEFAULT NULL,
  `module_code` varchar(45) NOT NULL,
  PRIMARY KEY (`code`),
  KEY `fk_Courses_Modules1_idx` (`module_code`),
  CONSTRAINT `fk_Courses_Modules1` FOREIGN KEY (`module_code`) REFERENCES `Modules` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Courses`
--

LOCK TABLES `Courses` WRITE;
/*!40000 ALTER TABLE `Courses` DISABLE KEYS */;
INSERT INTO `Courses` VALUES ('DB-MYSQL-1','Introduction to Relational Databases',20,'DB-MYSQL'),('DB-MYSQL-2','Creating Relational Databases with MySQL',20,'DB-MYSQL'),('DB-MYSQL-3','Introduction to SQL',20,'DB-MYSQL'),('DB-MYSQL-4','Advanced SQL - Joining Tables',20,'DB-MYSQL'),('INTRO-CS-1','Introduction to Computer Science',16,'INTRO-CS'),('INTRO-CS-2','Introduction to Algorithms',16,'INTRO-CS'),('INTRO-CS-3','Algorithm Design and Problem Solving - Introduction ',16,'INTRO-CS'),('INTRO-CS-4','Algorithm Design and Problem Solving - Advanced',16,'INTRO-CS'),('INTRO-CS-5','Terminal Fundamentals',16,'INTRO-CS'),('INTRO-CS-6','Source Control Using Git',16,'INTRO-CS'),('INTRO-CS-7','Agile Software Development with SCRUM',16,'INTRO-CS'),('INTRO-WEB-1','Introduction to Web Applications',15,'INTRO-WEB'),('INTRO-WEB-2','Introduction to HTML',15,'INTRO-WEB'),('INTRO-WEB-3','Introduction to CSS',15,'INTRO-WEB'),('INTRO-WEB-4','Advanced HTML',15,'INTRO-WEB'),('INTRO-WEB-5','Advanced CSS',15,'INTRO-WEB'),('INTRO-WEB-6','Introduction to Bootstrap Framework',15,'INTRO-WEB'),('INTRO-WEB-7','Introduction to JavaScript for Web Development',15,'INTRO-WEB'),('JAVA-1','Introduction to Java',21,'JAVA'),('JAVA-10','Object Oriented Programming - Advanced',21,'JAVA'),('JAVA-11','Polymorphism and Inheritance',21,'JAVA'),('JAVA-12','Unit Testing with JUnit',21,'JAVA'),('JAVA-13','Module Final Project',25,'JAVA'),('JAVA-2','Java IDE - IntelliJ Idea ',21,'JAVA'),('JAVA-3','Variables, Data Types and Operators',21,'JAVA'),('JAVA-4','Logic Operators',21,'JAVA'),('JAVA-5','Control Flow',21,'JAVA'),('JAVA-6','Loops',21,'JAVA'),('JAVA-7','Functions ',21,'JAVA'),('JAVA-8','Collections',21,'JAVA'),('JAVA-9','Object Oriented Programming - Fundamentals',21,'JAVA'),('JS-1','Data Types and Variables',18,'JS'),('JS-10','Unit tests in JavaScript',18,'JS'),('JS-2','Declare and use Functions',18,'JS'),('JS-3','Control Flow',18,'JS'),('JS-4','Arrays and Loops',18,'JS'),('JS-5','Operators and Expressions',18,'JS'),('JS-6','DOM Manipulation',18,'JS'),('JS-7','Fetch & Local Storage',18,'JS'),('JS-8','Introduction to Object Oriented Programming',18,'JS'),('JS-9','Introduction to NPM',18,'JS'),('ROLE-1','Introduction to the Java Development Curriculum',15,'ROLE'),('ROLE-2','Introduction to the Java Developer Role',15,'ROLE'),('ROLE-3','Effective Workplace Communication and Collaboration',15,'ROLE'),('ROLE-4','Staying up to Date',15,'ROLE'),('ROLE-5','Problem Solving',15,'ROLE'),('WEB-JAVA-1','Introduction to Web Development using Java',20,'WEB-JAVA'),('WEB-JAVA-2','Introduction to Spring  and Spring Boot Framework',20,'WEB-JAVA'),('WEB-JAVA-3','REST API with Spring Boot',20,'WEB-JAVA'),('WEB-JAVA-4','Spring Data JPA',20,'WEB-JAVA'),('WEB-JAVA-5','Secure API using JWT',20,'WEB-JAVA'),('WEB-JAVA-6','Unit Testing Web Components',20,'WEB-JAVA'),('WEB-JAVA-7','Web Applications Build & Deploy',20,'WEB-JAVA');
/*!40000 ALTER TABLE `Courses` ENABLE KEYS */;
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
