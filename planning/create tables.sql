/*using aeoxxmju6rqwznro;
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
    
create table if not exists GATES(
	Airport_Code	varchar(4)	not null,
    Section			char		not null,
    Gate_ID			int			not null,
    Company			varchar(25)	not null,
    foreign key (Airport_Code) references AIRPORT(Airport_Code));*/
    













    