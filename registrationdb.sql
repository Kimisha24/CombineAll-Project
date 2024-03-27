create database registrationdb;
use registrationdb;

create table users(
	id int primary key not null auto_increment,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    contact_no varchar(10) not null unique,
    email varchar(255) not null unique,
    salt varchar(255),
    access_key  varchar(255),
    pass_word  varchar(255),
    created_time timestamp default current_timestamp
);

truncate table users;
drop table users;

select * from users;

alter table users auto_increment=1;





