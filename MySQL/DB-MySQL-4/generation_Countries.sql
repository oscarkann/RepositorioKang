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
-- Table structure for table `Countries`
--

DROP TABLE IF EXISTS `Countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Countries` (
  `idCountries` int NOT NULL,
  `Name` varchar(200) NOT NULL,
  `Code` varchar(45) NOT NULL,
  PRIMARY KEY (`idCountries`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Countries`
--

LOCK TABLES `Countries` WRITE;
/*!40000 ALTER TABLE `Countries` DISABLE KEYS */;
INSERT INTO `Countries` VALUES (1,'Afghanistan','AFG'),(2,'Albania','ALB'),(3,'Algeria','ALG'),(4,'Andorra','AND'),(5,'Angola','ANG'),(6,'Antigua','ANT'),(7,'Argentina','ARG'),(8,'Armenia','ARM'),(9,'Australia','AUS'),(10,'Austria','AUT'),(11,'Azerbaijan','AZE'),(12,'Bahamas','BAH'),(13,'Bahrain','BAR'),(14,'Bangladesh','BAN'),(15,'Barbados','BAR'),(16,'Belarus','BLR'),(17,'Belgium','BEL'),(18,'Belize','BLZ'),(19,'Benin','BEM'),(20,'Bhutan','BHU'),(21,'Bolivia','BOL'),(22,'Bosnia and Herzegovina','BOH'),(23,'Botswana','BOT'),(24,'Brazil','BRA'),(25,'Brunei','BRU'),(26,'Bulgaria','BUL'),(27,'Burkina Faso','BUF'),(28,'Burundi','BUR'),(29,'Côte d Ivoire','CIV'),(30,'Cabo Verde','CVE'),(31,'Cambodia','CMB'),(32,'Cameroon','CAM'),(33,'Canada','CAN'),(34,'Central African Republic','CAP'),(35,'Chad','CHA'),(36,'Chile','CHL'),(37,'China','CHI'),(38,'Colombia','COL'),(39,'Comoros','COM'),(40,'Congo','CON'),(41,'Costa Rica','COS'),(42,'Croatia','CRO'),(43,'Cuba','CUB'),(44,'Cyprus','CYP'),(45,'Czech Republic','CZE'),(46,'Democratic Republic of the Congo','DRC'),(47,'Denmark','DEN'),(48,'Djibouti','DJI'),(49,'Dominica','DON'),(50,'Dominican Republic','DOM'),(51,'Ecuador','ECU'),(52,'Egypt','EGY'),(53,'El Salvador','SAL'),(54,'Equatorial Guinea','EQG'),(55,'Eritrea','ERI'),(56,'Estonia','EST'),(57,'Eswatini','ESW'),(58,'Ethiopia','ETH'),(59,'Fiji','FIJ'),(60,'Finland','FIN'),(61,'France','FRA'),(62,'Gabon','GAB'),(63,'Gambia','GAM'),(64,'Georgia','GEO'),(65,'Germany','GER'),(66,'Ghana','GHA'),(67,'Greece','GRE'),(68,'Grenada','GRN'),(69,'Guatemala','GUA'),(70,'Guinea','GUI'),(71,'Guinea-Bissau','GUB'),(72,'Guyana','GUY'),(73,'Haiti','HAI'),(74,'Holy See','HSE'),(75,'Honduras','HON'),(76,'Hungary','HUN'),(77,'Iceland','ICE'),(78,'India','IND'),(79,'Indonesia','INO'),(80,'Iran','IRN'),(81,'Iraq','IRQ'),(82,'Ireland','IRE'),(83,'Israel','ISR'),(84,'Italy','ITA'),(85,'Jamaica','JAM'),(86,'Japan','JPN'),(87,'Jordan','JOR'),(88,'Kazakhstan','KAZ'),(89,'Kenya','KEN'),(90,'Kiribati','KIR'),(91,'Kuwait','KUW'),(92,'Kyrgyzstan','KYR'),(93,'Laos','LAO'),(94,'Latvia','LAT'),(95,'Lebanon','LEB'),(96,'Lesotho','LES'),(97,'Liberia','LIR'),(98,'Libya','LBY'),(99,'Liechtenstein','LIE'),(100,'Lithuania','LIT'),(101,'Luxembourg','LUX'),(102,'Madagascar','MAD'),(103,'Malawi','MAW'),(104,'Malaysia','MAL'),(105,'Maldives','MLD'),(106,'Mali','MLI'),(107,'Malta','MAL'),(108,'Marshall Islands','MAI'),(109,'Mauritania','MAU'),(110,'Mauritius','MAR'),(111,'Mexico','MEX'),(112,'Micronesia','MIC'),(113,'Moldova','MOL'),(114,'Monaco','MNC'),(115,'Mongolia','MNG'),(116,'Montenegro','MON'),(117,'Morocco','MOR'),(118,'Mozambique','MOZ'),(119,'Myanmar','MYA'),(120,'Namibia','NAM'),(121,'Nauru','NAU'),(122,'Nepal','NEP'),(123,'Netherlands','NED'),(124,'New Zealand','NZE'),(125,'Nicaragua','NIC'),(126,'Niger','NGR'),(127,'Nigeria','NIG'),(128,'North Korea','NKO'),(129,'North Macedonia','NMA'),(130,'Norway','NOR'),(131,'Oman','OMA'),(132,'Pakistan','PAK'),(133,'Palau','PAL'),(134,'Palestine State','PAS'),(135,'Panama','PAN'),(136,'Papua New Guinea','PNG'),(137,'Paraguay','PAR'),(138,'Peru','PER'),(139,'Philippines','PHI'),(140,'Poland','POL'),(141,'Portugal','POR'),(142,'Qatar','QAT'),(143,'Romania','ROM'),(144,'Russia','RUS'),(145,'Rwanda','RWA'),(146,'Saint Kitts and Nevis','SKN'),(147,'Saint Lucia','STL'),(148,'Saint Vincent and the Grenadines','SVG'),(149,'Samoa','SAM'),(150,'San Marino','SMA'),(151,'Sao Tome and Principe','STP'),(152,'Saudi Arabia','SDA'),(153,'Senegal','SEN'),(154,'Serbia','SER'),(155,'Seychelles','SEY'),(156,'Sierra Leone','SLE'),(157,'Singapore','SIN'),(158,'Slovakia','SLK'),(159,'Slovenia','SLO'),(160,'Solomon Islands','SIS'),(161,'Somalia','SON'),(162,'South Africa','SAF'),(163,'South Korea','SKO'),(164,'South Sudan','SSU'),(165,'Spain','SPA'),(166,'Sri Lanka','SRL'),(167,'Sudan','SUD'),(168,'Suriname','SUR'),(169,'Sweden','SWE'),(170,'Switzerland','SWI'),(171,'Syria','SYR'),(172,'Tajikistan','TAJ'),(173,'Tanzania','TAN'),(174,'Thailand','THA'),(175,'Timor-Leste','TIL'),(176,'Togo','TOG'),(177,'Tonga','TON'),(178,'Trinidad and Tobago','TRT'),(179,'Tunisia','TUN'),(180,'Turkey','TUR'),(181,'Turkmenistan','TUR'),(182,'Tuvalu','TUV'),(183,'Uganda','UGA'),(184,'Ukraine','UKR'),(185,'United Arab Emirates','UAE'),(186,'United Kingdom','UK'),(187,'United States of America','USA'),(188,'Uruguay','URU'),(189,'Uzbekistan','UZB'),(190,'Vanuatu','VAN'),(191,'Venezuela','VEN'),(192,'Vietnam','VIE'),(193,'Yemen','YEM'),(194,'Zambia','ZAM'),(195,'Zimbabwe','ZIM');
/*!40000 ALTER TABLE `Countries` ENABLE KEYS */;
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
