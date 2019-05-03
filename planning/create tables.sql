/*using aeoxxmju6rqwznro;*/
create table if not exists AIRPORT(
	Airport_Code	varchar(4)	not null,
    City			varchar(30) not null,
    Country			varchar(30) not null,
    Airport_Name	varchar(40) not null,
    primary key (Airport_Code));
    
create table if not exists RUNWAY(
	Airport_Code	varchar(4)	not null,
    Runway_ID		varchar(3)	not null,
    Length			int			not null,
    Open_Status		varchar(6)	not null,
    foreign key(Airport_Code) references AIRPORT(Airport_Code));
    
create table if not exists COMPANY(
	Company_Name	varchar(25)	not null,
    Location		varchar(30),
    Phone			char(10),
    primary key (Company_Name));
    
create table if not exists GATES(
	Airport_Code	varchar(4)	not null,
    Section			char		not null,
    Gate_ID			int			not null,
    Company			varchar(25)	not null,
    foreign key (Airport_Code) references AIRPORT(Airport_Code),
    foreign key (Company) references COMPANY (Company_Name));

create table  if  not exists AIRPLANE(
	Tail_no			varchar(8)	not null,
    Plane_type		varchar(8)	not null,
	Flight_hours	int,
    Company			varchar(25),
    MaxToWeight		int,
    MaxLandWeight	int,
    Capacity		int			not null,
    MaxCargoWeight	int			not null,
    primary key (Tail_no),
    foreign key (Company) references COMPANY (Company_Name));
    
create table  if not exists FLIGHTS(
	Flight_no		varchar(8)	not null,
    Tail_no			varchar(8)	not null,
    Origin			varchar(4)	not null,
    Dest			varchar(4)	not null,
    TO_Time			time		not null,
    Land_Time		time		not null,
    Seats			int			not null,
    primary key (Flight_no),
    foreign key (Tail_no) references AIRPLANE (Tail_no),
    foreign key (Origin) references AIRPORT (Airport_Code),
    foreign key (Dest) references AIRPORT (Airport_Code));

create table if not exists PILOT(
	Employee_ID		char(10)	not null,
    Fname			varchar(15)	not null,
    Lname			varchar(15) not null,
    Company			varchar(25) not null,
    Flight_hours	int,
    Title			varchar(15) not null,
    Flight_no		varchar(8)	not null,
    primary key (Employee_ID),
    foreign key (Company) references COMPANY (Company_Name),
    foreign key (Flight_no) references FLIGHTS (Flight_no));
    
create table if not exists FLIGHTDATA(
	Flight_no 		varchar(8)	not null,
    TO_weight		int,
	Fuel			int,
    Callsign		varchar(8),
    foreign key (Flight_no) references FLIGHTS (Flight_no));

create table if not exists TICKETS(
	Ticket_no		char(10)	not null,
    Class			varchar(15),
    Price			decimal(4,2) not null,
    Ssn				char(9)		not null,
    primary key (Ticket_no),
    foreign key (Ssn) references PASSENGER (Ssn));
    
create table if not exists SEATS(
	Flight_no		varchar(10)	not null,
    Ticket_no		char(10)	not null,
    foreign key (Flight_no)	references FLIGHTS (Flight_no),
    foreign key (Ticket_no) references TICKETS (Ticket_no));

create table if not exists PASSENGER(
	Fname			varchar(15)	not null,
    Lname			varchar(15) not null,
    Ssn				char(9)		not null,
    CitizenOf		varchar(20)	not null,
    primary key (Ssn));
    
create table if not exists FREQUENCIES(
	Airport_Code	varchar(4)	not null,
    Frequency		decimal(3,2) not null,
    FreqType		varchar(15)	not null,
    foreign key (Airport_Code) references AIRPORT (Airport_Code));
    
create table if not exists MAINTENANCE_EMPLOYEE(
	Employee_ID		char(10)	not null,
    Company			varchar(25) not null,
    Fname			varchar(15) not null,
    Lname			varchar(15) not null,
    primary key (Employee_ID),
    foreign key (Company) references COMPANY (Company_Name));

create table if not exists MAINTENANCE(
	Tail_no			varchar(8)	not null,
    Work_date		date		not null,
    Work_type		varchar(30) not null,
    Employee_ID		char(10)	not null,
    foreign key (Tail_no) references AIRPLANE (Tail_no),
    foreign key (Employee_ID) references MAINTENANCE_EMPLOYEE (Employee_ID));
    
create table if not exists BAGGAGE(
	Flight_no		varchar(8)	not null,
    Ticket_no		char(10)	not null,
    Bag_number		int,
    Weight			int,
    foreign key (Flight_no) references FLIGHTS (Flight_no),
    foreign key (Ticket_no) references TICKETS (Ticket_no));









    