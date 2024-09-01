create database breastCancer;
create table Administrator(
	administratorId int not null auto_increment primary key,
    firstName varchar(255) not  null,
    lastName varchar(255) not  null,
    email varchar(255) not null,
    password varchar(255) not null,
    contact int not null,
    designation varchar(255) not null,
    role varchar(255) not null default "Undefined");
    
create table User(
	userId int not null auto_increment primary key,
    firstName varchar(255) not null,
    lastName varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    cnic int not null,
    contact int not null,
    organization varchar(255) not null,
    designation varchar(255) not null,
    province varchar(255) not null,
    district varchar(255) not null,
    city varchar(255) not null,
    streetAddress varchar(255) not null,
    role varchar(255) not null default "Undefined");
    
create table Patient(
	patientId int not null auto_increment primary key,
    firstName varchar(255) not null,
    lastName varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    cnic int not null,
    age int not null,
    sex varchar(255) not null,
    contact int not null,
    province varchar(255) not null,
    district varchar(255) not null,
    city varchar(255) not null,
    streetAddress varchar(255) not null,
    tumorType varchar(255) not null,
    tumorSubType varchar(255) not null,
    checkedBy int not null references User(userId),
    role varchar(255) not null default "Undefined");
    
create table Report(
	reportId int not null auto_increment primary key,
    patientId int not null references Patient(patientId),
    userId int not null references User(userId),
    referredBy varchar(255),
    tumorType varchar(255) not null,
    tumorSubType varchar(255) not null,
    dateTime timestamp)
    
    

    
    