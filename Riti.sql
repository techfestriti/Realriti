-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: localhost    Database: Riti
-- ------------------------------------------------------
-- Server version	8.0.40-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admins`
--

DROP TABLE IF EXISTS `admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admins` (
  `admin_id` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admins`
--

LOCK TABLES `admins` WRITE;
/*!40000 ALTER TABLE `admins` DISABLE KEYS */;
/*!40000 ALTER TABLE `admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coParticipants`
--

DROP TABLE IF EXISTS `coParticipants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coParticipants` (
  `groupId` varchar(255) NOT NULL,
  `eventId` varchar(5) NOT NULL,
  `participant_name` varchar(255) NOT NULL,
  `participant_rollNo` varchar(50) NOT NULL,
  PRIMARY KEY (`groupId`),
  KEY `eventId` (`eventId`),
  CONSTRAINT `coParticipants_ibfk_1` FOREIGN KEY (`eventId`) REFERENCES `events` (`Eventid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coParticipants`
--

LOCK TABLES `coParticipants` WRITE;
/*!40000 ALTER TABLE `coParticipants` DISABLE KEYS */;
/*!40000 ALTER TABLE `coParticipants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coordinators`
--

DROP TABLE IF EXISTS `coordinators`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coordinators` (
  `coordinator_id` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `Eventid` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`coordinator_id`),
  KEY `Eventid` (`Eventid`),
  CONSTRAINT `coordinators_ibfk_1` FOREIGN KEY (`Eventid`) REFERENCES `events` (`Eventid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coordinators`
--

LOCK TABLES `coordinators` WRITE;
/*!40000 ALTER TABLE `coordinators` DISABLE KEYS */;
/*!40000 ALTER TABLE `coordinators` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `Eventid` varchar(5) NOT NULL,
  `name` varchar(100) NOT NULL,
  `type` enum('individual','group') NOT NULL,
  `description` text,
  `max_participants` int DEFAULT '1',
  `fee` decimal(10,2) NOT NULL,
  PRIMARY KEY (`Eventid`),
  CONSTRAINT `chk_event_type` CHECK ((((`type` = _utf8mb4'individual') and (`max_participants` = 1)) or ((`type` = _utf8mb4'group') and (`max_participants` > 1))))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_participants`
--

DROP TABLE IF EXISTS `group_participants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `group_participants` (
  `group_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `Eventid` varchar(5) DEFAULT NULL,
  `participant_name` varchar(100) DEFAULT NULL,
  `participant_roll_number` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`group_id`),
  KEY `username` (`username`),
  KEY `Eventid` (`Eventid`),
  CONSTRAINT `group_participants_ibfk_1` FOREIGN KEY (`username`) REFERENCES `participants` (`username`),
  CONSTRAINT `group_participants_ibfk_2` FOREIGN KEY (`Eventid`) REFERENCES `events` (`Eventid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_participants`
--

LOCK TABLES `group_participants` WRITE;
/*!40000 ALTER TABLE `group_participants` DISABLE KEYS */;
/*!40000 ALTER TABLE `group_participants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participants`
--

DROP TABLE IF EXISTS `participants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participants` (
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(100) NOT NULL,
  `roll_number` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `college` varchar(100) NOT NULL,
  `course` varchar(50) DEFAULT NULL,
  `semester` int DEFAULT NULL,
  `is_group_member` tinyint(1) DEFAULT '0',
  `role_in_group` varchar(50) DEFAULT 'TeamLeader',
  PRIMARY KEY (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participants`
--

LOCK TABLES `participants` WRITE;
/*!40000 ALTER TABLE `participants` DISABLE KEYS */;
/*!40000 ALTER TABLE `participants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments`
--

DROP TABLE IF EXISTS `payments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments` (
  `payment_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `payment_mode` enum('online','offline') NOT NULL,
  `payment_status` enum('pending','paid') DEFAULT 'pending',
  `amount` decimal(10,2) NOT NULL,
  `transaction_id` varchar(100) DEFAULT NULL,
  `payment_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`payment_id`),
  KEY `username` (`username`),
  CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`username`) REFERENCES `participants` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments`
--

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;
/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registrations`
--

DROP TABLE IF EXISTS `registrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registrations` (
  `ParticipantId` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `Eventid` varchar(5) DEFAULT NULL,
  `payment_mode` enum('online','offline') NOT NULL,
  `payment_status` enum('pending','paid') DEFAULT 'pending',
  `registration_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `participation_status` enum('not_completed','completed') DEFAULT 'not_completed',
  `is_group_event` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`ParticipantId`),
  KEY `username` (`username`),
  KEY `Eventid` (`Eventid`),
  CONSTRAINT `registrations_ibfk_1` FOREIGN KEY (`username`) REFERENCES `participants` (`username`),
  CONSTRAINT `registrations_ibfk_2` FOREIGN KEY (`Eventid`) REFERENCES `events` (`Eventid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registrations`
--

LOCK TABLES `registrations` WRITE;
/*!40000 ALTER TABLE `registrations` DISABLE KEYS */;
/*!40000 ALTER TABLE `registrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `Eventid` varchar(5) DEFAULT NULL,
  `review_text` text NOT NULL,
  `photo_path` varchar(255) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `review_type` enum('general','event_specific') DEFAULT 'event_specific',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`review_id`),
  KEY `username` (`username`),
  KEY `Eventid` (`Eventid`),
  CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`username`) REFERENCES `participants` (`username`),
  CONSTRAINT `reviews_ibfk_2` FOREIGN KEY (`Eventid`) REFERENCES `events` (`Eventid`) ON DELETE SET NULL,
  CONSTRAINT `reviews_chk_1` CHECK ((`rating` between 1 and 5))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-15 12:59:35
